const express = require("express")
const router = express.Router()

const {createTodo} = require("../controllers/createTodo")
const {getTodo} = require("../controllers/getTodo")
const {findTodo} = require("../controllers/findTodo")
const {update} = require("../controllers/update")
const {deleted} = require("../controllers/delete")
router.post("/createTodo",createTodo)
router.get("/getTodo",getTodo)
router.post("/find/:id",findTodo)
router.put("/update/:id",update)
router.delete("/delete/:id",deleted)

module.exports = router;