const express = require("express")
const app = express()
const morgan = require("morgan")
const conn = require("./database")

app.use(express.json())
app.use(morgan('dev'))

app.get("/getBoards", require("./routes/getBoards.routes"))
app.get("/getTasks", require("./routes/getTasks.routes"))
app.post("/addBoard", require("./routes/postAddBoards.routes"))
app.post("/addTask", require("./routes/postAddTask.routes"))
app.post("/updateTask", require("./routes/postUpdateTask.routes"))
app.post("/deleteTask", require("./routes/postDeleteTask.routes"))

app.listen(3001)