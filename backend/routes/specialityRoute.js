const router = require("express").Router();
const Doctor = require('../models/doctor'); 

router.get('/specialization', async (req, res) => {
    try {
        const specialization = req.query.specialization;
        
        const getDoctors = await Doctor.find({ specialization });
        res.status(200).json(getDoctors);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

module.exports = router;
