const express = require('express');
const cors = require('cors');
const path = require('path');


const app = express();
const port = 3001;

app.use(express.static(path.join(__dirname, './public')));
app.use(cors());

const server = app.listen(port, () => {
  console.log(`listenting on port:${port}`);
});



module.exports = server;

