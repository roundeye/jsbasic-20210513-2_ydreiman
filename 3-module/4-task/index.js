function showSalary(users, age) {
  const newAgeArr = users.filter(user => user.age <= age);
  return newAgeArr.map(user => `${user.name}, ${user.balance}`).join('\n');
}