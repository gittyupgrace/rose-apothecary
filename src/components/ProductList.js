import ProductListItem from "./ProductListItem";

const ProductList = ({arrayOfProducts, handleAddToCart}) => {

    // console.log(arrayOfProducts);

    return (

        <ul className="productList wrapper">
            {
                arrayOfProducts.map((productObject) => {
                    return <ProductListItem key={productObject.key} productInfo={productObject} handleClick={handleAddToCart}/>
                })
            }
        </ul>
    )
}

export default ProductList;