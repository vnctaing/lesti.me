const mongoose = require('mongoose');

const Schema = mongoose.Schema;


const appraiseeSchema = new Schema({ 
  appraiseeName: String,
  _appraiser: { type: Schema.Types.ObjectId, ref: 'Appraiser' },
  esteem: Number,
  description: String,
  appraiser: String,
  approvals: { type: Number, min: 0, default: 0 },
  disapprovals: { type: Number, min: 0, default: 0 },
  _comments: [{ type: Schema.Types.ObjectId, ref: 'Comment' }],
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Appraisee', appraiseeSchema);
