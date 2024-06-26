const express = require('express');
const cors = require('cors');
const path = require('path');

const app = express();

// Enable CORS for all origins
app.use(cors());

// Serve files from the "public" directory
app.use(express.static(path.join(__dirname, 'public')));

// Start server
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
