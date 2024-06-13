import React, { useState } from "react";
import { useEffect } from "react";
import useFetchData from "./customehooks";
import Button from "./Button";

const Products = () => {

    const productsData = useFetchData('https://dummyjson.com/products/category/smartphones');
    let  users = useFetchData('https://fakestoreapi.com/users');

    const onButtonClick = () => {
        alert();
    }
   

    return (<>
        <Button label="Get Product" type='primary' handleClick={onButtonClick}/>
        <div style={{ display: "flex" }}>

           
            <div>
                <h3>Products</h3>
                {!productsData.data && productsData.error && <div>Something went wrong in Products services</div>}
                {productsData?.data?.products.length == 0 && <div>No products available</div>}
                {productsData.data && productsData.data.products.map((p, i) => {
                    return <div>{p.title}</div>
                })}
            </div>
            <div>
                <h3>Users</h3>
                {!users.data && users.error && <div>Something went wrong in Users Service</div>}
                {users.data && !users.error && users.data.map((u, i) => {
                    return <div>{u.name.firstname} {u.name.lastname}</div>
                })}
            </div>
        </div>

    </>)

}

export default Products;