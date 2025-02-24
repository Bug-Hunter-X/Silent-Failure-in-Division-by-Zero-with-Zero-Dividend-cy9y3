function foo(a, b) {
  if (a === 0 && b === 0) {
    return NaN; // Handle the indeterminate form 0/0
  } else if (b === 0) {
    throw new Error('Division by zero'); // Throw an error for division by zero
  } else {
    return a / b;
  }
}