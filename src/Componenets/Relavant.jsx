import { useEffect, useState } from "react";
import Movieslist from "./Movieslist";

const  Relavant= ({genre}) => {

let[movies,setmovies]=useState(null);

    useEffect(()=>{
        fetch(" http://localhost:4000/movies")
        .then((res)=>{return res.json()})
        .then((data)=>{setmovies(data)})
    },[])

    return ( 
        <div  className="relavent-movies">
            {
                movies && <Movieslist  movies={
                    movies.filter((m)=>{
                        return m.genre.includes(genre)
                    })
                } title="Relavent Movies"/>
            }
        </div>
        
     );
}
 
export default Relavant;