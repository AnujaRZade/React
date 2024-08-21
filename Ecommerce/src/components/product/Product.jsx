

const Product= ({product})=>{
console.log("Products", product);
    return(
        <>  
        <img src={product.image} style={{ height: "60px", width: "60px" }}></img>
        <h1> {product.title}</h1>
        <p>{product.price}</p>
        </>
    )

}
export default Product;
