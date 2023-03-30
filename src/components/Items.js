import pic from "../images/bookImg.jpg";
import { Store } from '../Store';
import { useContext, useState, useEffect } from 'react';
import '../index.css';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import axios from "axios";

//const mockData = require('./items.json');


function Items() {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        axios.get('http://localhost:8010/api/item/items').then((res) => {
            // console.log(res.data);
            setProducts(res.data);
            console.log(products);
        });
    }, []);

    return (
        <div>
            <h2>Item Details</h2>
            <div>
                <main>
                    <>
                        <DataTable value={products} tableStyle={{ minWidth: '50rem' }}>
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