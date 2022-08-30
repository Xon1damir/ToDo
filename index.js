const express = require("express");
const app = express();
const tasksRouter = require("./routes/tasks");

app.use(express.json());

app.use(tasksRouter);

// Serverni ishga tushirish joyi
const port = process.env.PORT || 6000;
app.listen(port, () => {
  console.log(`Server ${port}-portda ishlashni boshladi`);
});
