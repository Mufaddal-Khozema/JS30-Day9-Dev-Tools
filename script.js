function makeGreen() {
    const p = document.querySelector('p');
    p.style.color = '#BADA55';
    p.style.fontSize = '50px';
}

const dogs = [
    {name: 'Snickers', age: 2},
    {name: 'Hugo', age: 8}
]

// Regular
console.log("Hello");

// Interpolated
const user = 'Mufaddal';
console.log('Hello %s', user);
console.log(`Hello ${user}`);

// Styled
console.log('%cThis is a cool text', 'font-size:100px;color: red;text-shadow:1px 1px 0 blue;');
console.clear();

// warning!
console.warn('TThis is a warning');

// Error: |
console.error('This is an Error');
// Info
console.info('Aligators eat 4-5 people a year');

// Testing
const p = document.querySelector('p');
console.assert(p.classList.contains('ouch'), 'That paragraph does not exist!');
console.clear();

// Clearing


// Viewing DOM Elements
console.log(p);
console.dir(p);

console.clear();

//Grouping
dogs.forEach(dog => {
    console.groupCollapsed(`${dog.name}`);
    console.log(`This is ${dog.name}`);
    console.log(`${dog.name} is ${dog.age} years old`);
    console.log(`${dog.name} is ${dog.age * 7} dog years old`);
    console.groupEnd(`${dog.name}`);
})

// Counting
console.count('Steve');
console.count('Steve');
console.count('Steve');
console.count('Wes');
console.count('Wes');
console.count('Steve');
console.count('Steve');
console.count('Steve');
console.count('Wes');
console.count('Wes');
console.count('Steve');
console.count('Wes');
console.count('Wes');
console.count('Steve');
console.count('Wes');
console.count('Steve');
console.count('Steve');
console.count('Wes');
console.count('Steve');

console.clear();

// Timing
console.time('Fetching Data');
fetch('https://api.github.com/users/mufaddal-khozema')
    .then(data => data.json())
    .then(data => {
        console.timeEnd('Fetching Data');
        console.table(data);
    });