const users = [];

//Join User To Chat
function userJoin(id, username, room) {
  const user = { id, username, room };

  users.push(user);

  return user;
}

//Get Current User
function getCurrentUser(id) {
  return users.find((user) => user.id === id);
}

//User Leaves Chat
function UserLeave(id) {
  const index = users.findIndex((user) => user.id === id);

  if (index !== -1) {
    return users.splice(index, 1)[0];
  }
}

//get room users
function getRoomUsers(room) {
  return users.filter((user) => user.room === room);
}
module.exports = { userJoin, getCurrentUser, UserLeave, getRoomUsers };
