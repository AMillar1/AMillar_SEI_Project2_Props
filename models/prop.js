const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const commentSchema = new Schema({
    content: String,
})

const propSchema = new Schema({
    title: {
        type: String, 
        required: true
    },
    contents: {
        type: String,
        required: true
    },
    dependencies: {
        type: String,
        required: true
    },
    user: {
        type: Schema.Types.ObjectId, 
        ref: 'User'
    },
    comments: [commentSchema]
}, {
    timestamps: true    
});

module.exports = mongoose.model('Prop', propSchema);