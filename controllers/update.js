const Todo = require("../models/Todo")

exports.update = async(req, res) => {

  try {
    const id = req.params.id
    const {title,description} = req.body
    const user = await Todo.findById(id)

    if(!user) return res.status(404).json({success:false,message:"user not found"})

    const newTodo = await Todo.findByIdAndUpdate(id,  { title, description, updatedAt:Date.now() }, { new: true, runValidators: true })

    return res.status(200).json({success:true,data:newTodo,message:"updated successfullt"})

  } catch (error) {
    res.status(500).json({message:"internal server error"}) 
  }

}

