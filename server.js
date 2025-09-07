const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
app.use(bodyParser.json());
app.use(cors());

const PORT = process.env.PORT || 5000;

mongoose.connect('mongodb://localhost/event-planner', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB verbunden...'))
  .catch(err => console.log(err));

app.listen(PORT, () => {
  console.log(`Server läuft auf Port ${PORT}`);
});