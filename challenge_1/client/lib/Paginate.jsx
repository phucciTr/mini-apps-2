import React from 'react';
import ReactPaginate from 'react-paginate';

const Paginate = ({ handlePageClick }) => (
  <ReactPaginate
  previousLabel={'previous'}
  nextLabel={'next'}
  breakLabel={'...'}
  breakClassName={'break-me'}
  pageCount={20}
  marginPagesDisplayed={2}
  pageRangeDisplayed={2}
  onPageChange={handlePageClick}
  containerClassName={'pagination'}
  activeClassName={'active'}
  />
);

export default Paginate;