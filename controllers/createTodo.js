const Todo = require("../models/Todo")



exports.createTodo = async (req,res) => {

  try {
    const {title,description} = req.body
    const newTodo = new Todo({title,description})
    await newTodo.save()
    res.status(200).json({success:true,data:newTodo,message:"Entry created"})
  } catch (error) {
    res.status(500).json({message:"internal server error"})
  }

}

