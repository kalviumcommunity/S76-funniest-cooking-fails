const mongoose = require('mongoose');

const model = new mongoose.Schema({
     name :{
        type: String,
     },
     des :{
        type: String,
     },
    //  dishesfailed :{
    //      type:String,
    //  },
    //  images :{
    //      type: Buffer,

    //  },
     Country :{
         type: String,
     },

});


const User = mongoose.model('User', model);

module.exports = User;