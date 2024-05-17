const mongoose = require('mongoose');

const doctorSchema = new mongoose.Schema(
    {
        firstname:{type: String, required : true},
        lastname:{type: String, required : true},
        email: {type: String, required:true, unique:true},
        password: {type: String,required : true},
        education: {type: String,required : true},
        specialization : {type: String,required : true},
        state : {type: String,required : true},
    },
    { timestamps : true }
);

module.exports = mongoose.model('Doctor', doctorSchema);