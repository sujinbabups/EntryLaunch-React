const express = require("express");
const router = express.Router();
const employerCollection = require("../models/employer");
const jobSchema = require("../models/joblist");

const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");



router.post('/employer-login', async (req, res) => {
    const { email, password } = req.body;

    try {
        const employer = await employerCollection.findOne({ email });

        if (!employer) {
            return res.status(400).json({ message: 'Invalid username or password' });
        }

        if (password !== employer.password) {
            return res.status(400).json({ message: 'Invalid username or password' });
        }

        const token = jwt.sign(
            { userId: employer._id, email: employer.email },
            "your-secret-key",
            { expiresIn: '1h' }
        );
        res.cookie('AuthToken', token, { httpOnly: true, secure: false }); 


        res.status(200).json({
            message: "Login Success",
            token
        });

    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'Server error' });
    }
});

// Adding a job by employer

router.post('/add-job', async (req, res) => {
    try {
        const { job_id, job_name, location, skills, description } = req.body;

        // console.log(job_id);
        const new_job = new jobSchema({
            job_id,
            job_name,
            location,
            skills,
            description,
        });

        await new_job.save();
        res.status(201).json({ message: "Added new job" });

    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Server error" });
    }
});

router.get("/logout", (req, res) => {
    res.clearCookie("AuthToken");
    res.status(200).send("Logout successful");
});

module.exports = router;

