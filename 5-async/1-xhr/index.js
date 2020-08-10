function fetchData(url, successCallback, errorCallback) {
  const xhr = new XMLHttpRequest();
  // <-- start
  // TODO 21: 通过XMLHttpRequest实现异步请求

  xhr.open('GET', url);
  // eslint-disable-next-line func-names
  xhr.onreadystatechange = function() {
    if (xhr.readyState === 4) {
      if (xhr.status === 200) {
        successCallback(xhr);
      } else {
        errorCallback(xhr);
      }
    }
  };
  xhr.send();
  // end -->
}
function handeleSuccess(xhr) {
  console.log(xhr.responseText);
}
function handleError(xhr) {
  console.log(xhr.statusText);
}
const URL = 'http://localhost:3000/api';
fetchData(URL, handeleSuccess, handleError);
