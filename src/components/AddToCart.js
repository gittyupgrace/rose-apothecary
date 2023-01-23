const AddToCart = ({productPrice, productKey, handleClick}) => {
    return (
        <button onClick={()=>{handleClick(productKey)}}>Add to Cart ${productPrice}</button>
    )
}

export default AddToCart;