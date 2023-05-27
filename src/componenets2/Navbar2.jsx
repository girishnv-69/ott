import { Link } from "react-router-dom";

const Navbar2 = () => 
{
    return ( 
            <nav>
                <div id="logo">
                    <Link to="/"><h1>Products 🐸 </h1></Link>
                </div>
                <div id="search-bar">
                    <input type="search" name="" id="" placeholder="search for Products" />
                    <button>search</button>
                </div>
                <div id="add-products">
                    <Link to="/addproducts">Add products</Link>
                </div>
            </nav>

           );
}
 
export default Navbar2;