function multiplicationTable(number) {
  let result = '';
  for (let index = 1; index <= 10; index++) {
    if (index === 10) {
      result += `${index} * ${number} = ${number * index}`;
    } else {
      result += `${index} * ${number} = ${number * index}\n`;
    }
  }
  return result;
}

console.log(multiplicationTable(5));

function multiplicationTableAlternate(number) {
  let result = '';
  for (let index = 1; index <= 10; index++) {
    result += `${index} * ${number} = ${number * index}${index < 10 ? '\n' : ''}`;
  }
  return result;
}

console.log(multiplicationTableAlternate(5));
