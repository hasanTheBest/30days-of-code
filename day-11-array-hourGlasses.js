const matSixbySix = [
  [1, 1, 1, 0, 0, 0],
  [0, 1, 0, 0, 0, 0],
  [1, 1, 1, 0, 0, 0],
  [0, 0, 2, 4, 4, 0],
  [0, 0, 0, 2, 0, 0],
  [0, 0, 1, 2, 4, 0],
];

// 00 01 02  01 02 03
// 10 11 12  11 12 13
// 20 21 22  21 22 23

// 10 11 12
// 20 22 23
// 30 31 32

function hourGlases(m) {
  let max = Number.MIN_SAFE_INTEGER;

  for (let i = 0; i < 4; i++) {
    for (let j = 0; j < 4; j++) {
      let sum = 0;

      sum += m[i][j] + m[i][j + 1] + m[i][j + 2];
      sum += m[i + 1][j + 1];
      sum += m[i + 2][j] + m[i + 2][j + 1] + m[i + 2][j + 2];

      if (sum > max) {
        max = sum;
      }
    }
  }

  return max;
}

console.log(hourGlases(matSixbySix)); // 19
