
const ProductListItem = ({productInfo, handleClick}) => {

    // console.log(productInfo);

    return (
        <li className="productListItem">
            <div className="productImageContainer">
                <img src={productInfo.productDetails.image} alt={productInfo.productDetails.alt} />
                <h4>{productInfo.productDetails.quantity} Left</h4>
            </div>
            <h3>{productInfo.productDetails.name}</h3>
            <button onClick={handleClick}>Add To Cart ${productInfo.productDetails.price}</button>
        </li>
    )
}

export default ProductListItem;