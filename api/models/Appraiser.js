const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const AppraiseeSchema = require('./Appraisee');


const appraiserSchema = new Schema({ 
    name: String,
    password: String,
    email: String,
    createdAt: { type: Date, default: Date.now },
    appraisees: [{type: Schema.Types.ObjectId, ref: 'Appraisee'}]
});

module.exports = mongoose.model('Appraiser', appraiserSchema);