
const { addMsg, selectAllMessage } = require("./user")

const express = require("express")
const app = express()

app.use(express.json())

const cors = require("cors")
app.use(cors())


app.get("/message", async (req, res) => {
    const list = await selectAllMessage()
    res.json(list)
})

app.post("/send", async (req, res) => {

    const result = req.body;
    await addMsg(result.msg)
    res.json({ msg: "message added to database" })
})


app.listen('4000', () => console.log("Server started"));


