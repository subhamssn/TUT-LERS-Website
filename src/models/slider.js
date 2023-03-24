const mongoose = require('mongoose');

const sliderDetails = new mongoose.Schema({

    title: String,
    subtitle: String,
    imageURL: String

});

module.exports = mongoose.model('slider', sliderDetails);