function fac(n) {
   if (n == 0)
      return 1;
    else
      return fac(n-1) * n;
}

function sum(a,b) {
    return a+b;
}

function sum(A) {
  total = 0;
  for (i = 0; i < A.length; i++) {
    total += A[i];
  }
  return total;
}

function range(a,b) {
  array = [];
  if (a < b) {
    while (a <= b) {
      array.push(a);
      a++;
    }
  }
  return array;
  }
