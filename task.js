function getArrayParams(...arr) {
  let min = -Infinity;
  let max = Infinity;
  let sum = 0;
  min = Math.min(...arr);
  max = Math.max(...arr);
  for (let i = 0; i < arr.length; ++i) {
      sum += arr[i];
  }
    avg = sum/arr.length;
  return { min: min, max: max, avg: avg.toFixed(2) };
}

function summElementsWorker(...arr) {
  if (arr.length === 0) {
    return 0;
  } 
  else {
    let sum = 0;
    for (let i = 0; i < arr.length; ++i) {
    sum += arr[i];
    }
    return sum;
  }
}

function differenceMaxMinWorker(...arr) {
  if (arr.length === 0) {
    return 0;
  } 
  else {
    let avgSum = 0;
    let min = Math.min(...arr);
    let max = Math.max(...arr);
    avgSum = max - min; 
    return avgSum;
  }
}

function differenceEvenOddWorker(...arr) {
  let sumEvenElement = 0;
  let sumOddElement = 0;
  if (arr.length === 0) {
    return 0;
  } 
  else {
    for (let i = 0; i < arr.length; ++i) {
      if (arr[i] % 2 === 0) {
          sumEvenElement += arr[i];
      }
      else {
          sumOddElement += arr[i];
      }
    }
  return (sumEvenElement - sumOddElement)
  }
}

function averageEvenElementsWorker(...arr) {
  let sumEvenElement = 0;
  let countEvenElement = 0;
  if (arr.length === 0) {
    return 0;
  } 
  else {
    for (let i = 0; i < arr.length; ++i) {
      if (arr[i] % 2 === 0) {
          sumEvenElement += arr[i];
          countEvenElement += 1;
      }
    }
  return (sumEvenElement/countEvenElement)
  }
}

function makeWork (arrOfArr, func) {
  arrOfArr = [...arr];
  maxWorkerResult = -Infinity;
  for (let i = 0; i < arrOfArr.length; ++i) {
    let arr = arrOfArr[i];
    let result = func(...arr);
    if (result > maxWorkerResult) {
      maxWorkerResult = result;
    }
  }
  return maxWorkerResult;
}
