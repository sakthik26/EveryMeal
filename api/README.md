## EveryMeal Backend Config

## API Config

Set the following environment variables:

* EM_PORT
* EM_MONGOURI
* EM_JWTSECRET

Example: 
```
EM_PORT='4000'
EM_MONGOURI='mongodb://localhost:27017/path'
EM_JWTSECRET='secret'
```

Make sure to have mongodb running with a database located at the given Mongo URI (`mongod --dbpath path_to_db`)

## Starting the app

* Make sure to have nodemon installed as a global npm package (`npm install -g nodemon`)
* Run `npm install` and then `npm start` inside the /api folder. The app should now be running on the specified port.
