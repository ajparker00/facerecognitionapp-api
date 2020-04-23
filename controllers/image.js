const Clarifai = require('clarifai');

// Clarifai API configuration
const app = new Clarifai.App({ apiKey: 'cf96e510072e414f961be9272e245e5a' });

const handleAPICall = (req, res) => {
  app.models
    .predict(Clarifai.FACE_DETECT_MODEL, req.body.input)
    .then((data) => {
      res.json(data);
    })
    .catch((err) => res.status(400).json('unable to work with API'));
};

const handleImage = (req, res, db) => {
  const { id } = req.body;
  db('users')
    .where('id', '=', id)
    .increment('entries', 1)
    .returning('entries')
    .then((entries) => {
      res.json(entries[0]);
    })
    .catch((err) => res.json('Unable to get entries'));
};

module.exports = {
  handleImage: handleImage,
  handleAPICall: handleAPICall,
};
