import React, {useEffect, useState} from 'react';
import './PageMove.css'
import { useGetMoveQuery } from '../store/moveAPI';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';




const PageMove = () => {
    const navigate=useNavigate()
    const [userLocalData, setUserLocalData] = useState([])
    const [isMovieAlreadyAdded,setIsMovieAlreadyAdded]=useState(false)
    const id=useParams()
    const {data,isLoading} = useGetMoveQuery(id)
    const isAuth=useSelector(store=>store.toAuth.isAuth)
    useEffect(() => {
        const storedData = JSON.parse(window.localStorage.getItem('users'));
        if (storedData) {
          setUserLocalData(storedData);
        }
      }, []);
    useEffect(() => {
        if (data && userLocalData && userLocalData.favoriteMoves) {
          const isMovieAlreadyAdded = userLocalData.favoriteMoves.some((movie) => movie.imdbID === data.imdbID);
          setIsMovieAlreadyAdded(isMovieAlreadyAdded);
        }
      }, [data, userLocalData]);
      
      
    
    const handlelAddMoveToFavorite = () => {
        if (!isAuth){
            alert('Воидите в систему')
            navigate('/login/in',{replace:true})
        }
        if (!userLocalData.favoriteMoves) {
          userLocalData.favoriteMoves = [];
        }
        

        if (!isMovieAlreadyAdded) {
            userLocalData.favoriteMoves.push(data);
            setUserLocalData({ ...userLocalData });
            localStorage.setItem('users', JSON.stringify(userLocalData));
            setIsMovieAlreadyAdded(true)
        };
      };
    
    const handleDeleteMoveFromFavorite = ()=>{
        if (!isAuth){
            alert('Воидите в систему')
            navigate('/login/in',{replace:true})
        }
        if (isMovieAlreadyAdded) {
            const filteredMoves = userLocalData.favoriteMoves.filter((movie)=>movie.imdbID !== data.imdbID)
            userLocalData.favoriteMoves=filteredMoves
            setUserLocalData({ ...userLocalData });
            localStorage.setItem('users', JSON.stringify(userLocalData));
            setIsMovieAlreadyAdded(false)

        }
    }
    
   
   
    return (isLoading ? <h2>isLoading</h2>:

            <div className='container'>
              <div className='full_move_cart'>
                <div>
                    <h2>name: {data.Title}</h2>
                    <div>year: {data.Year}</div>

                    <div>Released: {data.Released}</div>
                    <div>Runtime: {data.Runtime}</div>
                    <div> Genre: {data.Genre}</div>
                    <div>:Director {data.Director}</div>
                    <div>Writer: {data.Writer}</div>
                    <div>Actors: {data.Actors}</div>
                    <div>Plot: {data.Plot}</div>
                    <div>Language: {data.Language}</div>
                    <div>Country: {data.Country}</div>
                    <div>Awards: {data.Awards}</div>
                    <div>Ratings: {data.Ratings.map((item) => (<div key={item.Source+data.imdbID}>{item.Source}<span>_____{item.Value}</span></div>))}</div>
                </div>
             <div > <div><img src={data.Poster} alt="" /></div>
                    {isMovieAlreadyAdded && isAuth ? <button onClick={handleDeleteMoveFromFavorite}>убрать из избранных</button> :
                    <button onClick={handlelAddMoveToFavorite}>Добавить в  избранные </button>}
             </div>
             </div>
        </div>
    );
}

export default PageMove;
