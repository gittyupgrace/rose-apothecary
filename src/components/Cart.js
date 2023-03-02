import CartItem from "./CartItem";

const Cart = ({cartArray, handleRemoveFromCart}) => {

    const arrayOfPrices = cartArray.map((item) => {
        return (
            item.itemDetails.price
        )
    });

    let subtotal = arrayOfPrices.reduce((subtotal, itemPrice) => subtotal + itemPrice , 0);

    console.log(cartArray.length)

    return (
        <section className="cart wrapper">
            <div className="cartHeader">
            <h2>Your Cart</h2>
            <button>X</button>
            </div>
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
            <button>Keep Shopping</button>
            <button>Checkout</button>
        </section>
    );
}

export default Cart;