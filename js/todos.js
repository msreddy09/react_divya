let todos = [];



if(localStorage.getItem('todos')) {
    todos = [...JSON.parse(localStorage.getItem('todos'))]
}
const handleInputEnter = (event) => {
    if (event.srcElement.value !== '' & event.keyCode === 13) {
        handleAddTodo();
    }
}

const handleAddTodo = () => {
    
    var todoInput = document.getElementById('todo-text');
    if (todoInput.value) {
        var todoObj = {
            name: todoInput.value,
            checked: false
        }
        todos.push(todoObj);
        todoInput.value = '';

        renderTodosList();

        localStorage.setItem('todos', JSON.stringify(todos))
    } else {
        alert("please enter some text in todo input")
    }
}

const handleDelete = (event) => {
    let todoIndex = parseInt(event.srcElement.getAttribute('data'));
    todos.splice(todoIndex, 1);
    renderTodosList();
    localStorage.setItem('todos', JSON.stringify(todos))
}

const handleEdit = (event) => {
    const todoIndex = parseInt(event.srcElement.getAttribute('data'));
    const selectedEl = todos.splice(todoIndex, 1);
    document.getElementById('todo-text').value = selectedEl[0]?.name;
    renderTodosList();
    localStorage.setItem('todos', JSON.stringify(todos))
}

const handleChekboxChange = (event) => {
    const selectedInd = parseInt(event.srcElement.getAttribute('data'));
    todos[selectedInd].checked = !todos[selectedInd].checked;
    localStorage.setItem('todos', JSON.stringify(todos))
    renderTodosList();
}
const showDashboard = () => {
    if (todos.length) {
        let completedTodos = todos.filter(todo => todo.checked);
        document.getElementById('dashboard').innerHTML = `<div>Completed ${completedTodos.length} of ${todos.length}</div>`
        document.getElementById('actionbar').style.display = 'block'
    } else {
        document.getElementById('dashboard').innerHTML = ``
        document.getElementById('actionbar').style.display = 'none'
    }
}
const renderTodosList = () => {
    let todoEls = '';
    for (let ind in todos) {
        todoEls += `<div class="todo-item-container ${todos[ind].checked ? 'completed' : ''}">
        <div>
            ${todos[ind].checked ? `<span data="${ind}" class="glyphicon glyphicon-check" onclick="handleChekboxChange(event)"></span>` : `<span data="${ind}" class="glyphicon glyphicon-unchecked" onclick="handleChekboxChange(event)"></span>`}
            <span>${todos[ind].name}</span>
        </div>
        <div>
            <button data="${ind}" onclick="handleEdit(event)"><i class="fa fa-pencil-square-o" aria-hidden="true"></i></button>
            <button data="${ind}" onclick="handleDelete(event)"><i class="fa fa-times" aria-hidden="true"></i></button>
        </div>
    </div> `
    }

    let container = document.getElementById('todos-list-container');
    container.innerHTML = todoEls;
    showDashboard();
}

renderTodosList();

const handleDeleteCompletedTodos = () => {
    const notCompletedTodos = todos.filter(todo => !todo.checked);
    todos = [...notCompletedTodos];
    renderTodosList()
}


//A closure is a function having access to the parent scope, even after the parent function has closed
// function add(n) {
//     let n1 = n;

//     return function() {
//         console.log(n1+20);
//     }
// }

// let resultFun = add(10);
// console.log(resultFun())


// function myTagFn(str) {
//     return { "parsed": str[0] }
//  }
//  let result1 =myTagFn`\unicode1` //invalid unicode character
//  console.log(result1)
//  let result2 =myTagFn`\u2764\uFE0F`//valid unicode
//  console.log(result2.parsed)

//  document.getElementById('addBtn').innerText = result2.parsed;


class calculator {
    constructor(color, man, model, year){
        this.color = color;
        this.man= man;
        this.model = model;
        this.year = year;
        console.log(this);
    }

    add(){
        console.log(this);
        this.count = 10;
        console.log(this.model + ' ' + this.year)
    }

    sub = () => {
        console.log(this);
    }

    mod = function() {
        console.log(this);
    }

}

var casio = new calculator('black', 23, 232, 232)



var cal = {
    colr: 'blck',
    add: function(){},
    sub: function(){},
    mod: () => {}
}


var car1 = new Car('black', 'Benz', 'Q2', 2020);
var car2 = new Car('black', 'Audi', 'Q4', 2021);





// var prods = [
//     {
//         "id": 1,
//         "title": "iPhone 9",
//         "description": "An apple mobile which is nothing like apple",
//         "price": 549,
//         "discountPercentage": 12.96,
//         "rating": 4.69,
//         "stock": 94,
//         "brand": "Apple",
//         "category": "smartphones",
//         "thumbnail": "https://cdn.dummyjson.com/product-images/1/thumbnail.jpg",
//         "images": [
//             "https://cdn.dummyjson.com/product-images/1/1.jpg",
//             "https://cdn.dummyjson.com/product-images/1/2.jpg",
//             "https://cdn.dummyjson.com/product-images/1/3.jpg",
//             "https://cdn.dummyjson.com/product-images/1/4.jpg",
//             "https://cdn.dummyjson.com/product-images/1/thumbnail.jpg"
//         ]
//     },
//     {
//         "id": 2,
//         "title": "iPhone 10",
//         "description": "An apple mobile which is nothing like apple",
//         "price": 549,
//         "discountPercentage": 12.96,
//         "rating": 4.69,
//         "stock": 94,
//         "brand": "Apple",
//         "category": "smartphones",
//         "thumbnail": "https://cdn.dummyjson.com/product-images/1/thumbnail.jpg",
//         "images": [
//             "https://cdn.dummyjson.com/product-images/1/1.jpg",
//             "https://cdn.dummyjson.com/product-images/1/2.jpg",
//             "https://cdn.dummyjson.com/product-images/1/3.jpg",
//             "https://cdn.dummyjson.com/product-images/1/4.jpg",
//             "https://cdn.dummyjson.com/product-images/1/thumbnail.jpg"
//         ]
//     }
// ]


// const showTableData = () => {
//    let trs = ''
//    for(let prod of prods){
//       trs += `
//          <tr>
//             <td>${prod.id}</td>
//             <td>${prod.title}</td>
//             <td>${prod.brand}</td>
//             <td>${prod.category}</td>
//             <td>${prod.stock}</td>
//          </tr>
//       `
//    }

//    document.getElementById('prodtablebody').innerHTML = trs;
// }

// showTableData();