const express = require("express");
const app = express();
const tasksRouter = require("./routes/tasks");
const mongoose = require("mongoose");

mongoose
  .connect("mongodb+srv://xondamir:0007@cluster0.ddwgbut.mongodb.net/task")
  .then(() => {
    console.log("MongoDB ga ulanish hosil qilindi...");
  })
  .catch((err) => {
    console.error("MongoDB ga ulanishda xatolik ro'y berdi...", err);
  });
app.use(express.json());

app.use(tasksRouter);

// Serverni ishga tushirish joyi
const port = process.env.PORT || 6000;
app.listen(port, () => {
  console.log(`Server ${port}-portda ishlashni boshladi`);
});
