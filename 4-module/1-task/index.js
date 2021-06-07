function makeFriendsList(friends) {
  let body = document.body;
  let ul = document.createElement('ul');
  body.append(ul); 

  for (let i = 0; i < friends.length; i++) {
    let li = document.createElement('li');
    li.textContent = `${friends[i].firstName} ${friends[i].lastName}`;
    ul.append(li);
  }
  
  return ul
}
