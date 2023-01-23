import CartItem from "./CartItem";

const Cart = ({cartArray, handleRemoveFromCart}) => {
    return (
        <ul>
            {
                cartArray.map((cartItemInfo) => {
                    return <CartItem key={cartItemInfo.key} productInfo={cartItemInfo} handleRemoveFromCart={handleRemoveFromCart} />
                })
            }
        </ul>
    )
}

export default Cart;