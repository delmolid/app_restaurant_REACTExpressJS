const mongoose = require('mongoose');

const thingSchema = mongoose.Schema({
    plate: { type: String, required: true},
    description: { type: String, required: true},
    imageUrl: { type: String, required: true},
    
});
module.exports = mongoose.model('Thing', thingSchema);