import {useState, useEffect} from 'react';
import logo from './logo.svg';

import './App.css';

import MovieCard from './moviecard.jsx';




    const batinfo =  {
     "Title": "Batman v Superman: Dawn of Justice",
      "Year": "2016",
        "imdbID": "tt2975590",
         "Type": "movie",
         "Poster": "https://m.media-amazon.com/images/M/MV5BYThjYzcyYzItNTVjNy00NDk0LTgwMWQtYjMwNmNlNWJhMzMyXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg"
}


function App() {

  // ac6b9b03

  const API_URL = 'http://www.omdbapi.com/?apikey=ac6b9b03';

   const[movie, setMovie] = useState([]);
  const [datas , setDatas] = useState("");

 // create usesstate for count


    const searchMovies = async (title)=>{

      const response = await fetch(`${API_URL}&s=${title}`);

      const data = await response.json();

      setMovie(data.Search);

      console.log(movie)

    }
 
    
    useEffect(()=>{ searchMovies('mario') },[] ) 

    // test with a single object




 const getit = ()=>{
    searchMovies(datas);
 }


  return (
    <div className="app">
     
     <h1> MY VIDEO API APP</h1>

     <div className='search'>
  
      <input type = 'text' value={datas} 

      className=''  onChange={ (e)=> setDatas(e.target.value)} /> 

      <button className='' onClick={getit}>Search</button>
          
     </div>

     {movie?.length > 0 ? ( 

          <div className="container">


          {  movie.map((movi)=> (


                 <MovieCard  movie={movi } />


            ) ) }
     

      
    
            </div>
      ):


      (    

        <div className="container">
     

      <h2> no video find</h2>
     </div>

      )



     }



     
     

     
    </div>
  );
}

export default App;
