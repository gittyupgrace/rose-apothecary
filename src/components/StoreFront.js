import {useState, useEffect} from "react";
import firebase from '../firebase';
import {ref, getDatabase, onValue, push, remove} from 'firebase/database';

import ProductList from "./ProductList";
import Cart from "./Cart";

const StoreFront = ({showCart}) => {

    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);
    
    useEffect(() => {

        const db = getDatabase(firebase);
        const dbRef = ref(db);
        
        onValue(dbRef, (dbResponse) => {

            const dbValue = dbResponse.val();
            
            const productsObject = dbValue.products;
            const cartObject = dbValue.cart;

            const productArray = [];

            for (let product in productsObject) {

                productArray.push({
                    productDetails: productsObject[product],
                    key: product
                });
            }

            const cartArray = [];

            for (let item in cartObject) {
                cartArray.push({
                    itemDetails: cartObject[item],
                    key: item
                });
            }

            setProducts(productArray);
            setCart(cartArray);            
        })

    }, []);

    const addToCart = (productInfo) => {

        const cartInfo = productInfo.productDetails;

        const db = getDatabase(firebase);
        const cartDbRef = ref(db, `cart`);

        push(cartDbRef, cartInfo);
    }

    const removeFromCart = (productInfo) => {
        
        const db = getDatabase(firebase);
        const productRef = ref(db, `/cart/${productInfo.key}`);

        remove(productRef);
    }

    return (
        <main>
            <ProductList arrayOfProducts={products} handleAddToCart={addToCart}/>
            <Cart cartArray={cart} handleRemoveFromCart={removeFromCart} showCart={showCart}/>
        </main>
    );
}

export default StoreFront;