function makeDiagonalRed(table) {
  return table.rows[0].cells[0].style.backgroundColor = 'red',
  table.rows[1].cells[1].style.backgroundColor = 'red',
  table.rows[2].cells[2].style.backgroundColor = 'red',
  table.rows[3].cells[3].style.backgroundColor = 'red',
  table.rows[4].cells[4].style.backgroundColor = 'red'
}