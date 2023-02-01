import CartItem from "./CartItem";

const Cart = ({cartArray, handleRemoveFromCart}) => {
    return (
        <section className="cart wrapper">
            {/* stretch goal: close cart pop-out using 'x' button <button className="exitCart"><span className="sr-only">Exit cart</span>X</button> */}
            <h2>Your Cart</h2>
            <ul>
                {
                    cartArray.map((cartItemInfo) => {
                        return <CartItem key={cartItemInfo.key} productInfo={cartItemInfo} handleClick={handleRemoveFromCart} />
                    })
                }
            </ul>
            <h5 className="subtotal">Subtotal: $</h5>
            <button>Keep Shopping</button>
            <button>Checkout</button>
        </section>
    );
}

export default Cart;