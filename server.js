const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());

const database = {
  users: [
    {
      id: '123',
      name: 'John',
      email: 'john@gmail.com',
      password: 'cookies',
      entries: 0,
      joined: new Date(),
    },
    {
      id: '124',
      name: 'Sally',
      email: 'sally@gmail.com',
      password: 'bananas',
      entries: 0,
      joined: new Date(),
    },
  ],
};

//Route/Endpoints
app.get('/', (req, res) => {
  res.send(database.users);
});

app.post('/signin', (req, res) => {
  if (
    req.body.email === database.users[0].email &&
    req.body.password === database.users[0].password
  ) {
    res.json('success');
  } else {
    res.status(400).json('error logging in');
  }
});

app.listen(3000, () => {
  console.log('listening now on port 3000');
});

/* Routes/Endpoints
/ (root route)--> res = this is working
/signin --> POST (create new users with json data) = res with either success/fail or return new created user object that will return
/register --> POST (register new user add data to a DB or a variable for now) = new user object
/profile/:userID --> GET = user (this will be for home screen)
/image --> PUT => updated how many times a person adds a image = res user update

*/
