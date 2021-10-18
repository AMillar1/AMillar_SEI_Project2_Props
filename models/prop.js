const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const propSchema = new Schema({
    title: {
        type: String, 
        required: true
    },
})

module.exports = mongoose.model('Prop', propSchema);