const axios = require('axios');
const Promise = require('bluebird');
const dbUrl = 'http://localhost:3002/events';

const path = require('path');
const jsonServer = require('json-server');
const jsonRouter = jsonServer.router(path.join(__dirname, 'db.json'));

const db = jsonServer.create();
const dbPort = 3002;
db.use(jsonRouter);


db.listen(dbPort, () => {
  console.log(`json-db listening on port:${dbPort}`);
});


const search =  async (searchString, page) => {
  try {
    let query = `${dbUrl}?q=${searchString}&_page=${page}&_limit=10`;
    let response = await axios.get(query);
    return Promise.resolve(response.data);
  }
  catch (e) { return Promise.reject(`ERROR SEARCHING = ${e}`); }
};

module.exports.search = search;