const dialogflow = require("dialogflow");
const path = require("path");

module.exports = {
  // Instantiate a session client
  client: function() {
    const cwd = path.resolve(__dirname);
    const cl = new dialogflow.SessionsClient({
      keyFilename: `${cwd}/everyMeal-credentials.json`
    });

    return cl;
  }
};
