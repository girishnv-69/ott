import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Movieslist from "./Movieslist";

const Search = () => {

    let[movies,setMovies]=useState(null);
   let [err,setErr] =useState(null);
   let[pending, setPending]=useState(null)
   let{searchword} = useParams();

    useEffect(()=>{
        setMovies(null)
        setPending(true)
        setTimeout(()=>{
            fetch("http://localhost:4000/movies/")
            .then((res)=>{return res.json()})
            .then((data)=>{
               let d = data.filter((m)=>
               {
                 return (( m.moviename.toLowerCase().startsWith(searchword.toLowerCase()))  ||
                        ( m.genre.toLowerCase()===(searchword.toLowerCase())) ||
                        (m.languages.some((l)=>{return l.toLowerCase()=== searchword.toLowerCase()})))
                    })
                setMovies(d)
                setPending(false)
            })
            .catch((err)=>{
                setErr("404 Network issue!! please try again")
                setPending(false)
               })
        } , 3000)
    } , [searchword])
    return ( 
        <div >
            {pending == true &&<div class="ring">Loading <span></span></div>}
            {movies && <Movieslist movies={movies} title="Search Movies" /> }
        </div> 
     );
}
export default Search;