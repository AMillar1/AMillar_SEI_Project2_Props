const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const propSchema = new Schema({
    title: {
        type: String, 
        required: true
    },
    dependencies: {
        type: String,
        required: true
    },
    user: {
        type: Schema.Types.ObjectId, 
        ref: 'User'},
    }, {
    timestamps: true
});

module.exports = mongoose.model('Prop', propSchema);