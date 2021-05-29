import $ from 'jquery';
let uri = 'https://api.coindesk.com/v1/bpi/historical/close.json';
const start = '2021-01-01';
const end = '2021-05-29';

const fetchBPI = (successCb) => {
  $.ajax({
    url: `${uri}?start=${start}&end=${end}`,
    type: 'GET',
    success: successCb,
    error: (e) => console.log('error fetching = ', e)
  })
};

export default fetchBPI;