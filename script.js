5555

const mongoose = require('mongoose');
const User = require('./User.js')
mongoose.connect("mongodb://localhost/testdb")

async function run() {
    try{
        const user = await User.findOne({name: "bas"})
        console.log(user)
    }catch(e){
        console.log(e.message)
    }


}
run();