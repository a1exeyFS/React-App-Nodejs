const users = require('./routes/users');
const auth = require('./routes/auth');
const cards = require('./routes/cards');
const cors = require('cors');
const express = require('express');
const app = express();
const http = require('http').Server(app);
const mongoose = require('mongoose');
require('dotenv').config()

mongoose.connect(process.env.DB_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false
}).then(() => console.log('Connected to MongoDB Atlas...'))
  .catch(err => console.error('Could not connect to MongoDB...'));

mongoose.set('useCreateIndex', true)

app.use(cors());
app.use(express.json());

app.use('/api/users', users);
app.use('/api/auth', auth);
app.use('/api/cards', cards);

const port = process.env.PORT || 8000;
http.listen(port, () => console.log(`Listening on port ${port}...`));