const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");

router.get("/", (req, res) => {
  res.send("Hello World");
});

router.post("/add-player", async (req, res) => {
  userController.create(req.body, (err, userResponse) => {
    if (err) {
      return res.send({ response: err });
    }
    res.setHeader("Content-Type", "application/json");
    res.setHeader("Access-Control-Allow-Origin", "http://localhost:4200");
    res.send({
      response: userResponse,
    });
  });
});

router.post("/update-player", (req, res) => {
  let data = req.body;
  userController.findOneAndUpdate(
    { name: req.body.name },
    data,
    (err, updatedUser) => {
      if (err) {
        return res.send({ response: err });
      }
      res.setHeader("Content-Type", "application/json");
      res.setHeader("Access-Control-Allow-Origin", "http://localhost:4200");
      res.send({
        response: updatedUser,
      });
    }
  );
});

router.get("/find-player", (req, res) => {
  userController.find({ name: req.body.name }, (err, details) => {
    if (err) {
      return res.send({ response: err });
    }
    res.setHeader("Content-Type", "application/json");
    res.setHeader("Access-Control-Allow-Origin", "http://localhost:4200");
    res.json({
      response: details,
    });
  });
});

router.delete("/delete-player", (req, res) => {
  userController.findOneAndRemove(
    { name: req.body.name },
    (err, deletedUser) => {
      if (err) {
        return res.send({ response: err });
      }
      res.setHeader("Content-Type", "application/json");
      res.setHeader("Access-Control-Allow-Origin", "http://localhost:4200");

      res.send({
        response: deletedUser,
      });
    }
  );
});

router.get("/list-all-players", (req, res) => {
  userController.find({}, (err, details) => {
    if (err) {
      return res.send({ response: err });
    }
    res.setHeader("Content-Type", "application/json");
    res.setHeader("Access-Control-Allow-Origin", "http://localhost:4200");
    res.json({
      response: details,
    });
  });
});

router.get("/find-who-has-scored-more-runs", (req, res) => {
  userController.findRuns({}, (err, details) => {
    if (err) {
      return res.send({ response: err });
    }
    res.setHeader("Content-Type", "application/json");
    res.setHeader("Access-Control-Allow-Origin", "http://localhost:4200");
    res.json({
      response: details,
    });
  });
});

router.get("/find-who-played-most-of-the-innings", (req, res) => {
  userController.findInnings({}, (err, details) => {
    if (err) {
      return res.send({ response: err });
    }
    res.setHeader("Content-Type", "application/json");
    res.setHeader("Access-Control-Allow-Origin", "http://localhost:4200");
    res.json({
      response: details,
    });
  });
});

router.get("/find-who-played-least-number-of-balls", (req, res) => {
  userController.findBalls({}, (err, details) => {
    if (err) {
      return res.send({ response: err });
    }
    res.setHeader("Content-Type", "application/json");
    res.setHeader("Access-Control-Allow-Origin", "http://localhost:4200");
    res.json({
      response: details,
    });
  });
});

router.get("/find-most-to-fewest-boundary-sixes", (req, res) => {
  userController.findBoundarySixes({}, (err, details) => {
    if (err) {
      return res.send({ response: err });
    }
    res.setHeader("Content-Type", "application/json");
    res.setHeader("Access-Control-Allow-Origin", "http://localhost:4200");
    res.json({
      response: details,
    });
  });
});

router.get("/find-highest-batting-strike-rate", (req, res) => {
  userController.findBattingStrikeRate({}, (err, details) => {
    if (err) {
      return res.send({ response: err });
    }
    res.setHeader("Content-Type", "application/json");
    res.setHeader("Access-Control-Allow-Origin", "http://localhost:4200");
    res.json({
      response: details,
    });
  });
});

module.exports = router;
