function chooseMultiplesOfThree(collection) {
  // TODO 1: 在这里写实现代码
  return collection.filter(i => i % 3 === 0);
}

function chooseNoRepeatNumber(collection) {
  // TODO 2: 在这里写实现代码
  // eslint-disable-next-line func-names
  return collection.filter(function(element, index, self) {
    return self.indexOf(element) === index;
  });
}

export { chooseMultiplesOfThree, chooseNoRepeatNumber };
