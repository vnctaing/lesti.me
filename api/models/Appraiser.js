const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const appraiserSchema = new Schema({
  name: String,
  password: String,
  email: String,
  createdAt: { type: Date, default: Date.now },
  appraisees: [{ type: Schema.Types.ObjectId, ref: 'Appraisee' }],
  feeds: [{ type: Schema.Types.ObjectId, ref: 'Feed' }],
  sessionToken: String,
});

module.exports = mongoose.model('Appraiser', appraiserSchema);
