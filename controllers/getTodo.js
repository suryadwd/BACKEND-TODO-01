const Todo = require("../models/Todo")


exports.getTodo = async (req,res) => {
      
  try {
    const user = await Todo.find();
    res.status(200).json({success:true,data:user,messgae:"done"})
  } catch (error) {
    res.status(500).json({message:"internal server error"})
  }

}
