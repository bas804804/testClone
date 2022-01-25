const mongoose = require('mongoose');

const addressSchema = new mongoose.Schema({
    street: String,
    city: String
})
const userSchema = new mongoose.Schema({
    name:{
        type:String,
    },
    age: {
        type: Number,
        min:1,
        max:100,
    
    },
    email:{
        type:String,
        required:true,
        lowercase: true,
    },
    createdAt: {
        type: Date,
        default: () => new Date()
    },
    updatedAt:  {
        type: Date,
        default: () => new Date()
    },
    bestFriend: {
        type: mongoose.SchemaTypes.ObjectId,
        ref:"User"
    },
    hobbies:[String],
    address:addressSchema

})

userSchema.methods.sayHi = function() {
    console.log(`hi.My name is ${this.name}`)
}

userSchema.statics.findByName = function(name) {
    return this.where({name:  new RegExp(name,"i")})
}

userSchema.pre("save", function(next){
    
})
module.exports = mongoose.model("User", userSchema);