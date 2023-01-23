import ProductListItem from "./ProductListItem";


const ProductList = ({arrayOfProducts, handleAddToCart}) => {

    // console.log(arrayOfProducts);
    // console.log(arrayOfInventory)
    

    return (

        <ul className="productList wrapper">
            {
                arrayOfProducts.map((productObject) => {
                    return <ProductListItem key={productObject.key} productInfo={productObject} handleAddToCart={handleAddToCart}/>
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

