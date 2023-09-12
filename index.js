const express = require("express")
const app = express()
const PORT = 4500

const serviceRouter = require("./serviceRouter")

app.use(express.json())

app.use((err, req, res, next) => {
    console.error(err.stack)
    res.status(500).send("something is broken")
})
app.use((req, res, next) => {
    console.log("middleware application level nih bos")
    next()
})

app.use("/service", serviceRouter)

app.get("/",(req, res, next) => {
    console.log("middleware home")
    next()
},(req, res) => {
    console.log("Home")
    res.status(500).send("ini error loh")
})

app.post("/",(req, res, next) => {
    // ini authentication 
    if(true) { 
        next()
    }
},(req, res) => {
    console.log("Home POST")
    res.status(200).send({
        message:"home post",
        data:{}
    })
})



app.listen(PORT, () => {
    console.log("server run on port = ", PORT)
})