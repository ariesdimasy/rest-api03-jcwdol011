const express = require("express")
const router = express.Router()

router.get("/",(req, res) => {
    res.status(200).send({
        message:"service list",
        data:[]
    })
})

router.post("/",(req, res) => {
    res.status(200).send({
        message:"post service",
        data:[]
    })
})

router.get("/:id",(req, res) => {

    const { id } = req.params

    res.status(200).send({
        message:"service detail",
        data:{
            id
        }
    })
})

module.exports = router