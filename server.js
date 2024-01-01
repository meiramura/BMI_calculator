const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const app = express();
const port = 3000;

// Use body-parser middleware to parse incoming POST data
app.use(bodyParser.urlencoded({ extended: true }));

// Serve static files from the 'public' folder
app.use(express.static('public'));

// Serve index.html for the root path
app.get('/', (req, res) => {
    const indexPath = path.join(__dirname + '/view/index.html');
    res.sendFile(indexPath);
});

// Use routes from bmiRoutes.js
app.use('/', require('./routes/bmiRoutes'));

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
