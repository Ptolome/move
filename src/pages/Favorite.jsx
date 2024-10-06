import { useEffect, useState,  } from 'react';
import './Favorite.css'
import Pagination from '../components/Pagination';
import { useContext } from 'react';
import { ClickCounterContext } from '../context/click-counter';

export const Favorite = () => {
  const [userLocalData, setUserLocalData] = useState([]);
  const [searchValue, setSearchValue] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(3);
  const [sortField, setSortField] = useState('Title');
  const [sortOrder, setSortOrder] = useState('asc');
  const { handleSimbolPres } = useContext(ClickCounterContext);
  
  useEffect(() => {
    const storedData = JSON.parse(window.localStorage.getItem('users'));
    if (storedData) {
      setUserLocalData(storedData);
    }
  }, []);
  const handleDeleteMoveFromFavorite = (data)=>{
        handleSimbolPres()
    
        const filteredMoves = userLocalData.favoriteMoves.filter((movie)=>movie.imdbID !== data.imdbID)
        userLocalData.favoriteMoves=filteredMoves
        setUserLocalData({ ...userLocalData });
        localStorage.setItem('users', JSON.stringify(userLocalData));
       

    
}
  const handleChangeSearch = (e) => {
    handleSimbolPres()
    setSearchValue(e.target.value);
  };

  const filteredData = userLocalData.favoriteMoves ? userLocalData.favoriteMoves.filter((item) => {
    const title = item.Title.toLowerCase();
    const search = searchValue.toLowerCase();
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

  const handlePageChange = (page) => {
    setCurrentPage(page);
    handleSimbolPres()
    
  };

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
      <h2>the list of favorite movies</h2>
      <label htmlFor=""><input type="text" value={searchValue} onChange={handleChangeSearch}/>строка поиска</label>
      <div>
        <button onClick={() => handleSortChange('Title')}>Sort by Title {sortField === 'Title' && sortOrder === 'asc' ? '↑' : '↓'}</button>
        <button onClick={() => handleSortChange('Year')}>Sort by Year {sortField === 'Year' && sortOrder === 'asc' ? '↑' : '↓'}</button>
        <button onClick={() => handleSortChange('Rating')}>Sort by Rating {sortField === 'Rating' && sortOrder === 'asc' ? '↑' : '↓'}</button>
      </div>
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        pagesPerPage={itemsPerPage}
        onPageChange={handlePageChange}
      />

      {paginatedData.map((item) => (
        <div className='favorite__movie' key={'id'+item.mdbID}>
          <div className='favorite__movie__description'>
            <h2>name: {item.Title}</h2>
            <div>year: {item.Year}</div>

            <div>Released: {item.Released}</div>
            <div>Runtime: {item.Runtime}</div>
            <div> Genre: {item.Genre}</div>
            <div>:Director {item.Director}</div>
            <div>Writer: {item.Writer}</div>
            <div>Actors: {item.Actors}</div>
            <div>Plot: {item.Plot}</div>
            <div>Language: {item.Language}</div>
            <div>Country: {item.Country}</div>
            <div>Awards: {item.Awards}</div>
            <div>Ratings: {item.Ratings.map((item) => (<div>{item.Source}<span>_____{item.Value}</span></div>))}</div>
          </div>
          <div > 
            <div className='favorite__movie__picture'><img src={item.Poster} alt="" /></div>
               <button onClick={()=>handleDeleteMoveFromFavorite(item)}>убрать из избранных</button> 
               
          </div>

        </div>
      ))}
     
    </div>
  );
};