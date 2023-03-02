import ProductListItem from "./ProductListItem";

const ProductList = ({arrayOfProducts, handleAddToCart}) => {
    return (
        <section className="wrapper">
            <ul className="productList">
                {
                    arrayOfProducts.map((productObject) => {
                        return <ProductListItem key={productObject.key} productInfo={productObject} handleClick={handleAddToCart}/>
                    })
                }
            </ul>
        </section>
    );
}

export default ProductList;

