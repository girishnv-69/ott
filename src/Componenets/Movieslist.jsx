
import {useEffect, useState } from "react";
import { Link } from "react-router-dom"

const Movieslist = ({movies , title}) =>{

     let[favId , setFavId] = useState([]);
     let[alter,setAlter]= useState(0);

   useEffect(()=>{
        let fav = JSON.parse(localStorage.getItem("fav"));
        setFavId(fav.map((m)=>{return m.id}));
    } , [alter])

    let  handleAddtofav = (movie)=>{
        let fav = JSON.parse(localStorage.getItem("fav"));
        fav.push(movie);
        localStorage.setItem("fav" , JSON.stringify(fav))
        alert("movie added to favorites")
        setAlter(alter+1)
    }

    let remove = (id)=>{
        let fav = JSON.parse(localStorage.getItem("fav"));
       fav=fav.filter((m)=>{return m.id!=id})
        localStorage.setItem("fav" , JSON.stringify(fav))
        alert("movie removed to favorites")
        setAlter(alter+1)
        window.location.reload();
    }
    return(
        <div>
           <h1 id="title">{title}</h1>
                       {movies==null && <div class="ring">Loading  <span></span></div>}        
                    {movies && <div className="all-movies">
                     {movies.map((movie)=>{ 
                         return(
                        <div  className="movie">
                            { favId.includes(movie.id)?
                           <button  id="filledheart"  onClick={()=>{remove(movie.id)}}><i class='bx bxs-heart'></i></button> 
                          :
                           <button id="emptyheart" onClick={()=>{handleAddtofav(movie)}}><i class='bx bx-heart'></i></button>
                            }
                           <Link  to={`/Movielist/${movie.id}`}>
                           <img src={movie.poster} width="220px" height="250px" />
                            <h6>movie name: {movie.moviename}</h6>
                            <p>Hero name; {movie.hero}</p>
                            <p>genre: {movie.genre}</p>
                            <p>Directore: {movie.director}</p>
                            {/* <p>languages; {movie.languages.join("  ")}</p> */}

                          </Link>
                        </div>
                    )
                })}
            </div>}
        </div>
    )
}

export default Movieslist