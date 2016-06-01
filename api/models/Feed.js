const mongoose = require('mongoose');

const Schema = mongoose.Schema;


const feedSchema = new Schema({
  _appraisee: { type: Schema.Types.ObjectId, ref: 'Appraisee' },
  _appraiser: { type: Schema.Types.ObjectId, ref: 'Appraiser' },
  reason: String,
  esteemVariation: Number,
  _comments: [{ type: Schema.Types.ObjectId, ref: 'Comment' }],
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Feed', feedSchema);
