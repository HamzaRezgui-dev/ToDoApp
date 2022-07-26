const task = require("../models/tache");

exports.CreateTask = async (req, res) => {
  try {
    const newTask = await task.create({ ...req.body });
    await newTask.save();

    const tasks = await task.find();
    return res
      .status(200)
      .json({ msg: "task created with sucess", data: tasks });
  } catch (err) {
    console.log(err);
    return res
      .status(400)
      .json({ msg: "erreur", error: err });
  }
};

exports.GetAllTasks = async (req, res) => {
  try {
    const tasks = await task.find();

    return res.status(200).send({ data: tasks });
  } catch (error) {
    console.log(error);
    res.status(400).send({ errors: error });
  }
};

exports.DoneAndUndone = async (req, res) => {
  try {
    let id = req.params.id;
    const taskCompleted = await task.findById(id);
    await taskCompleted.updateOne({completed: ! taskCompleted.completed});

    const tasks = await task.find();
    return res.status(200).send({ data: tasks });
  } catch (error) {
    console.log(error);
    res.status(400).send({ errors: error });
  }
};


exports.UpdateTask = async (req, res) => {
  try {
    let id = req.params.id;
    const task_to_update = await task.findById(id);


    if (!task_to_update) {
      return res.status(302).json({ msg: "task dose not exist" });
    }

    await task_to_update.updateOne({ ...req.body });

    const tasks = await task.find();

    return res
      .status(200)
      .send({
        success: true,
        msg: "task has been modified",
        data: tasks,
      });
  } catch (error) {
    console.log(error);
    res.status(400).send({ errors: error });
  }
};

exports.DeleteArticle = async (req, res) => {
  try {
    let id = req.params.id;
    const deleted_task = await task.findById(id);

    if (!deleted_task) {
        return res.status(302).json({ msg: "task dose not exist" });
      }

    await deleted_task.remove();
    const tasks = await task.find();

    return res
      .status(200)
      .send({
        success: true,
        msg: "task deleted with success",
        data: tasks,
      });
  } catch (error) {
    console.log(error);
    res.status(400).send({ errors: error });
  }
};
