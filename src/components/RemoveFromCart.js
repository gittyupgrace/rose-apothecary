const RemoveFromCart = ({handleClick, productKey}) => {

    // console.log(productKey)

    return (
        <button className="removeButton" onClick={()=>{handleClick(productKey)}}>Remove Item</button>
    )
}

export default RemoveFromCart;