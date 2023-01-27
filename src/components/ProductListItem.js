// import ProductQuantity from "./ProductQuantity";

const ProductListItem = ({productInfo, handleClick}) => {
    return (
        <li className="productListItem" key={productInfo.key}>
            <div className="productImageContainer">
                <img src={productInfo.productDetails.image} alt={productInfo.productDetails.alt} />
                <h4>{productInfo.productDetails.quantity} Left</h4>
            {/* 
                {
                    inventoryInfo.map((inventoryObject) => {
                        return <ProductQuantity key={inventoryObject.key} quantityInfo={inventoryObject} />
                    })
                } */}
                
            {/* <ProductQuantity quantity={inventoryInfo.productInventory}/> */}


            </div>
            <h3>{productInfo.productDetails.name}</h3>
            <button onClick={() => { handleClick(productInfo) }}>Add to Cart ${productInfo.productDetails.productPrice}</button>
        </li>
    )
}

export default ProductListItem;