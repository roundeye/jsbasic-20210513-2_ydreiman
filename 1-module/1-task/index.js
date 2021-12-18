// function factorial(n) {
//   let result = 1;

//   if (n === 0 || n === 1) {
//     return result;
//   } else {
//     for (let i = 2; i <= n; i++) {
//       result *= i;
//     }
//     return result;
//   }
// }

function factorial(n) {
  let result = 1;

  if (n === 0) {
      return result;
  } else {
      for (let i = 1; i <= n; i++) {
          result *= i;
      }
  }

  return result;
}
