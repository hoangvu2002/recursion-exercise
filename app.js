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
  