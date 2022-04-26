const express = require("express");
const router = express.Router();
const commentModel = require("../models/comment");

// get all
router.get("/", async (req, res) => {
  try {
    const response = await commentModel.find({});
    res.send(response);
  } catch (error) {
    console.log(error);
  }
});

// get by id
router.get("/:id", async (req, res) => {
  const id = req.params.id;
  console.log(id);
  if (id.length === 24) {
    try {
      const entity = await commentModel.findById(id);
      if (!entity) {
        res.status(401).json({ success: false, message: "id not found" });
      }
      res.send(entity);
    } catch (error) {
      res.send(error);
    }
  } else {
    res.status(401).json({
      success: "false",
      message: "comment id not match",
    });
  }
});

module.exports = router;
