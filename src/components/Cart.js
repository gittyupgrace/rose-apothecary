import CartItem from "./CartItem";

const Cart = ({showCart, cartArray, handleRemoveFromCart}) => {

    const arrayOfPrices = cartArray.map((item) => {
        return (
            item.itemDetails.price
        )
    });

    let subtotal = arrayOfPrices.reduce((subtotal, itemPrice) => subtotal + itemPrice , 0);

    return (
        <section className={showCart ? "showCart cart wrapper" : "hideCart cart wrapper"}>
            <h2>Your Cart</h2>
            <ul>
                {
                    cartArray.length === 0
                    ?   <div className="emptyCart">
                            <p>Your cart is empty.</p>
                        </div>
                    : cartArray.map((cartItemInfo) => {
                        return <CartItem key={cartItemInfo.key} productInfo={cartItemInfo} handleClick={handleRemoveFromCart} />
                    })
                }
            </ul>
            <h5 className="subtotal">Subtotal: ${subtotal}</h5>
            <button>Checkout</button>
        </section>
    );
}

export default Cart;