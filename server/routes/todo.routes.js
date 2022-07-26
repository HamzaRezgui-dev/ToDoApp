const express = require("express");
const {
  CreateTask,
  GetAllTasks,
  DoneAndUndone,
  UpdateTask,
  DeleteArticle,
} = require("../controller/tasks.controller");
// express router
const router = express.Router();

router.post("/add", CreateTask);
router.get("/get_all", GetAllTasks);
router.put("/done_and_undone/:id", DoneAndUndone);
router.put("/update/:id", UpdateTask);
router.delete("/delete/:id", DeleteArticle);

//export
module.exports = router;
