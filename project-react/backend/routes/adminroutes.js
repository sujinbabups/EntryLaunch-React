const express = require("express");
const router = express.Router();
const adminCollection = require("../models/admin");
const employerSchema=require('../models/employer')

const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

router.post('/admin-login', async (req, res) => {
    const { username, password } = req.body;
    try {
        const admin = await adminCollection.findOne({ username });
        if (!admin) {
            return res.status(400).json({ message: 'Invalid username or password' });
        }

        const isMatch = await bcrypt.compare(password, admin.password);
        if (!isMatch) {
            return res.status(400).json({ message: 'Invalid username or password' });
        }

        const token = jwt.sign(
            { adminId: admin._id, username: admin.username },
            'your-secret-key',
            { expiresIn: '1h' }
        );

        res.cookie('AdminAuthToken', token, { httpOnly: true, secure: false }); 
        res.status(200).json({ message: 'Login Success', token });

    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'Server error' });
    }
});

router.get("/logout", (req, res) => {
    res.clearCookie("AdminAuthToken");
    res.status(200).send("Logout successful");
});


// adding employer

router.post('/add-employer', async (req, res) => {
    try {
        const { Emp_Id, co_name, type, place, email,password } = req.body;
        const new_emp = new employerSchema({
            Emp_Id,
            co_name,
            type,
            place,
            email,
            password,
        });
        await new_emp.save();
        res.status(201).json({ message: "Added new employer" });
    } catch (error) {
        console.log(error);
        // res.status(500).json({ message: "Server error" });
    }
});

// view employer

router.get('/get-employers', async (req, res) => {
    try {
        const employer = await employerSchema.find();
        res.status(200).json(employer);
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Server error" });
    }
});


// getting the selected id to the table

router.get('/employers', async (req, res) => {
    try {
        const employers = await employerSchema.find(); // Fetch all employers
        if (employers.length > 0) {
            res.status(200).json(employers);
        } else {
            res.status(404).json({ message: "No employers found" });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Server error" });
    }
});


// removeing employer by admin

router.delete('/delete/:id', async (req, res) => {
    try {
        const employerID = req.params.id;
        const result = await employerSchema.deleteOne({ Emp_Id: employerID });

        if (result.deletedCount > 0) {
            res.status(200).json({ message: "Employer deleted successfully" });
        } else {
            res.status(404).json({ message: "Employer not found" });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Server error" });
    }
});




module.exports = router;
