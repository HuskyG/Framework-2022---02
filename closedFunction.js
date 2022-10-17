function closedFunction() {
  let counter = 0;

  let increment = () => {
    counter++;
    console.log(counter);
  };

  return increment;
}

let myCountFunction = closedFunction();

myCountFunction();
myCountFunction();
