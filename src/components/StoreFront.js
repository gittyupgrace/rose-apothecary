//import useState to store info from db and useEffect to define side effect which will fetch data from firebase db
import {useState, useEffect} from "react";

//import firebase to gain access to info in db
import firebase from '../firebase';
//and import firebase modules
import {ref, getDatabase, onValue, push, remove} from 'firebase/database';

import ProductList from "./ProductList";
import Cart from "./Cart";
import Footer from "./Footer";

const StoreFront = () => {

    //initialise state (set useState to contain an empty array - want to eventually map through the db data so will need to convert/store it as an array)
    const [products, setProducts] = useState([]);

    // const [quantity, setQuantity] = useState([]);

    const [cart, setCart] = useState([]);
    

    //useEffect will run once on component load to grab product info from db
    useEffect(() => {

        //store and reference db
        const db = getDatabase(firebase);
        const dbRef = ref(db);
        
        
        //use onValue to listen for db changes/current state of db info
        onValue(dbRef, (dbResponse) => {

            //parse/convert db response into useable format for eventually displaying it on the page
            const dbValue = dbResponse.val();
            // console.log(dbValue.products);

            //our database has 2 objects - the products object and the cart object, save both to their own variables for future reference
            const productsObject = dbValue.products;
            const cartObject = dbValue.cart;

            //empty array to store db data
            const productArray = [];

            //loop through db object and push db data in productArray
            for (let product in productsObject) {
                // console.log(dbValue[product]);
                // console.log(product);

                productArray.push({
                    productDetails: productsObject[product],
                    key: product
                });
            }

            const cartArray = [];

            for (let item in cartObject) {
                cartArray.push({
                    productName: cartObject[item],
                    key: item
                });
            }

            setProducts(productArray);
            setCart(cartArray);
                      
            // const inventoryArray = [];

            // for (let quantity in inventoryObject) {
            //     inventoryArray.push({
            //         productInventory: inventoryObject[quantity], 
            //         key: quantity
            //     });
            // }

            // setQuantity(inventoryArray);
            
        })

    }, []);


   
        //function to add item from product list to cart
    const addToCart = (productKey) => {

        const db = getDatabase(firebase);
        const cartDbRef = ref(db, "cart");

        push(cartDbRef, productKey);
    }


        //function to remove items in cart from db
    const removeFromCart = (itemKey) => {
        
        const db = getDatabase(firebase);
        const productRef = ref(db, `/cart/${itemKey}`);

        remove(productRef);
    }


    return (
        <>
            <ProductList arrayOfProducts={products} handleAddToCart={addToCart}/>
            <Cart cartArray={cart} handleRemoveFromCart={removeFromCart} />
            <Footer />
        </>
    )
}

export default StoreFront;