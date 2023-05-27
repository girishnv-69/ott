
import Addmovie from "./Componenets/Addmovie";
import Favorites from "./Componenets/Favorites";
import Homepage from "./Componenets/Homepage";
import Moviedetails from "./Componenets/Moviedetails";
import Navbar from "./Componenets/Navbar";
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Search from "./Componenets/Search";
import Editmovie from "./Componenets/Editmovie";

import Child from "./Components1/Child";
// import Parent from "./Components1/Parent";


function App()
{

  return (
         <BrowserRouter>
                 <div className="home">
            <Navbar/>
            <Routes>
                <Route  path="/" element={<Homepage/>}/>
              <Route path="/addmovies"  element={<Addmovie/>} />
              <Route path="/Movielist/:id"  element={<Moviedetails/>} />
              <Route path="/Fav"  element={<Favorites/>}/>
              <Route  path="/add" element={<Addmovie/>}/>
              <Route path="/Search/:searchword"  element={<Search/>}/>
              <Route  path="/edit/:id"  element={<Editmovie/>}/>
            </Routes>
          </div>
         </BrowserRouter>
      //    <div>
      // <Parent/>
      //     {/* <Child/> */}
      //    </div>
          
        );
}

export default App;



