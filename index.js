const express = require("express")
const app = express()
const todoRoutes = require("./routes/todos")
const PORT = process.env.PORT||3000
require("dotenv").config()
app.use(express.json())
const database = require('./config/db')


app.get("/", (req, res) => {
    res.send("this is homepage")
})
app.use("/api/v1",todoRoutes)




app.listen(PORT, () => {
  console.log(`Server is running at ${PORT}`)
})

database()
