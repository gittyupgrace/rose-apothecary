const ProductListItem = ({productInfo, handleClick}) => {
    return (
        <li className="productListItem" key={productInfo.key}>
            <div className="productImageContainer">
                <img src={productInfo.productDetails.image} alt={productInfo.productDetails.alt} />
            </div>
            <h3>{productInfo.productDetails.name}</h3>
            <button onClick={() => { handleClick(productInfo) }}>Add to Cart ${productInfo.productDetails.price}</button>
        </li>
    );
}

export default ProductListItem;