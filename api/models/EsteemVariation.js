const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const AppraiseeSchema = require('./Appraisee');
const AppraiserSchema = require('./Appraiser');


const esteemVariationSchema = new Schema({ 
    cause: String,
    variation: Number,
    createdAt: { type: Date, default: Date.now },
    appraisees: { type: Schema.Types.ObjectId, ref: 'Appraisee' },
    appraiser: { type: Schema.Types.ObjectId, ref: 'Appraiser' }
});

module.exports = mongoose.model('Appraiser', esteemVariationSchema);