
const mongoose = require('mongoose');


const flightSchema = new mongoose.Schema({
    airline: { type: String, enum: ['Jet Blue', 'Pan Am', 'Quantus', 'Koreanair'], required: true },
    airport: { type: String, enum: ['AUS', 'SEA', 'DEN', 'LAX', 'SAN'], default: 'SEA'},
    flightNo: {type: Number, min:10, max: 9999},
    departs: { type: Date, default: function() {
        const currentDate = new Date();
        currentDate.setFullYear(currentDate.getFullYear() + 1); // Add one year
        return currentDate;
    }
} 
});

module.exports = mongoose.model('Flight', flightSchema);
