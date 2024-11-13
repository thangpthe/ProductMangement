require('dotenv').config();
const mongoose = require("mongoose");
console.log("MongoURL:",process.env.MONGO_URL);
module.exports.connect = async() =>{
    try{
        await mongoose.connect(process.env.MONGO_URL);
        console.log("Connect Success");
    }catch(error){
        console.log("Fail",error.message);
    }
}

