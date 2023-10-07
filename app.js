function fibs(n) {
    const result = [0,1];
    if (n===1) {
        return [0];
    } else if (n===2) {
        return result;
    } else {
        for (let i=2; i<n; i++) {
            result.push(result[i-1]+result[i-2]);
        }
    };
    return result;
}

console.log(fibs(8));

function fibsRec(n) {
    if (n <= 0) {
      return [];
    } else if (n === 1) {
      return [0];
    } else if (n === 2) {
      return [0, 1];
    } else {
      const fibs = fibsRec(n - 1);
      fibs.push(fibs[fibs.length - 1] + fibs[fibs.length - 2]);
      return fibs;
    }
  }
  
  console.log(fibsRec(8)); // [0, 1, 1, 2, 3, 5, 8, 13]
  

  function mergeSort(array) {
    if (array.length === 1) {
      return array;
    } else {
      const leftHalf = array.slice(0,Math.floor(array.length/2));
      const rightHalf = array.slice(Math.floor(array.length/2));
      const firstHalf = mergeSort(leftHalf);
      const secondHalf = mergeSort(rightHalf)
      const sortedArray = [];
      let i = 0;
      let j = 0;
      let k = 0;
      while (i<firstHalf.length && j<secondHalf.length) {
        if (firstHalf[i] < secondHalf[j]) {
          sortedArray[k] = firstHalf[i++];
          k++;
        } else {
          sortedArray[k] = secondHalf[j++];
          k++;
        }
      };
      for (;i<firstHalf.length;i++) {
        sortedArray[k] = firstHalf[i];
        k++
      };
      for (;j<secondHalf.length;j++) {
        sortedArray[k] = secondHalf[j];
        k++
      };
      //return [...mergeSort(firstHalf),...mergeSort(secondHalf)];
      return sortedArray;
    }
  }
console.log("hello");
console.log(mergeSort([4,3,2,1]));
console.log(mergeSort([5,4,3,2,1]));