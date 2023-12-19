const express = require('express');
const bodyParser = require('body-parser');
const { dbConnect } = require('./src/services/db.service');
const usersRoute = require('./src/routes/users.route');
const sheltersRoute = require('./src/routes/shelters.route');
const app = express();
const cors = require('cors');
const port = 3001;

app.use(cors());
app.use(bodyParser.json());
app.use('/user', usersRoute);
app.use('/shelter', sheltersRoute);

dbConnect().then(() => {
  app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })
}); // init database connection

