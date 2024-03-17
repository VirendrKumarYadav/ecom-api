const mongoose = require("mongoose");

const addressShcema = new mongoose.Schema({
    address: {
        type: String,
        require: false,
        default: ""
    },
    city: {
        type: String,
        require: false,
        default: ""
    },
    state: {
        type: String,
        require: false,
        default: ""
    },
    pincode: {
        type: String,
        require: false,
        default: ""
    },

})



const userSchema = {
    firstname: {
        type: String,
        required: true
    },
    lastname: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    role: {
        type: String,
        required: true
    },
    address: {
        type: addressShcema,
        required: false
    },


}
module.exports = mongoose.model("users", userSchema);