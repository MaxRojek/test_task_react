const filterUsersList = (userName, usersArray) => {
  if (usersArray.length > 0) {
    if (userName.length === 0) {
      return usersArray;
    }
    if (userName.length > 0) {
      const filteredUsers = usersArray.filter((user) => user.name.includes(userName));
      return filteredUsers;
    }
  } else {
    return [];
  }
};

export default filterUsersList;
