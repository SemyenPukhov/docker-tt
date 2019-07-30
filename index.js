const express = require('express');
const app = express();
const mongoose = require('mongoose');
const cors = require('cors');

const port = process.env.PORT || 5000;

const mongoDB = 'mongodb://mongo:27017/docker-test';


mongoose.connect(mongoDB, { useNewUrlParser: true }, err => {
  console.log('err', err);
  if (!err) console.log('Db is ready');
});

app.use(express.json());
app.use(cors());

app.use('/user', require('./routes/userRoutes'));

app.listen(port, () =>
  console.log(`Docker-test app listening on port ${port}!`)
);
