const express = require("express")
const app = express()
const morgan = require("morgan")
const conn = require("./database")

app.use(express.json())
app.use(morgan('dev'))


app.use("/", require("./routes/appRoutes.routes"))


app.listen(3001)