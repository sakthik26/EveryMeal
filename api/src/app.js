const express = require('express');
const port = process.env.PORT;
const usersRoute = require("./routes/UserRoutes");
const mealsRoute = require("./routes/MealRoutes");
const shoppingCartRoute = require("./routes/ShoppingCartRoutes");

const mongoose = require("mongoose");
const cors = require('cors')

const app = express();
app.use(cors())
mongoose
  .connect("mongodb://localhost/everymeal_user_authentication", { useNewUrlParser: true,useCreateIndex: true })
  .then(() => console.log("Connected to MongoDB..."))
  .catch(err => console.error("Could not connect to MongoDB..."));

app.use(express.json());
app.use(usersRoute);
app.use(mealsRoute);
app.use(shoppingCartRoute);

app.listen(port, () => {
  console.log(`Server running on port ${port}`)
})
