//import useState to store info from db and useEffect to define side effect which will fetch data from firebase db
import {useState, useEffect} from "react";

//import firebase to gain access to info in db
import firebase from '../firebase';
//and import firebase modules
import {ref, getDatabase, onValue, push} from 'firebase/database';

import Nav from "./Nav";
import Header from "./Header";
import ProductList from "./ProductList";
import Footer from "./Footer";

const StoreFront = () => {

    //initialise state (set useState to contain an empty array - want to eventually map through the db data so will need to convert/store it as an array)
    const [products, setProducts] = useState([]);

    //useEffect will run once on component load to grab product info from db
    useEffect(() => {

        //store and reference db
        const db = getDatabase(firebase);
        const dbRef = ref(db);

        //use onValue to listen for db changes/current state of db info
        onValue(dbRef, (dbResponse) => {

            //parse/convert db response into useable format for eventually displaying it on the page
            const dbValue = dbResponse.val();
            // console.log(dbValue);

            //empty array to store db data
            const productArray = [];

            //loop through db object and push db data in productArray
            for (let product in dbValue) {
                // console.log(dbValue[product]);
                // console.log(product);

                productArray.push({
                    productDetails: dbValue[product],
                    key: product
                });
            }

            setProducts(productArray);
            // console.log(productArray);
        })

    }, []);

    return (
        <>
            <Nav />
            <Header />
            <ProductList arrayOfProducts={products} />
            <Footer />
        </>
    )
}

export default StoreFront;