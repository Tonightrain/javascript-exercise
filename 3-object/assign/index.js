export default function addSerialNumber(source) {
  // TODO 5: 在这里写实现代码，需要采用ES6 Object.assign
  const result = { serialNumber: '12345' };
  Object.assign(result, source);
  result.properties.status = 'processed';
  return result;
}
