const express = require('express');
const cors = require('cors');
const path = require('path');
const jsonServer = require('json-server');
const jsonRouter = jsonServer.router(path.join(__dirname, '../data/db.json'));
const jServerMidware = jsonServer.defaults();

const app = jsonServer.create();
const port = 3001;

app.use(express.static(path.join(__dirname, '/../public')));
app.use(cors());

app.use(jServerMidware);
app.use(jsonRouter);

const server = app.listen(port, function () {
  console.log(`listenting on port:${port}`);
});


module.exports = server;