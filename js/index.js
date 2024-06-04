
var tax = 0.06; 
var items = [{ name: "item1", price: 200, disc: 2 }, { name: "item2", price: 100, disc: 1.5 }];
var total = 0;
var country = 'India';
let state = "AP";
const gender = 'F';
var calCulateItemValue = (item, i) => {
    const gender = 'M';
    var country = 'USA';
    let state = "New Jersy";
    console.log(country, state, gender);
    return item.price - (item.price * item.disc / 100) + item.price * tax;
}
console.log(country, state, gender);

// for (var i = 0; i < items.length; i++) {
//     total = total + calCulateItemValue(items[i]);
// }


//for -in can be used to iterate arry of elements and object properties
for (var ind in  items) {
    total = total + calCulateItemValue(items[ind]);
}



var arr = [1,2,3,4,5];

console.log(total);


//array iteration
//object iteration
//object properties access 


// Javascript: truthy and falsy

var id = 12232;    // number;  0 is falsy value
var isStudent = true; // boolean; false is the falsy value
var studName = '' // string; ''(empty string) is the false
var subjects = ["Maths"]; // array; empty array(array.length === 0) is the falsy value
var sal = undefined; // undefined; undefined is a false value
var desg = null; // null; null is falsy
var address = {home: 'XYZ colony'}  // object: empty object(object keys length is 0) is falsy value



if(id) {
    console.log("ID is avaialable " + id); // printing 
}

if(isStudent){
    console.log("He is a Student"); // printing 
}

if(studName){
    console.log("Student name is :" + studName); // not printing 
}

if(subjects.length){
    console.log("Student has subjects :" + subjects); // printing 
}

if(address){
    console.log("Student addresses are :" + address); // printing 
}

if(sal){
    console.log("Student salary is:" + sal); //not printing 
}

if(desg){
    console.log("Student designation is:" + desg); // not printing 
}

//variables and their scopes
// var, let, const
// var scoper is functional where as let scope is block level(function, if, for, while, do while)
// var can be declared any number of times with same name where as let variable can be declared only once with same name
//cosnt vs let: the scope of let and const are same. for const you can not change the value in it's scope. 


// arry.map, filter, reduce