const express = require("express")
const app = express()
const port = 3000

app.use((req, res, next) => {
    console.log("Acessou " + req.url)
    next()
})

app.get("/", (req, res) => {
    res.send("Você está na root.")
})

app.get("/about", (req, res) => {
    res.send("Você está em about.")
})

app.get("/data", (req, res) => {
    res.send("Você está na data.")
})

app.post("/data", (req, res) => {
    res.send("Pega essa data.")
})

app.get("/users", (req, res) => {
    res.send("Você está na users.")
})

app.get("/users/signup", (req, res) => {
    res.send("Você está na signup. Digite um número na url para acessar um user.")
})

app.get("/users/:userid", (req, res) => {
    var userId = req.params.userid
    if (userId != "") {
        res.send("Olá, " + req.params.userid)
    } else {
        res.redirect("/users/signup")
    }
})

app.get("/*oi", (req, res) => {
    res.status(404).send("Página não encontrada.")
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})