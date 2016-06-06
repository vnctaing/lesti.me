const mongoose = require('mongoose');

const Schema = mongoose.Schema;


const betaTokenSchema = new Schema({ 
    betaToken: String,
    isConsumed: Boolean, 
    createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('BetaToken', betaTokenSchema);
