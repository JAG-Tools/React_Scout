const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');

const server = express();
const PORT = process.env.PORT || 9999;

server.use(bodyParser.json());
server.use(cors());
server.use(express.static(path.join(__dirname, '../client')));

server.listen(PORT, () => console.log(`Listening on port ${PORT}`));

let state;

server.get('/stateRetrieve', (req, res) => {
  res.send(JSON.stringify(state));
});

server.post('/stateUpdate', (req, res) => {
  console.log('There has been an Update', req.body);
  state = req.body;
  res.send('State Update Received!');
});

