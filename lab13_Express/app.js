// app.js
const express = require('express');
const bodyParser = require('body-parser');
const calculatorRouter = require('./routes/calculator');
const path = require('path');

const app = express();
const PORT = 3000;

// Serve static files from the "files" directory
app.use('/files', express.static(path.join(__dirname, 'files')));

// Routes to homepage
app.get('/', (req, res) => {
    res.send('Welcome to my website');
});

app.get('/home', (req, res) => {
    res.send('Welcome to my website');
});

// Route to image
app.get('/image', (req, res) => {
    const imagePath = path.join(__dirname, 'files', 'sample.png');
    res.sendFile(imagePath);
});

// Route to pdf
app.get('/pdf', (req, res) => {
    const pdfPath = path.join(__dirname, 'files', 'sample.pdf');
    res.sendFile(pdfPath);
});

// Route to about text
app.get('/about', (req, res) => {
    const aboutPath = path.join(__dirname, 'files', 'about.txt');
    res.sendFile(aboutPath);
});

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Routes
app.use('/', calculatorRouter);

// Handle 404 not found
app.use((req, res) => {
    res.status(404).send('Not Found');
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
