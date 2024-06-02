const express = require('express');
const collection = require('./mongo');
const cors = require('cors');
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

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

app.listen(8000, () => {
  console.log('Server running on port 8000');
});
