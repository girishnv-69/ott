import { useEffect,useState } from "react";
import Movieslist from "./Movieslist";

const Homepage = () => 
{

    let[movies, setmovies] = useState(null);
    let[err , seterr]= useState(null);

    useEffect(()=>{

        if(localStorage.getItem("fav")==null)
        {
            localStorage.setItem("fav","[]");

            
        }
        setTimeout(()=>{
            fetch("http://localhost:8000/movies")
            .then((res)=>{return res.json()})
            .then((data)=>{
                console.log(data); 
                setmovies(data);
            })

            .catch((err)=>{
                console.log(err);
                seterr("the page you looking is not available")
               
        })
        } , 3000)
    } , [])
        return (
                <div className="home">
                    {/* {movies == null && <h1>Loding........</h1>} */}

                    <Movieslist movies={ movies}  title ="All movies" />

                    { movies && <Movieslist movies={movies.filter((m)=>{return m.genre.includes("Comedy")})}  title="Comedy movies "/>}

                    { movies && <Movieslist movies={movies.filter((m)=>{return m.rating>=8.5})}  title="Top rated movies "/>}
                   
                    
                </div>
               );
}
 
export default Homepage;