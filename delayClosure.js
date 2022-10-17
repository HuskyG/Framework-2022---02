function parent() {
  let message = "Hello World";

  function child() {
    console.log(message);
  }

  return child; // omit brackets so this doesn't execute yet
}

let childFunction = parent();
childFunction();
