// const config = require("config");
// const mongoose = require("mongoose");
// const express = require("express");
// const usersRoute = require("./routes/UserRoutes");
// var cors = require('cors')

// const app = express();
// app.use(cors());

// //use config module to get the privatekey, if no private key set, end the application
// if (!config.get("myprivatekey")) {
//   console.error("FATAL ERROR: myprivatekey is not defined.");
//   process.exit(1);
// }

// //connect to mongodb
// mongoose
//   .connect("mongodb://localhost/everymeal_auth", { useNewUrlParser: true })
//   .then(() => console.log("Connected to MongoDB..."))
//   .catch(err => console.error("Could not connect to MongoDB..."));

// app.use(express.json());
// //use users route for api/users
// app.get('/', function(req,res){
//   res.send('Backend');
// })
// app.use('/api/users', usersRoute);
// app.use('/api/users', usersRoute);

// const port = process.env.PORT || 4000;

// app.listen(port, function () {
//   console.log(`Listening on port ${port}...`);
// });

const express = require("express");
const port = process.env.PORT;
const usersRoute = require("./routes/UserRoutes");
const healthCoachRoute = require("./routes/HealthCoachRoutes");
const orderRoute = require("./routes/OrderRoutes");
//require('./db/db')
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
app.use(cors());
mongoose
  .connect("mongodb://localhost/everymeal_user_authentication", {
    useNewUrlParser: true,
    useCreateIndex: true
  })
  .then(() => console.log("Connected to MongoDB..."))
  .catch(err => console.error("Could not connect to MongoDB..."));

app.use(express.json());
app.use(usersRoute);
app.use(healthCoachRoute);
app.use(orderRoute);

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
