const express = require("express");
const router = express.Router();
const {
  taskListing,
  addTask,
  getLogin,
  deleteTask,
  signUp,
} = require("../Controllers/userController");
router.route("/").get(taskListing);
router.route("/add-task").post(addTask);
router.route("/login").post(getLogin);
router.route("/delete/:id").post(deleteTask);
router.route("/signup").post(signUp);

module.exports = router;
