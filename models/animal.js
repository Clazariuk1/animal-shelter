require('dotenv').config()

const { model, Schema } = require('mongoose')

const animalSchema = new Schema ({
    name: { type: String, required: true },
    species: { type: String, required: true },
    image: { type: String, required: true },
    reservedForAdoption: { type: Boolean, required: true, defaultValue: false },
    age: { type: Number },
    breed: { type: String }
}, {
    timestamps: true
})

module.exports = model('Animal', animalSchema)


// {
//     name: String, REQ
//     species: String, REQ
//      age: Number,
//      Sex: enum string,
//      breed: String,
//     image: String, REQ
//     reservedForAdoption: Boolean REQ
//     }
