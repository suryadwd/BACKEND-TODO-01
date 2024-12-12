const mongoose = require('mongoose')

const todoSchema = new mongoose.Schema({

    title:{
      type:String,
      require:true,
      maxLength:50,
    },
    description:{
      type:String,
      require:true,
      maxLength:100,
    },
    createdAt:{
      type:Date,
      require:true,
      default:Date.now(),
    },
    updatedAt:{
      type:Date,
      require:true,
      default:Date.now()
    }

})

module.exports = mongoose.model("Todo", todoSchema)