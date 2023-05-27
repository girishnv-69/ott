import Productlist from "./Productlist";

import { useEffect,useState } from "react";


const ProductHome = () => 
{
    let[products, setproducts] = useState(null);

    useEffect(()=>{
        setTimeout(()=>{
            fetch("http://localhost:4000/Products")
            .then((res)=>{return res.json()})
            .then((data)=>{
                console.log(data);
                setproducts(data);
            })
        } , 3000)
    } , [])

        return(
            <div className="home">
                    {products == null && <h1>Loding........</h1>}

                    <Productlist products={ products}  title ="All products" />
            </div>
                    
                )
}
            
export default ProductHome;