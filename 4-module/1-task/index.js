function makeFriendsList(friends) {
  let body = document.body;
  let ul = document.createElement('ul');
  let li_1 = document.createElement('li')
  let li_2 = document.createElement('li')
  let li_3 = document.createElement('li')

  li_1.textContent = `${friends[0].firstName} ${friends[0].lastName}`;
  li_2.textContent = `${friends[1].firstName} ${friends[1].lastName}`;
  li_3.textContent = `${friends[2].firstName} ${friends[2].lastName}`;
  
  body.append(ul);  
  ul.append(li_1, li_2, li_3);
  return ul
}
