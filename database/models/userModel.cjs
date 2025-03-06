const mongoose=require("mongoose")

let test = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    role: { type: String, enum: ['user', 'admin'], default: 'user' },
    token: { type: String }
})

const userRegister=mongoose.model("registerData",test)
module.exports= userRegister