const Todo = require("../models/Todo")

exports.findTodo = async (req,res) => {

  try {
    const id = req.params.id
    const find = await Todo.findById(id)
    if(!find){
      return res.status(400).json({success:false,message:"user not found"})
    }
    res.status(200).json({success:true,data:find})
  } catch (error) {
    res.status(500).json({message:"internal server error"})
  }

}


