function checkSpam(str) {
  let value1 = '1xBet'.toLowerCase();
  let value2 = 'XXX'.toLowerCase();
  return (str.toLowerCase().indexOf(value1) !== -1 || 
          str.toLowerCase().indexOf(value2) !== -1)
}
