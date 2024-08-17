const express = require('express');
const cors = require('cors');
const generateFakeUser = require('./Controller/FakerData');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());

const users = Array.from({ length: 100 }, (_, index) => generateFakeUser(index + 1));

app.get('/', (req, res) => {
  res.send('Hello from the backend!');
});

app.get('/api/user', (req, res) => {
  res.json({ total: users.length, data: users });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
