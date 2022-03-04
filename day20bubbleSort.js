function bubbleSort(arr) {
  // first loop to go through items
  let totalSwap = 0;
  for (let i = 0; i < arr.length; i++) {
    // second loop to compare items
    let swaped = 0;
    for (let j = 0; j < arr.length - i; j++) {
      if (arr[j] > arr[j + 1]) {
        const prev = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = prev;

        ++swaped;
      }
    }

    // array is already sorted return
    if (swaped === 0) {
      break;
    }

    totalSwap += swaped;
  }

  console.log(`Array is sorted in ${totalSwap} swaps.`);
  console.log(`First Element:`, arr[0]);
  console.log(`Last Element:`, arr[arr.length - 1]);
}

bubbleSort([2, 2, 1]); // 3 swaps
