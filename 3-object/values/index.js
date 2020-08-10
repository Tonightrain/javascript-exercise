/* eslint-disable radix */
export default function countTypesNumber(source) {
  // TODO 6: 在这里写实现代码
  const array = Object.values(source);
  let sum = 0;
  array.forEach(item => (sum += parseInt(item)));
  return sum;
}
