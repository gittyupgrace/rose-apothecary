const RemoveFromCart = ({handleClick, productKey}) => {

    // console.log(productKey)
    
    return (
        <button onClick={()=>{handleClick(productKey)}}>Remove From Cart</button>
    )
}

export default RemoveFromCart;