const express = require("express");
const router = express.Router();
const jobs = require("../models/candidate");
const veryfyTocken=require('../middleware/authMiddleware')

router.get("/candidate",veryfyTocken, async (req, res) => {
    const details = await jobs.find({});
    res.json(details);
  });


module.exports = router;