const express = require('express');
const cors = require('cors');
const path = require('path');
const jsonServer = require('json-server');
const jServerMidware = jsonServer.defaults();

const app = express();
const port = 3001;
const db = require('./../data/index');

app.use(express.static(path.join(__dirname, '/../public')));
app.use(cors());

app.use(jsonServer.bodyParser);
app.use(jServerMidware);


app.get('/search', async (req, res) => {
  console.log('req.query = ', req.query);
  let data = await db.search(req.query.search, req.query.page);
  res.send(data);
});

const server = app.listen(port, function () {
  console.log(`listenting on port:${port}`);
});



module.exports = server;