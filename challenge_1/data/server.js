const express = require('express');
const cors = require('cors');
const path = require('path');
const jsonServer = require('json-server');
const jServerMidware = jsonServer.defaults();
const jsonRouter = jsonServer.router(path.join(__dirname, 'db.json'));

const app = jsonServer.create();
const port = 3001;

app.use(express.static(path.join(__dirname, '/../public')));
app.use(cors());

app.use(jsonRouter);
app.use(jsonServer.bodyParser);
app.use(jServerMidware);



const server = app.listen(port, function () {
  console.log(`listenting on port:${port}`);
});



module.exports = server;