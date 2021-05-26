import $ from 'jquery';

const request = {
  search: (searchString, successCb) => {
    $.ajax({
      url: '/search',
      type: 'GET',
      data: { search: searchString },
      success: successCb,
      error: () => console.log('error searching')
    });
  }
};

export default request;