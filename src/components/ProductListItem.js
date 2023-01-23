// import ProductQuantity from "./ProductQuantity";
import AddToCart from "./AddToCart";

const ProductListItem = ({productInfo, handleAddToCart}) => {

    // console.log(productInfo);  

    return (
        <li className="productListItem" key={productInfo.key}>
            <div className="productImageContainer">
                <img src={productInfo.productDetails.image} alt={productInfo.productDetails.alt} />

            {/* 
                {
                    inventoryInfo.map((inventoryObject) => {
                        return <ProductQuantity key={inventoryObject.key} quantityInfo={inventoryObject} />
                    })
                } */}
                
            {/* <ProductQuantity quantity={inventoryInfo.productInventory}/> */}


            </div>
            <h3>{productInfo.productDetails.name}</h3>
            <AddToCart productPrice={productInfo.productDetails.price} productKey={productInfo.key} product={productInfo} handleClick={handleAddToCart}/>
        </li>
    )
}

export default ProductListItem;