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

const express = require('express');
const port = process.env.PORT;
const usersRoute = require("./routes/UserRoutes");
//require('./db/db')
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


// // Add headers
// app.use(function (req, res, next) {

//   // Website you wish to allow to connect
//   res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');

//   // Request methods you wish to allow
//   res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

//   // Request headers you wish to allow
//   res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

//   // Set to true if you need the website to include cookies in the requests sent
//   // to the API (e.g. in case you use sessions)
//   res.setHeader('Access-Control-Allow-Credentials', true);

//   // Pass to next layer of middleware
//   next();
// });

app.listen(port, () => {
  console.log(`Server running on port ${port}`)
})
