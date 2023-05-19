const express = require('express');
const helmet = require('helmet');
const cors = require('cors');
const dotenv = require('dotenv');

// This allows to use properties in our .env file created in the project
dotenv.config();

require('./config/db');

const app = express();

app.use(cors());
app.use(helmet());
app.use(express.json());

app.get('/api', (req, res) => {
  res.status(200).json({
    message: 'Server working perfectly'
  })
})

app.listen(process.env.PORT, () => {
  console.log('listening on port ' + process.env.PORT);
})