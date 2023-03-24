const mongoose = require('mongoose');


const Detail = new mongoose.Schema({
        brandName: String,
        links: [
            {
                label: String,
                url: String
            }
        ]
});


module.exports = mongoose.model('details', Detail);
