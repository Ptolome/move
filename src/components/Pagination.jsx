const Pagination = ({ currentPage, totalPages, pagesPerPage, onPageChange }) => {
    const pages = [];
    for (let i = 1; i <= Math.ceil(totalPages / pagesPerPage); i++) {
      pages.push(i);
    }
  
    return (
      <div className="pagination">
        {(pages.length >1 ) &&pages.map((page) => (
          <button
            key={page}
            className={page === currentPage ? 'active' : ''}
            onClick={() => onPageChange(page)}
          >
            {page}
          </button>
        ))}
      </div>
    );
  };
  
  export default Pagination;