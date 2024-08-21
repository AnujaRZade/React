
import { useParams } from "react-router-dom";
import useFetchData from "../../hooks/useFetchData";
import Product from "../../components/product/Product";

const ProductListing = () => {
    const { userId, postId } = useParams();
    const { categoryName } = useParams();
    console.log(categoryName);

    const { data: products = [], error, isLoading } = useFetchData(`http://fakestoreapi.com/products/category/${categoryName}`, []);

    //console.log("Products", products);
    return (
        <>
            {
                products && products.map((product) => {
                    return <Product product={product} />
                })
            }

        </>
    )

}
export default ProductListing;
