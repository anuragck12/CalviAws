// server.js
const express = require('express');
const mongoose = require('mongoose');
const multer = require('multer');
const cors = require('cors');

const app = express();
const port = 3001;

// Connect to MongoDBmo
mongoose.connect('mongodb://localhost:27017/Calvi');

// Set up CORS middleware
app.use(cors());

// Set up multer for file upload
const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

// Set up routes
const fileController = require('./controllers/fileController');
app.post('/upload', upload.single('file'), fileController.uploadFile);
app.get('/files', fileController.getFiles);
app.get('/file/:id', fileController.getFile);


// Add the root route handler
app.get('/', (req, res) => {
    res.send('Server is running');
});


app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
