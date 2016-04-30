const mongoose = require('mongoose');

const Schema = mongoose.Schema;


const commentSchema = new Schema({ 
    author: String,
    type: String,
    content: String,
    _appraisee: { type: Schema.Types.ObjectId, ref: 'Appraisee' },
    createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Comment', commentSchema);
