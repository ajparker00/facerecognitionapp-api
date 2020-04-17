const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());

//Route/Endpoints
app.get('/', (req, res) => {
  res.send('Route is working');
});

app.listen(3000, () => {
  console.log('listening now on port 3000');
});
