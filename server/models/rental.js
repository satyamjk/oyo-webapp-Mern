const mongoose = require('mongoose');
const Schema = mongoose.Schema; 


const rentalSchema = new Schema({
    title: String,
    city: { type: String, required:true},
    street: { type: String},
    category: { type: String },
    image: { type: String  },
    bedrooms: Number,
    shared: Boolean,
    description: { type: String },
    dailyRate: Number,
    createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Rental', rentalSchema);