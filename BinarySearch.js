const numbers = [7, 9, 15, 33, 44, 100, 76, 17, 20, 4, 6, 113];
const sortedNumbers = numbers.sort((a, b) => a - b);

console.log(sortedNumbers);

function binarySearch(array, value) {
  if (array.length === 0) return false;
  const middleIndex = Math.floor(array.length / 2);
  const middleValue = array[middleIndex];

  if (value === middleValue) return true;
  if (value > middleValue) {
    return binarySearch(array.slice(middleIndex + 1), value);
  }
  if (value < middleValue) {
    return binarySearch(array.slice(0, middleIndex), value);
  }

  return false;
}

let foundIndex = binarySearch(sortedNumbers, 9);
console.log(foundIndex);
foundIndex = binarySearch(sortedNumbers, 100);
console.log(foundIndex);
foundIndex = binarySearch(sortedNumbers, 42);
console.log(foundIndex);
