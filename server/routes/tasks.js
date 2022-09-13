const express = require("express");
const joi = require("joi");
const router = express.Router();
const mongoose = require("mongoose");

const tasksSchema = new mongoose.Schema({
  task: { type: String, required: true },
  time: { type: String, required: true },
});

const Task = mongoose.model("Task", tasksSchema);

router.get("/", async (req, res) => {
  const getTasks = await Task.find();
  res.send(getTasks);
});

router.post("/", async (req, res) => {
  const { error } = validateTask(req.body);
  if (error) {
    return res.status(400).send(error.details[0].message);
  }
  let task = new Task({
    task: req.body.task,
    done: false,
    time: req.body.time,
  });
  task = await task.save();
  res.status(201).send(task);
});

router.delete("/:id", async (req, res) => {
  const deleteTask = await Task.findByIdAndDelete(req.params.id);
  if (!deleteTask) {
    return res.status(404).send("Berilgan idiga teng bo'lgan kitob topilmadi");
  }

  res.send(deleteTask);
});

function validateTask(tasks) {
  const taskSxema = {
    task: joi.string().required().min(5),
    time: joi.required(),
  };
  return joi.validate(tasks, taskSxema);
}

module.exports = router;
