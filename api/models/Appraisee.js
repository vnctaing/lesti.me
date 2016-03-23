const mongoose = require('mongoose');

const Schema = mongoose.Schema;


const appraiseeSchema = new Schema({ 
    appraiseeName: String,
    esteem: Number,
    description: String,
    appraiser: String,
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Appraisee', appraiseeSchema);