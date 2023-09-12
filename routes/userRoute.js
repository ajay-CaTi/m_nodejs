const express = require("express");
const router = express.Router();
const {
  createUser,
  getAppUsers,
  getUserById,
  updateUser,
  updateByPatchUser,
  deleteUser,
} = require("../controller/user");

router
  .post("/", createUser)
  .get("/", getAppUsers)
  .get("/:id", getUserById)
  .put("/:id", updateUser)
  .patch("/:id", updateByPatchUser)
  .delete("/:id", deleteUser)
  .get("/demo", (req, res) => {
    res.json(products);
  });

exports.router = router;
