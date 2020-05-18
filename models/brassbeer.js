const mongoose = require('mongoose')


const brassBeerSchema = new mongoose.Schema({

    nameBrass: String,
    address: String,
    nameCp: String,
    nameTown: String,
    nameWeb: String,
    picture: String


})

const Brewer = mongoose.model('Brewer', brassBeerSchema);

module.exports = Brewer;
