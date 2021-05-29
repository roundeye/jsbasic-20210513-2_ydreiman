function getMinMax(str) {
  let arrOfNumbers = str
    .replace(/,/g, ' ')
    .split(' ')
    .map(x => +x)
    .filter(x => !isNaN(x));

  return {
    min: Math.min(...arrOfNumbers),
    max: Math.max(...arrOfNumbers),
  }
}
