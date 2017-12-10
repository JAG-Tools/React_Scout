const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const server = express();
const PORT = process.env.PORT || 9999;
const corsOptions = {
  origin: 'http://localhost:8080',
  optionsSuccessStatus: 200
};

const corsOptions2 = {
  origin: 'http://localhost:8080',
  optionsSuccessStatus: 200
};

server.use(bodyParser.json());
server.use(cors(corsOptions));
console.log('Working');
server.listen(PORT, () => console.log(`Listening on port ${PORT}`));

let state;

server.post('/stateUpdate', (req, res) => {
  console.log(req.body);
  state = req.body;
  console.log("stateUpdate",state);
  //res.send('State Update Received!');
  res.send(state);
});

server.get('/stateRetrieve', cors(corsOptions2), (req, res) => {
  /*state = req.body;*/
  console.log('stateRetrieve',state)
  res.json(state);
});