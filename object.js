const cars = [
    {
    name: 'farerrari',
    model: 'f8',
    color: 'yellow',
    price: 1000000
    },
    {
        name: 'lamborghini',
        model: 'aventador',
        color : 'red',
        price: 2000000
    },
    {
        name:'bmw',
        model: 'x6',
        color: 'black',
        price: 500000
    },
    {
        name: 'audi',
        model: 'a8',
        color: 'white',
        price: 600000
    },
    {
        name: 'benzi',
        model: 's-class',
        color: 'blue',
        price: 700000,
    }
];
const expensivecars = cars.filter(car => car.price >= 1000000);
console.log(expensivecars);
const carcolors = cars.filter(car => car.color == 'white');
console.log(carcolors);