const mongoose =  require('mongoose')
const Schema = mongoose.Schema;

const rosterSchema = new Schema({
    name : String,
    description: String,
    number:Number,
    firstName:String,
    lastName:String,
    birthDate:String,
    position:String,
    vb: Number,
    ca:Number,
    h:Number,
    b2:Number,
    b3:Number,
    hr:Number,
    bb:Number,
    k:Number,
    avg:Number
})

const loginSchema = new Schema({
    userName:String,
    firstName:String,
    lastName:String,
    password:String
   
})

// Creando el modelo
const Roster = mongoose.model('Roster', rosterSchema)
const Login = mongoose.model('Login', loginSchema)

module.exports = {
    Roster,
    Login
}