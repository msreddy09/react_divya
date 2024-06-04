

let products = [];
let categories = {}

// reading from the session storage and initilize values
let sessionObject = JSON.parse(sessionStorage.getItem('selectionObj'));
let obj = { category: '', brand: '', model: '' };
// if session object exist, copy the values to initilized object
let selectedObject = { ...obj, ...sessionObject };



// fetch all products from API Call
fetch('https://dummyjson.com/products')
    .then((res) => {
        if (res.ok) {
            return res.json()
        } else {
            //failure
            alert('No products found, please try again')
        }
    })
    .then(json => {

        //success
        products = json.products;
        showCategories(); //calling show catergories method
        if (selectedObject.category) {
            showBrandList();
            let allEls = document.getElementsByClassName('category');
            for (var i = 0; i < allEls.length; i++) {
                allEls[i].classList.remove('activeCategory')
                if (allEls[i].getAttribute('data') === selectedObject.category) {
                    allEls[i].classList.add('activeCategory');
                }
            }
        }

        if (selectedObject.brand) {
            showModals();
            let allEls = document.getElementsByClassName('brand');
            for (var i = 0; i < allEls.length; i++) {
                allEls[i].classList.remove('activebrand')
                if (allEls[i].getAttribute('data') === selectedObject.brand) {
                    allEls[i].classList.add('activebrand');
                }
            }
        }
    })


const handleCategoryClick = (event) => {
    let allEls = document.getElementsByClassName('activeCategory');
    for (var i = 0; i < allEls.length; i++) {
        allEls[i].classList.remove('activeCategory')
    }
    selectedObject.category = event.srcElement.getAttribute('data');
    selectedObject.brand = ''
    sessionStorage.setItem('selectionObj', JSON.stringify(selectedObject));
    event.srcElement.setAttribute('class', 'activeCategory');
    showBrandList()
}
// catergories list on page load
let showCategories = () => {

    //products is an array
    for (let prod of products) {

        if (categories[prod.category] === undefined) {
            categories[prod.category] = prod.stock
        } else {
            categories[prod.category] += prod.stock
        }
    }


    //categories is an object
    let cat = '';
    let catlistEl = document.getElementById('catlist');
    for (let key in categories) {
        cat += `
           <div class="category" data=${key} onclick="handleCategoryClick(event)"> ${key} - ${categories[key]}</div>
        `
    }
    catlistEl.innerHTML = cat;

}


// modals images on brand selection (if already brand selected)
let showModals = () => {
    let modelEl = document.getElementById('models');
    modelEl.innerHTML = '';
    let selectedBrandsArray = products.filter((prod, ind, products) => {
        return (prod.brand === selectedObject.brand && prod.category === selectedObject.category)
    });

    for (let brandItem of selectedBrandsArray) {

        let divEl = document.createElement('div');
        let imgEl = document.createElement('img');
        imgEl.setAttribute('src', brandItem.thumbnail);
        divEl.appendChild(imgEl)
        let spanEl = document.createElement('span');
        let textNode = document.createTextNode(brandItem.title);
        spanEl.appendChild(textNode)
        divEl.appendChild(spanEl)

        let discNode = document.createElement('label');
        let textNode2 = document.createTextNode(brandItem.description);
        discNode.appendChild(textNode2);
        divEl.appendChild(discNode);


        modelEl.appendChild(divEl)
    }
}

const onHandleBrandClick = event => {
    let allEls = document.getElementsByClassName('brand');
    for (var i = 0; i < allEls.length; i++) {
        allEls[i].classList.remove('activebrand')
    }
    selectedObject.brand = event.srcElement.getAttribute('data');
    sessionStorage.setItem('selectionObj', JSON.stringify(selectedObject));
    event.srcElement.classList.add('activebrand');
    showModals(event.srcElement.getAttribute('data'))
}
// Show brand list on category  selection (if already category selected)
let showBrandList = () => {
    let brandlist = document.getElementById('brandlist');
    brandlist.innerHTML = '';
    let brands = {}
    for (let prod of products) {

        if (prod.category === selectedObject.category) {
            if (brands[prod.brand] === undefined) {
                brands[prod.brand] = prod.stock
            } else {
                brands[prod.brand] += prod.stock
            }
        }

    }

    let brandsHeader = document.createElement('h3');
    let textNode = document.createTextNode('Brands');
    brandsHeader.appendChild(textNode);
    brandlist.appendChild(brandsHeader);
    let brandEls = '';
    for (let brand in brands) {
        brandEls += `<div data="${brand}" class="brand" onclick="onHandleBrandClick(event)">${brand} - ${brands[brand]}</div>`
    }
    brandlist.innerHTML = brandEls;
}


//event loop

// console.log('1')
// setTimeout(() => console.log('2'), 2000)
// console.log('3')
// setTimeout(() => console.log('4'), 1000)
// console.log('5')
// setTimeout(() => console.log('6'), 500)









