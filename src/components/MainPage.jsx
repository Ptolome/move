
import { Link } from 'react-router-dom'
import { useGetMovesQuery } from '../store/moveAPI'
import Cart from './Cart'

export  function MainPage() {
  const {data, isLoading}=useGetMovesQuery()
  
  
  return ( <div>
     
        <h2>Main page</h2>
        {isLoading ? (<h1>Loading</h1>
        ):(
          data.Search.map((item) =>  <Link to={item.imdbID}> <Cart
         key={item.imdbID}
         title={item.Title}
         year={item.Year}
         poster={item.Poster}/> 
          </Link>)
        )}
       
         </div>
   

  )
}
