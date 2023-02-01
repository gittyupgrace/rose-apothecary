const CartItem = ({productInfo, handleClick}) => {
    return (
        <li className="cartItem">
            <div className="cartImage">
                <img src={productInfo.itemDetails.image} alt={productInfo.itemDetails.alt} />
            </div>
            <div className="cartItemInfo">
                <h3>{productInfo.itemDetails.name}</h3>
                <p>${productInfo.itemDetails.price}.00</p>
            </div>
            <button className="removeButton" onClick={() => { handleClick(productInfo) }}>Remove Item</button>
        </li>
    );
}

export default CartItem;