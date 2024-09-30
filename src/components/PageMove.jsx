import React from 'react';
import { useGetMoveQuery } from '../store/moveAPI';
import { useParams } from 'react-router-dom';


const PageMove = () => {
    const id=useParams()
    console.log(id);
    const {data,isLoading} = useGetMoveQuery(id)
    return (isLoading ? <h2>isLoading</h2>:

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
            <div>Ratings: {data.Ratings.map((item) => (<div>{item.Source}<span>_____{item.Value}</span></div>))}</div>
           
             <div> <img src={data.Poster} alt="" /></div>
          


        </div>
    );
}

export default PageMove;
