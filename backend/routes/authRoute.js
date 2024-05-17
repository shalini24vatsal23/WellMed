const router = require("express").Router();
const CryptoJS = require("crypto-js");
const dotenv = require("dotenv");
const Patient = require('../models/patient');
const Doctor = require('../models/doctor'); // Assuming you have a Doctor model
dotenv.config();

// Patient SignUp
router.post('/patient/signup', async (req, res) => {
    const newPatient = new Patient({
        firstname: req.body.firstname,
        lastname: req.body.lastname,
        email: req.body.email,
        password: CryptoJS.AES.encrypt(req.body.password, process.env.PASS_ENC_KEY).toString(),
        gender: req.body.gender,
        age: req.body.age
    });

    try {
        const savedPatient = await newPatient.save();
        res.status(200).json(savedPatient);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Patient LogIn
router.post('/patient/login', async (req, res) => {
    try {
        const patient = await Patient.findOne({ email: req.body.email });

        if (!patient) {
            res.status(404).json({ error: 'You are not signed up.' });
            return;
        }

        const hashedPassword = CryptoJS.AES.decrypt(patient.password, process.env.PASS_ENC_KEY).toString(CryptoJS.enc.Utf8);

        if (hashedPassword !== req.body.password) {
            res.status(401).json({ error: 'Incorrect Password' });
            return;
        }

        res.status(200).json(patient);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// Doctor SignUp
router.post('/doctor/signup', async (req, res) => {
    const newDoctor = new Doctor({
        firstname: req.body.firstname,
        lastname: req.body.lastname,
        email: req.body.email,
        password: CryptoJS.AES.encrypt(req.body.password, process.env.PASS_ENC_KEY).toString(),
        education: req.body.education,
        specialization: req.body.specialization,
        state: req.body.state
    });

    try {
        const savedDoctor = await newDoctor.save();
        res.status(200).json(savedDoctor);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Doctor LogIn
router.post('/doctor/login', async (req, res) => {
    try {
        const doctor = await Doctor.findOne({ email: req.body.email });

        if (!doctor) {
            res.status(404).json({ error: 'You are not signed up.' });
            return;
        }

        const hashedPassword = CryptoJS.AES.decrypt(doctor.password, process.env.PASS_ENC_KEY).toString(CryptoJS.enc.Utf8);

        if (hashedPassword !== req.body.password) {
            res.status(401).json({ error: 'Incorrect Password' });
            return;
        }

        res.status(200).json(doctor);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

module.exports = router;
