const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const AppraiseeSchema = require('./Appraisee');


const userSchema = new Schema({ 
    username: String,
    password: String,
    email: String,
    createdAt: { type: Date, default: Date.now },
    appraisees: [AppraiseeSchema]
});

module.exports = mongoose.model('User', userSchema);