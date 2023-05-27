const Productlist = ({Products , title}) =>{
    return(
        <div>
           <h1>{title}</h1>
                    {Products==null && <h1>Loading.......</h1>}        

                 {Products && <div className="all-movies">
                {Products.map((product)=>{ 
                    return(
                        <div  className="movie">
                            <img src={product.image} width="250px" height="300px" />
                            <h1>{product.Brand}</h1>
                            <p>{product.mrp}</p>
                            {/* <p>{product.dis-price}</p> */}

                        </div>
                    )
                })}
            </div>}
        </div>
    )
}

export default Productlist