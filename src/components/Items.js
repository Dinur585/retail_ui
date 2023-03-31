import pic from "../images/bookImg.jpg";
import { Store } from '../Store';
import {useContext, useEffect, useReducer, useState} from 'react';
import '../index.css';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import axios from "axios";
//const mockData = require('./items.json');


function Items() {
    // const addToCartHandler = async (item) => {
    //     const existItem = cartItems.find((x) => x._id === product._id);
    //     const quantity = existItem ? existItem.quantity + 1 : 1;
    //     const { data } = await axios.get(`/api/products/${item._id}`);
    //     if (data.countInStock < quantity) {
    //       window.alert('Sorry. Product is out of stock');
    //       return;
    //     }
    //     ctxDispatch({
    //       type: 'CART_ADD_ITEM',
    //       payload: { ...item, quantity },
    //     });
    //   };
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    let [products1] = useState([]);
    const [setProducts] = useState([]);

    const createUser = (username, password) => {
        const user = {username, password}
        return user
    }

    let [result, setResult] = useState([]);

    const loginUser = createUser(username, password)
    axios.get('http://localhost:8009/api/items', loginUser).
    then((resp)=> {
        console.log("resp"+ JSON.stringify(resp.data));
        setResult(resp.data);
    })


    const { state, dispatch: ctxDispatch } = useContext(Store);
//   const addToCartHandler = () => {
//     ctxDispatch({
//       type: 'CART_ADD_ITEM',
//       payload: { ...product, quantity: 1 },
//     });
//   };
//     const products = [
//         {
//           "product_id": 4,
//           "product": "Loaded Cup Dispenser",
//           "price": 90.08,
//           "quantity": 14,
//           "image":'/images/bookImg.jpg'
//         },
//         {
//             "product_id": 4,
//             "product": "Juice - Orange, 341 Ml",
//             "price": 90.08,
//             "quantity": 14
//         },
//         {
//             "product_id": 4,
//             "product": "Cake - Bande Of Fruit",
//             "price": 90.08,
//             "quantity": 14
//         },
//         {
//             "product_id": 4,
//             "product": "Ice Cream - Chocolate",
//             "price": 90.08,
//             "quantity": 14
//         },
//         {
//             "product_id": 4,
//             "product": "Cleaner - Pine Sol",
//             "price": 90.08,
//             "quantity": 14
//         },
//         {
//             "product_id": 4,
//             "product": "Seaweed Green Sheets",
//             "price": 90.08,
//             "quantity": 14
//         }]
return(
    <div>
          <h2>Item Details</h2>
     <div>
        <main>
            <>
            {/* <div  >
            <img src={pic}  className="book"/><label  className="book"> Seaweed Green Sheets</label>
            <button type="button" onclick="alert('Hello world!')"  className="book" onClick={addToCartHandler}>Add to Cart</button>
            </div> */}
            <DataTable value={result} tableStyle={{ minWidth: '50rem' }}>
              <Column field="product_id" header="ProductId"></Column>
               <Column field="product" header="Product Name"></Column>
               <Column field="price" header="Price"></Column>
               <Column field="quantity" header="Quantity"></Column>
              </DataTable>
            </>
        </main>
    
     </div>
    </div>
);
}
export default Items;