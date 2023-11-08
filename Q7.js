const express = require('express');
const multer = require('multer');
const app = express();
const port = 3000;

// Configure Multer to store uploaded files in a specific folder
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads/'); // Create a 'uploads' folder in your project directory
    },
    filename: (req, file, cb) => {
        cb(null, file.originalname);
    },
});

const upload = multer({ storage: storage });

app.use(express.static('public')); // Serve files from the 'public' folder

// Single file upload route
app.post('/upload/single', upload.single('file'), (req, res) => {
    res.send('Single file uploaded successfully!');
});

// Multiple files upload route
app.post('/upload/multiple', upload.array('files', 3), (req, res) => {
    res.send('Multiple files uploaded successfully!');
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
