import CartItem from "./CartItem";

const Cart = ({cartArray, handleRemoveFromCart}) => {
    return (
        <ul className="cartList wrapper">
            <h2>Your Cart</h2>
            {
                cartArray.map((cartItemInfo) => {
                    return <CartItem key={cartItemInfo.key} productInfo={cartItemInfo} handleRemoveFromCart={handleRemoveFromCart} />
                })
            }
            <h5>Subtotal: $</h5>
            <button>Keep Shopping</button>
            <button>Checkout</button>
        </ul>
    )
}

export default Cart;