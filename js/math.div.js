function div(a, b) {
  if(parseInt(b, 10) === 0) {
    throw new Error('Impossible to divide by zero');
  }
  return parseInt(a, 10) / parseInt(b, 10);
}
