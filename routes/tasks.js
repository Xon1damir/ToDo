const express = require("express");
const joi = require("joi");
const tasks = require("../my-app/data");
const router = express.Router();

// kelayotgan so'rovni validatsiya qilish function
function validateTask(tasks) {
  const taskSxema = {
    task: joi.string().required().min(5),
    time: joi.required(),
  };
  return joi.validate(tasks, taskSxema);
}

// Bosh sahifada frontend tomonga shu javobni qaytarish
router.get("/", (req, res) => {
  res.send(tasks);
});

router.post("/", (req, res) => {
  // frontend tomindan kelayotgan malumotlarni validatsiya qilish, agar validatsiyadan o'tmasa 400 status qaytarish
  const { error } = validateTask(req.body);
  if (error) {
    return res.status(400).send(error.details[0].message);
  }
  // yangi task qo'shish
  const task = {
    id: tasks.length + 1,
    task: req.body.task,
    done: false,
    time: req.body.time,
  };

  tasks.push(task);
  res.status(201).send(task);
});

router.delete("/:id", (req, res) => {
  // o'chirilayotgan kitboning idisini bazadan qidirib topish
  const task = tasks.find((t) => t.id === parseInt(req.params.id));
  // topilmasa 404 statusni qaytarish
  if (!task) {
    return res.status(404).send("Berilgan idiga teng bo'lgan kitob topilmadi");
  }
  // topilsa  uni o'chirib tashaymiz
  const taskIndex = tasks.indexOf(task);
  tasks.splice(taskIndex, 1);
  // o'chirilgan kitobni qaytarib beramiz

  res.send(task);
});

module.exports = router;
