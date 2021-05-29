import $ from 'jquery';
const dbUri = '/events'

const request = {
  search: (searchString, currentPage, successCb) => {
    let query = `${dbUri}?q=${searchString}&_page=${currentPage}&_limit=10`;

    $.ajax({
      url: query,
      type: 'GET',
      success: successCb,
      error: () => console.log('error searching')
    });
  }
};

export default request;