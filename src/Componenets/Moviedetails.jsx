import {useEffect, useState } from "react";
import { useNavigate, useParams ,Link } from "react-router-dom";
import Relavant from "./Relavant";
import { Navigate } from "react-router-dom";

const Moviedetails = () => {

    let {id} =useParams();
    let navigate=useNavigate();
    let[movie ,setmovie] = useState(null);
    let[err , setErr]= useState(null);
    let[pending , setpending]=useState(true);

    useEffect(()=>{
        setmovie(null)
        setpending(true)
        setTimeout(()=>{
            fetch("http://localhost:4000/movies/"+id)
            .then((res)=>{return res.json()})
            .then((data)=>{
                console.log(data);
                setmovie(data);
                setpending(false)
            })

            .catch((err)=>{
                    console.log(err);
                    setErr("404 Network issue!! please try again")
                    setpending(false)
            })
        } , 3000)
    } , [id])

    

    let deleteMovie=(()=>{
        fetch( "http://localhost:4000/movies/"+id , {method : "Delete"})
        .then(()=>{navigate("/")})
    })
    return ( 
        <div >
            <h1>Movie details component</h1>
            {pending==true && <h1>Loding......</h1>}
            {movie && <div  className="movie-details">
               
                <img src={movie.poster} width="250px" height="300px" />
                            <h1> {movie.moviename}</h1>
                            <p>Hero name: {movie.hero}</p>
                            <p>{movie.genre}</p>
                            <p>Directore: {movie.director}</p>
                            <p>languages; {movie.languages}</p>
                            <iframe width="560" height="315" src={movie.trailer}
                            title="YouTube video player" frameborder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                            <button onClick={deleteMovie}>Delete</button>
                            <Link to={`/edit/${movie.id}`}><button> Update</button></Link>
        
        </div> }
            {movie && <Relavant genre={movie.genre} />}
        </div>
     );
}
 
export default Moviedetails;