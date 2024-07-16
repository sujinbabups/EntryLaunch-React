const express = require("express");
const router = express.Router();
const jobslist = require("../models/joblist");
// const veryfyTocken=require('../middleware/authMiddleware')

// router.get("/candidate",veryfyTocken, async (req, res) => {
//     const details = await jobs.find({});
//     res.json(details);
//   });

  router.get('/get-jobs', async (req, res) => {
    try {
        const jobs = await jobslist.find();
        res.status(200).json(jobs);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error' });
    }
});


module.exports = router;