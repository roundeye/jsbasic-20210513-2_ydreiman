function checkSpam(str) {
  return (str.toLowerCase().indexOf('1xBet'.toLowerCase()) !== -1 || 
          str.toLowerCase().indexOf('XXX'.toLowerCase()) !== -1)
}
