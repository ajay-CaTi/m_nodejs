const fs = require("fs");
const path = require("path");
// const index = fs.readFileSync("index.html", "utf-8");
const data = JSON.parse(
  fs.readFileSync(path.resolve(__dirname, "../data.json"), "utf-8")
);
const users = data.users;

exports.createUser = (req, res) => {
  users.push(req.body);
  const id = +req.body.id;
  const user = users.find((p) => p.id === id);
  res.status(200).json({ id: user });
};

exports.getAppUsers = (req, res) => {
  console.log(req.params);
  res.json(users);
};

exports.getUserById = (req, res) => {
  const id = +req.params.id;
  const user = users.find((p) => p.id === id);
  res.json(user);
};

exports.updateUser = (req, res) => {
  const id = +req.params.id;
  const userIndex = users.findIndex((p) => p.id === id);
  users.splice(userIndex, 1, { ...req.body, id: id });
  res.status(201).json();
};

exports.updateByPatchUser = (req, res) => {
  const id = +req.params.id;
  const userIndex = users.findIndex((p) => p.id === id);
  const product = users[userIndex];
  users.splice(userIndex, 1, { ...product, ...req.body });
  res.status(201).json();
};

exports.deleteUser = (req, res) => {
  const id = +req.params.id;
  const userIndex = users.findIndex((p) => p.id === id);
  const user = users[userIndex];
  users.splice(userIndex, 1);
  res.status(201).json(user);
};
