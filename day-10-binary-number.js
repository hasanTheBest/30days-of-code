// TASK
// Given a base-10 integer, (12), convert it to binary (base-2).
// Then find and print the base-10 integer denoting the maximum
// number of consecutive 1's in n's binary representation

// SOLUTION - accepted
function findBinaryOnes(n) {
  const binary = n.toString(2);

  let one = 1,
    max = 1;

  for (let i = 0; i < binary.length - 1; i++) {
    let current = Number(binary[i]),
      next = Number(binary[i + 1]),
      plus = current + next,
      minus = next - current;

    if (0 !== plus && 0 === minus) {
      ++one;

      if (one > max) {
        max = one;
      }
    } else {
      one = 1;
    }
  }

  return max;
}

console.log(findBinaryOnes(438)); // 3 (1's next-to-next. binary: 110110111)

// REJECTED only one case

// function findBinaryOnes(n){
//   const binary = n.toString(2)
//   let oneIndex = 0, max = 1, one = 1;
//   for(let i = 0; i < binary.length; i++){
//     if(binary[i] === "1"){
//       if( 1 !== i - oneIndex){
//         continue;
//       }else{
//         one++
//       if( one > max ){
//         max = one;
//       }
//         oneIndex = i
//       }
//     }
//   }
//   return max;
// }
