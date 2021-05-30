function showSalary(users, age) {
  const newAgeArr = users.filter(user => user.age <= age);
  return newAgeArr.map((user, index) => { 
    if (index !== (newAgeArr.length - 1)) {
      return `${user.name}, ${user.balance}\n`
    }
    if (index === (newAgeArr.length - 1)) {
      return `${user.name}, ${user.balance}`;
    }
    }).join('');
}
