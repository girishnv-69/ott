import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => 
{

 let[searchword ,setSearchword] = useState("");
 let[movienames,setMovienames] = useState([]);
    
 
    useEffect(()=>{
        fetch("http://localhost:4000/movies")
        .then((res)=>{return res.json()})
        .then((data)=>{
            let names = data.map((m)=>{return{ moviename : m.moviename , id : m.id}})
            let filternames = names.filter((movie)=>{return movie.moviename.toLowerCase().includes(searchword.toLowerCase())})
            setMovienames(filternames);
        })
    } , [searchword])
    return ( 
            <nav>
                <div id="logo">
                    <Link to="/"><h1>Movies 🐸 </h1></Link>
                </div>
                
               {/* <Link to={`/search/${s.current.Value}`}>
               <div id="search-bar">
                    <input type="search" ref={s} name="" id="" placeholder="search for Movies" />
                    <button>search</button>
                </div>
               </Link> */}

               <div id="search-bar">
                    <input type="search" name="" id="" value={searchword} placeholder="search for Movies" 
                    onChange={(e)=>{setSearchword(e.target.value);}}
                    />
                    <Link to={`/Search/${searchword}`}><button>search</button></Link>
                </div>

                <div id="add-movie">
                    <Link to="/add">Add movies</Link>
                </div>
                <div id="add-movie">
                    <Link to="/Fav">Add Favorites</Link>
                </div>

               {searchword !=="" && <div class="suggestion-box">
                    <ul>
                       {movienames.map((m)=>{return(
                       <Link to={`/Movielist/${m.id}`}>
                        <li onClick={()=>{setSearchword("")}}>{m.moviename}</li></Link>)})}
                    </ul>
                </div>}
            </nav>
           );
}
 
export default Navbar;