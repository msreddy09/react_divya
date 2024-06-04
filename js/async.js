
// fetch javascrip es6
// javascript ->> jquery library which has sugar quoted methods for javascript
// to getData in jqurey-- AJAX
// to getData in JS -- XMLHTTP Req =>

// const { retry } = require("async");

//    Client ----  server  0
//    client --- data request 1
//    Server: client data process 2
//    server: server data 3
//    server: send data Client 4
//    client: data read/process --> ui (data)

//callback --- promise --> async/await

//xmlhttp request: 200 //sucess 203
//3xx
//400xx
//500xxx

const fetchProductsData = async () => {

    const response = await fetch('https://dummyjson.com/products');
    if(!response.ok) {
        return await response.text();
    } else {
        const responseData = await response.json();
        return responseData.total;
    }
}


const displayUI = async () => {

    const products = await fetchProductsData();
    const el = document.getElementById('products-data');
    el.innerHTML = `<div> Total number of Products are: ${products} <div>`;
}

displayUI();



// fetchProductsData();


// let promise = new Promise((resolve, reject) => {
//     let req = new XMLHttpRequest();
//     req.open('GET', 'https://dummyjson.com/productss');
//     req.onload = function () {
//         if (req.readyState === 4 && req.status === 200) {

//             const data = JSON.parse(req.responseText);
//             resolve(data);
//         }

//         if (req.readyState === 4 && req.status == 404) {
//             reject(req.responseText)
//         }
//     }

//     req.send();

// })

// promise.then((data) => {
//     const el = document.getElementById('products-data');
//     el.innerHTML = `<div> Products Data is displayed: Total number of Products are: ${data.total} <div>`;
// }, (errr) => {
//     const el = document.getElementById('products-data');
//     el.innerHTML = `<div> Products Data is displayed: ${errr} <div>`;

// }).finally(() => console.log('loaded'))





// const getProductData = (cb, cb2) => {

// let req = new XMLHttpRequest();
// req.open('GET', 'https://dummyjson.com/products');

// req.onload = function () {
//     if (req.readyState === 4 && req.status === 200) {

//         const data = JSON.parse(req.responseText);
//         cb(data);
//     }

//     if (req.readyState === 4 && req.status == 404) {
//         cb2(req.responseText)
//     }
// }

//     req.send();



// }
// const displayUI = (data) => {
// const el = document.getElementById('products-data');
// el.innerHTML = `<div> Products Data is displayed: Total number of Products are: ${data.total} <div>`;
// }

// const onError = (data) => {
//     const el = document.getElementById('products-data');
//     el.innerHTML = `<div> Products information: ${data} <div>`;
// }



// getProductData(displayUI, onError);

