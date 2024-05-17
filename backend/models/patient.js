const mongoose = require('mongoose');

const patientSchema = new mongoose.Schema(
    {
        firstname:{type: String, required : true},
        lastname:{type: String, required : true},
        email: {type: String, required:true, unique:true},
        password: {type: String,required : true},
        gender: {type: String,required : true},
        age : {type: Number,required : true},
    },
    { timestamps : true }
);

module.exports = mongoose.model('Patient', patientSchema);