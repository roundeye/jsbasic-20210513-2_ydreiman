function camelize(str) {
  if (str === '') {
    return str;
  }

  let arr = str.split('');
  for (let i = 0; i < arr.length; i++) {
    if (arr[i - 1] === '-') {
      arr[i] = arr[i].toUpperCase();
    }
  }
  return arr.filter(x => x !== '-').join('');
}
