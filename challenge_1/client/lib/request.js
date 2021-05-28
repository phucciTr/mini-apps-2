import $ from 'jquery';

const request = {
  search: (searchString, currentPage, successCb) => {
    $.ajax({
      url: '/search',
      type: 'GET',
      data: { search: searchString, page: currentPage },
      success: successCb,
      error: () => console.log('error searching')
    });
  }
};

export default request;