const add = (a, b) => a + b;

const nine = add(4, 5);

const addBy(a) => (b) => a + b;

const addBy5 = addBy(5);
const result = addBy5(10); // 15
const result2 = addBy5(15); // 20
const result = addBy5(20); // 25

// currying : the technique of creating a function from another function

function createAddByFunction(firstNumber) {
  const someThing = 'something';
  return function(secondNumber) {
    console.log(someThing);
    return firstNumber + secondNumber;
  }
}

const addBy10 = createAddByFunction(10);
const addBy15 = createAddByFunction(15);

const result1 = addBy10(100) // 110
const reuslt2 = addBy15(100) // 115