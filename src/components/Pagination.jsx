import PropTypes from 'prop-types'
import { useContext } from 'react';
import { ClickCounterContext } from '../context/click-counter.js';
const Pagination = ({ currentPage, totalPages, pagesPerPage, onPageChange }) => {
    const pages = [];
    const { handleSimbolPres } = useContext(ClickCounterContext);
    for (let i = 1; i <= Math.ceil(totalPages / pagesPerPage); i++) {
      pages.push(i);
    }
  
    return (
      <div className="pagination">
        {(pages.length >1 ) &&pages.map((page) => (
          <button
            key={page}
            className={page === currentPage ? 'active' : ''}
            onClick={() => {onPageChange(page); handleSimbolPres()}}
          >
            {page}
          </button>
        ))}
      </div>
    );
  };


  Pagination.propTypes={
    currentPage:PropTypes.number.isRequired,
    totalPages:PropTypes.array.isRequired,
    pagesPerPage:PropTypes.number.isRequired,
    onPageChange:PropTypes.func.isRequired
  }
  
  export default Pagination;