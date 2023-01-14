import ProductListItem from "./ProductListItem";

const ProductList = ({arrayOfProducts}) => {

    // console.log(arrayOfProducts);

    return (

        <ul className="productList wrapper">
            {
                arrayOfProducts.map((productObject) => {
                    return <ProductListItem key={productObject.key} productInfo={productObject} />
                })
            }
        </ul>
    )
}

export default ProductList;