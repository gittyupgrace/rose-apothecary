import RemoveFromCart from "./RemoveFromCart";

const CartItem = ({productInfo, handleRemoveFromCart}) => {

    // console.log(productInfo.key)

    return (
        <li className="cartItem">
            <div className="cartItemInfo">
                <div><img src="" alt="" />🖼️</div>
                <h3>{productInfo.productName}</h3>
                <p>$ Price</p>
            </div>
            <RemoveFromCart handleClick={handleRemoveFromCart} productKey={productInfo.key} />
        </li>
    )
}

export default CartItem;