const { exec } = require('child_process');

// Command to start http-server on port 8080
const command = 'npx http-server --cors -p 8080';

// Execute the command
const child = exec(command);

// Handle stdout and stderr from the child process
child.stdout.on('data', (data) => {
    console.log(`stdout: ${data}`);
});

child.stderr.on('data', (data) => {
    console.error(`stderr: ${data}`);
});

child.on('error', (err) => {
    console.error('Error executing http-server:', err);
});

// Handle when the http-server process exits
child.on('exit', (code, signal) => {
    console.log(`http-server process exited with code ${code} and signal ${signal}`);
});

// Gracefully stop http-server when Node.js process exits
process.on('SIGINT', () => {
    console.log('\nStopping http-server...');
    child.kill();
    process.exit();
});
