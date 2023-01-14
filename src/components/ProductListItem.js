
const ProductListItem = ({productInfo}) => {

    // console.log(productInfo);

    return (
        <li className="productListItem">
            <div><img src={productInfo.productDetails.image} alt={productInfo.productDetails.alt} /></div>
            <h3>{productInfo.productDetails.name}</h3>
            <p>{productInfo.productDetails.quantity} Left</p>
            <button>Add To Cart ${productInfo.productDetails.price}</button>
        </li>
    )
}

export default ProductListItem;