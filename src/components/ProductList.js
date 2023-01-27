import ProductListItem from "./ProductListItem";

const ProductList = ({arrayOfProducts, handleAddToCart}) => {
    return (

        <ul className="productList wrapper">
            {
                arrayOfProducts.map((productObject) => {
                    return <ProductListItem key={productObject.key} productInfo={productObject} handleClick={handleAddToCart}/>
                })
            }

            {/* {
                arrayOfInventory.map((inventoryObject) => {
                    return <ProductQuantity key={inventoryObject.key} inventoryInfo={inventoryObject} />
                })
            } */}
        </ul>
    )
}

export default ProductList;

