const express = require('express');
const bodyParser = require('body-parser');
const { dbConnect } = require('./src/services/db.service');
const usersRoute = require('./src/routes/users.route');
const app = express();
const cors = require('cors');
const port = 3001;

app.use(cors());
app.use(bodyParser.json());
app.use('/user', usersRoute);
dbConnect().then(() => {
  app.get('/app-get', (req, res) => {
    res.sendFile('public/index.html', {root: __dirname })
  });

  app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })
}); // init database connection

