const express = require("express");
const uuid = require("uuid");
const projectId = "everymeal-stuumb";
const chat = require("../chat/chat");
const chatBotRouter = express.Router();

chatBotRouter.get("/chat-session", async function(req, res) {
  try {
    // A unique identifier for the given session
    const sessionId = uuid.v4();
    // Create a new session
    const sessionClient = chat.client();
    const sessionPath = sessionClient.sessionPath(projectId, sessionId);
    const user_query = req.query.text;

    if (!user_query || !user_query.length) {
      res.status(400).send("Please type something in the chatbox!");
    }

    // The text query request.
    const request = {
      session: sessionPath,
      queryInput: {
        text: {
          // The query to send to the dialogflow agent
          text: user_query,
          // The language used by the client (en-US)
          languageCode: "en-US"
        }
      }
    };

    // Send request and log result
    const responses = await sessionClient.detectIntent(request);
    const result = responses[0].queryResult;
    console.log(`  Query: ${result.queryText}`);
    console.log(`  Response: ${result.fulfillmentText}`);
    if (result.intent) {
      console.log(`  Intent: ${result.intent.displayName}`);
    } else {
      console.log(`  No intent matched.`);
    }

    res.status(201).send(result.fulfillmentText);
  } catch (error) {
    console.log("error from chatBotRoute:");

    console.log(error);

    res.status(400).send(error);
  }
});

module.exports = chatBotRouter;
