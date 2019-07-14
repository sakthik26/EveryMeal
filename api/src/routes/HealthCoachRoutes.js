const express = require("express");
const HealthCoach = require("../models/HealthCoachModel");

const healthCoachrouter = express.Router();

const asyncMiddleware = fn => (req, res, next) => {
  Promise.resolve(fn(req, res, next)).catch(next);
};

healthCoachrouter.post("/healthCoach", async function(req, res) {
  try {
    const newHealthCoach = new HealthCoach(req.body);
    await newHealthCoach.save();
    res.status(201).send({ newHealthCoach });
  } catch (error) {
    res.status(400).send(error);
  }
});

healthCoachrouter.get("/healthCoach", async function(req, res) {
  HealthCoach.find({}, (err, healthCoach) => {
    if (err) {
      res.send(err);
    }
    res.json(healthCoach);
  });
});

healthCoachrouter.get("/healthCoach/:healthCoachID", async function(req, res) {
  HealthCoach.findById(req.params.healthCoachID, (err, healthCoach) => {
    if (err) {
      res.send(err);
    }
    res.json(healthCoach);
  });
});

healthCoachrouter.put("/healthCoach/:healthCoachID", async function(req, res) {
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

healthCoachrouter.delete("/healthCoach/:healthCoachID", async function(
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

module.exports = healthCoachrouter;
