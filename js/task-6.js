import users from './users.js';

//Задание 1
// Получить массив имен всех пользователей (поле name).

const getUserNames = users => {
  const userNames = users.map(user => user.name);
  return userNames;
  // твой код
};
console.log(getUserNames(users));
//
//Задание 2
// Получить массив объектов пользователей по цвету глаз (поле eyeColor).
const getUsersWithEyeColor = (users, color) => {
  const usersWithEyeColor = users.filter(user => user.eyeColor === color);
  return usersWithEyeColor;
  // твой код
};

console.log(getUsersWithEyeColor(users, 'blue'));

//Задание 3
// Получить массив имен пользователей по полу (поле gender).

const getUsersWithGender = (users, gender) =>
  users
    .filter(user => user.gender === gender)
    .reduce((males, user) => {
      males.push(user.name);
      return males;
    }, []);

// твой код

console.log(getUsersWithGender(users, 'male'));

//Задание 4
// Получить массив только неактивных пользователей (поле isActive).

const getInactiveUsers = users => {
  const inactiveUser = users.filter(user => !user.isActive);
  return inactiveUser;
  // твой код
};

console.log(getInactiveUsers(users));

//Задание 5
// Получить пользоваля (не массив) по email (поле email, он уникальный).

const getUserWithEmail = (users, email) => {
  const userWithEmail = users.find(user => user.email === email);
  return userWithEmail;
  // твой код
};

console.log(getUserWithEmail(users, 'shereeanthony@kog.com'));
console.log(getUserWithEmail(users, 'elmahead@omatom.com'));

//Задание 6
// Получить массив пользователей попадающих в возрастную категорию от min до max лет (поле age).

const getUsersWithAge = (users, min, max) =>
  users.filter(user => user.age >= min && user.age <= max);

// твой код

console.table(getUsersWithAge(users, 20, 30)); // [объект Ross Vazquez, объект Elma Head, объект Carey Barr]

console.table(getUsersWithAge(users, 30, 40));
// [объект Moore Hensley, объект Sharlene Bush, объект Blackburn Dotson, объект Sheree Anthony]

//Задание 7
// Получить общую сумму баланса (поле balance) всех пользователей.

const calculateTotalBalance = users.reduce(
  (acc, user) => acc + user.balance,
  0,
);

// твой код;
console.log(calculateTotalBalance); // 20916

//Задание 8 Массив имен всех пользователей у которых есть друг с указанным именем.

const getUsersWithFriend = (users, friendName) =>
  users
    .filter(user => user.friends.includes(friendName))
    .reduce((userWithFriend, user) => {
      userWithFriend.push(user.name);
      return userWithFriend;
    }, []);

// твой код
// };

console.log(getUsersWithFriend(users, 'Briana Decker')); // [ 'Sharlene Bush', 'Sheree Anthony' ]
console.log(getUsersWithFriend(users, 'Goldie Gentry')); // [ 'Elma Head', 'Sheree Anthony' ]

// Задание 9
// Массив имен (поле name) людей, отсортированных в зависимости от количества их друзей (поле friends)

const getNamesSortedByFriendsCount = users =>
  // твой код
  users
    .sort((prev, next) => prev.friends.length - next.friends.length)
    .reduce((allNames, user) => {
      allNames.push(user.name);
      return allNames;
    }, []);

console.log(getNamesSortedByFriendsCount(users));
// [ 'Moore Hensley', 'Sharlene Bush', 'Elma Head', 'Carey Barr', 'Blackburn Dotson', 'Sheree Anthony', 'Ross Vazquez' ]

// Задание 10

// Получить массив всех умений всех пользователей (поле skills), при этом не должно быть повторяющихся умений и они должны быть отсортированы в алфавитном порядке.

const getSortedUniqueSkills = users => {
  const allUsersSkills = users.reduce((acc, user) => {
    acc.push(...user.skills);
    return acc;
  }, []);
  const uniqueSkills = allUsersSkills.filter((item, index, arr) => {
    return arr.indexOf(item) === index;
  });

  // const allUsersSkills = users.flatMap(user => user.skills); //способ собрать в один массив элементы массивов объекта
  // const uniqueSkills = new Set(allUsersSkills); //вариант отсортировать в массиве уникальные skills
  return uniqueSkills.sort();
};

console.log(getSortedUniqueSkills(users));
// [ 'adipisicing', 'amet', 'anim', 'commodo', 'culpa', 'elit', 'ex', 'ipsum', 'irure', 'laborum', 'lorem', 'mollit', 'non', 'nostrud', 'nulla', 'proident', 'tempor', 'velit', 'veniam' ]
