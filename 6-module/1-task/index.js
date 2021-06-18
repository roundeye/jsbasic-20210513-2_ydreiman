export default class UserTable {
  constructor(rows) {
    this.elem = document.createElement('table');
    this.render(rows);
    this.elem.addEventListener('click', (event) => this.onClick(event));
  }

  render(rows) {
    const list = rows.map(value => 
      `<tr>
        <td>${value.name}</td>
        <td>${value.age}</td>
        <td>${value.salary}</td>
        <td>${value.city}</td>
        <td><button class='close'>X</button></td>
       </tr>`)
      .join('');

    this.elem.innerHTML = `
    <thead>
      <tr>
        <th>Имя</th>
        <th>Возраст</th>
        <th>Зарплата</th>
        <th>Город</th>
        <th></th>
      </tr>
    </thead>
    <tbody>
      ${list}
    </tbody>
    `;
  }

  onClick(event) {
    if (event.target === event.target.closest('.close')){
      event.target.closest('tr').remove();
    }
  }
}
