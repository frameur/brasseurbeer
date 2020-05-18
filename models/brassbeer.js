const mongoose = require('mongoose')


const brassBeerSchema = new mongoose.Schema({

    nameBrass: String,
    address: String,
    nameCp: String,
    nameTown: String,
    nameWeb: String,
    picture: String


})
module.exports = mongoose.model('Brassbeer', brassBeerSchema);

const Brewer = mongoose.model('Brassbeer', brassBeerSchema);

module.exports = Brewer;
