const express = require("express");
const HealthCoach = require("../models/HealthCoachModel");

const healthCoachRouter = express.Router();

healthCoachRouter.post("/healthCoach", async function(req, res) {
  try {
    const newHealthCoach = new HealthCoach(req.body);
    await newHealthCoach.save();
    res.status(201).send({ newHealthCoach });
  } catch (error) {
    res.status(400).send(error);
  }
});

healthCoachRouter.get("/healthCoach", async function(req, res) {
  HealthCoach.find({}, (err, healthCoach) => {
    if (err) {
      res.send(err);
    }
    res.json(healthCoach);
  });
});

healthCoachRouter.get("/healthCoach/:healthCoachID", async function(req, res) {
  HealthCoach.findById(req.params.healthCoachID, (err, healthCoach) => {
    if (err) {
      res.send(err);
    }
    res.json(healthCoach);
  });
});

healthCoachRouter.put("/healthCoach/:healthCoachID", async function(req, res) {
  HealthCoach.findOneAndUpdate(
    { _id: req.params.healthCoachID },
    req.body,
    { new: true },
    (err, healthCoach) => {
      if (err) {
        res.send(err);
      }
      res.json(healthCoach);
    }
  );
});

healthCoachRouter.delete("/healthCoach/:healthCoachID", async function(
  req,
  res
) {
  const id_removed = req.params.healthCoachID;
  HealthCoach.remove({ _id: req.params.healthCoachID }, (err, healthCoach) => {
    if (err) {
      res.send(err);
    }
    res.json({
      message: `Successfully deleted HealthCoach with id: ${id_removed}`
    });
  });
});

module.exports = healthCoachRouter;
