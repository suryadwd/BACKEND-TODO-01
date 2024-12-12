const Todo = require("../models/Todo")



exports.deleted = async (req,res) => {

  try {
    const id = req.params.id
    const user = await Todo.findByIdAndDelete(id)
    res.status(200).json({success:true,message:"deleted"})
  } catch (error) {
    res.status(500).json({message:"internal server error"})
  }

}

