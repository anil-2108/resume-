
const arr = ["Hello", 2, 3];
const [first, second, third] = arr;
// console.log(first, second, third);


const obj = {
  employeeId: 1,
  employeeName: "Anil",
  employeeSalary: 50000,
  address: "kodad",
};
const { employeeId, employee, employeeSalary, address } = obj;
console.log(employeeId, employee, employeeSalary, address);


const arr2 = ["Hello", 2, 3, 4, 5];

const [firstString,secondValue, ...remaining] = arr2;

// console.log(remaining);


function displayNames(...a){
    console.log(`The names are: ${a}`)
}

displayNames("Ram", "Charan", "Prabhas", "Jr.NTR", "Mahesh")

const arr3 = ["a", "b", "c"];
const dummy = ["orange", "apple"]
const arr4 = [...arr3,...dummy];
arr3.push("d");
 

const car1 = {name:"lamborghini", price:"1 cr"};
const car2 = {color:"white", engineCC: 10000}
const car = {...car1, ...car2};
console.log(car);


function square(val){
    return val*val
}
function cube(val){
    return val*val*val
}

function sumofSquares(val1,val2){
    let firstValue = square(val1);
    let secondValue = square(val2); 
    return firstValue + secondValue
}
function sumofCubes(val1,val2){
    let firstValue = cube(val1);
    let secondValue = cube(val2); 
    return firstValue + secondValue
}

function sumOfSomething(val1,val2,callbackFn){
    let firstValue = callbackFn(val1);
    let secondValue = callbackFn(val2); 
    return firstValue + secondValue
}

const ans = sumOfSomething(2,3,cube)
console.log(ans);

setInterval(()=>console.log("hello Everyone"), 4000)
