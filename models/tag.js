const mongoose = require('mongoose');

const tagSchema = new mongoose.Schema({
    name: String,
    createdAt: {
        type: Date,
        default: Date.now,
    },
});

const Tag = mongoose.model('Tag', tagSchema);

module.exports = Tag;
