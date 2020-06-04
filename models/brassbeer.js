const mongoose = require('mongoose')


const brassBeerSchema = new mongoose.Schema({

    nameBrass: {
        type:String
    },
    address: {
        type:String
    },
    nameCp: {
        type:String
    },
    nameTown: {
        type:String
    },
    nameWeb: {
        type:String
    },
    picture: {
        type:String
    },
    date: {
        type:Date,
        default: Date.now
      }


})
module.exports = mongoose.model('Brassbeer', brassBeerSchema);

// const Brewer = mongoose.model('Brassbeer', brassBeerSchema);

// module.exports = Brewer;
