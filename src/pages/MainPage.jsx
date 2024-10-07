
import { Link } from 'react-router-dom'
import { useGetMovesQuery } from '../store/moveAPI'
import Cart from '../components/Cart'
import TextField from '../components/TextField'
import { useState, useCallback, useContext} from 'react'
import './MainPage.css'
import Pagination from '../components/Pagination'
import { ClickCounterContext } from '../context/click-counter';



export function MainPage() {
  const { data, isLoading } = useGetMovesQuery();
  const [sortField, setSortField] = useState('Title');
  const [sortOrder, setSortOrder] = useState('asc');
  const [searchValue, setSearchValue] = useState('');
  const [debouncedSearchValue, setDebouncedSearchValue] = useState('');
  const [timeoutId, setTimeoutId] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;
  const { handleSimbolPres } = useContext(ClickCounterContext);

  const filteredData = data && data.Search ? data.Search.filter((item) => {
    const title = item.Title.toLowerCase();
    const search = debouncedSearchValue.toLowerCase();
    return title.includes(search);
  }) : [];
  const sortedData = filteredData.sort((a, b) => {
    if (sortOrder === 'asc') {
      return a[sortField] > b[sortField] ? 1 : -1;
    } else {
      return a[sortField] < b[sortField] ? 1 : -1;
    }
  });
  const totalPages = sortedData.length;
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const paginatedData = sortedData.slice(startIndex, endIndex);

  const onPageChange = (page) => {
    setCurrentPage(page);
    handleSimbolPres()
  };
  const handleSearch = useCallback((e) => {
   
    const newValue = e.target.value;
    setSearchValue(newValue);
    handleSimbolPres()
    if (timeoutId) {
      
      clearTimeout(timeoutId);
    }
    const timeout = setTimeout(() => {
      setDebouncedSearchValue(newValue);
    }, 1000);
    setTimeoutId(timeout);
  }, []);
  const handleSortChange = (field) => {
    handleSimbolPres()
    if (sortField === field) {
      setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
    } else {
      setSortField(field);
      setSortOrder('asc');
    }
  };

  return (
    <div className='container'>
      <h2>Main page</h2>
      <div>
        <button onClick={() => handleSortChange('Title')}>Sort by Title {sortField === 'Title' && sortOrder === 'asc' ? '↑' : '↓'}</button>
        <button onClick={() => handleSortChange('Year')}>Sort by Year {sortField === 'Year' && sortOrder === 'asc' ? '↑' : '↓'}</button>
      </div>
      <TextField label="Search" name="Search" type="text" value={searchValue} onChange={handleSearch} />
      <div className='list__cards'>
        {isLoading ? (
        <h1>Loading</h1>
      ) : (
        paginatedData.map((item) => (
          <Link key={'i' + item.imdbID} to={'/move/' + item.imdbID} onClick={handleSimbolPres}>
            <Cart title={item.Title} year={item.Year} poster={item.Poster} />
          </Link>
        ))
      )}
      </div>
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        pagesPerPage={itemsPerPage}
        onPageChange={onPageChange}
      />
    </div>
  );
}