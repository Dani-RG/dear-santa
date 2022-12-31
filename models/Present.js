const mongoose = require('mongoose');
const { Schema } = mongoose;

const presentSchema = new Schema(
    {
        name: {
            type: String,
            required: true
        },
        image: {
            type: String,
            required: true
        },
        price: {
            type: Number,
            required: true
        },
        recipient: {
            type: String,
            required: true
        },
        description: {
            type: String,
            required: true
        },
    },
    {
        timestamps: true    
    }
);

const Present = mongoose.model('Present', presentSchema);

module.exports = Present;