function factorial(n) {
  if(num < 0) {
      return -1;
  }
  else if (n == 1) {
    return 1;
  }
  return factorial(n - 1) * n;
}

console.log(factorial(4)); // 24
