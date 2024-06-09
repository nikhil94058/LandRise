const express = require('express');
const collection = require('./mongo');
const cors = require('cors');
const multer = require('multer'); // Import multer for handling file uploads
const uploadFileToIPFS = require('./model/uploadPinata');

const app = express();
const port = 8000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

// Configure Multer for handling file uploads
const upload = multer();

// Define the endpoint for handling file uploads
app.post('/api/upload', upload.single('file'), async (req, res) => {
  try {
    const file = req.file;

    if (!file) {
      return res.status(400).json({ error: 'No file uploaded' });
    }

    // Call the uploadFileToIPFS function with the file
    const ipfsHash = await uploadFileToIPFS(file);

    res.status(200).json({ ipfsHash });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

app.get('/', cors(), (req, res) => {
  res.send('Welcome to the API');
});


app.post('/', async (req, res) => {
  const { email, password } = req.body;

  try {
    const check = await collection.findOne({ email });

    if (check) {
      res.json('exist');
    } else {
      res.json('notexist');
    }
  } catch (e) {
    console.error('Error during login check:', e);
    res.json('fail');
  }
});

app.post('/signup', async (req, res) => {
  const { email, password } = req.body;

  const data = {
    email,
    password
  };

  try {
    const check = await collection.findOne({ email });

    if (check) {
      res.json('exist');
    } else {
      await collection.insertMany([data]);
      res.json('notexist');
    }
  } catch (e) {
    console.error('Error during signup:', e);
    res.json('fail');
  }
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
