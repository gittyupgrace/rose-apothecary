//import useState to store info from db and useEffect to define side effect which will fetch data from firebase db
import {useState, useEffect} from "react";

//import firebase to gain access to info in db
import firebase from '../firebase';
//and import firebase modules
import {ref, getDatabase, onValue, push, remove} from 'firebase/database';

import ProductList from "./ProductList";
import Cart from "./Cart";

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

            //empty array to store product data
            const productArray = [];

            //loop through db product object and push db data in productArray
            for (let product in productsObject) {

                productArray.push({
                    productDetails: productsObject[product],
                    key: product
                });
            }

            //empty array to store cart data
            const cartArray = [];

            //loop through db cart object and push db data in cartArray
            for (let item in cartObject) {
                cartArray.push({
                    itemDetails: cartObject[item],
                    key: item
                });
            }

            //save db data to state
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
    const addToCart = (productInfo) => {

        const cartInfo = productInfo.productDetails;

        const db = getDatabase(firebase);
        const cartDbRef = ref(db, `cart`);

        push(cartDbRef, cartInfo);
    }


        //function to remove items in cart from db/page
    const removeFromCart = (productInfo) => {
        
        const db = getDatabase(firebase);
        const productRef = ref(db, `/cart/${productInfo.key}`);

        remove(productRef);
    }


    return (
        <main>
            <ProductList arrayOfProducts={products} handleAddToCart={addToCart}/>
            <Cart cartArray={cart} handleRemoveFromCart={removeFromCart} />
        </main>
    )
}

export default StoreFront;