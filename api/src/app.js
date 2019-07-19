
const express = require('express');
const usersRoute = require("./routes/UserRoutes");
const mealPlanRoute = require("./routes/MealPlanRoutes");
const mongoose = require("mongoose");
const cors = require('cors');

const port = process.env.EM_PORT;
const mongoURI = process.env.EM_MONGOURI;

const app = express();
app.use(cors())
mongoose
  .connect(mongoURI, { useNewUrlParser: true,useCreateIndex: true })
  .then(() => console.log("Connected to MongoDB..."))
  .catch(err => console.error("Could not connect to MongoDB..."));

app.use(express.json());
app.use(usersRoute);
app.use(mealPlanRoute);


app.listen(port, () => {
  console.log(`Server running on port ${port}`)
})
