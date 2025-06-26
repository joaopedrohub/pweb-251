const express = require('express')
const axios = require('axios')
const app = express()
const PORT = 8000
app.set("view engine", "ejs")
app.set('json spaces', 4);
app.use(express.urlencoded({ extended: true }));

app.listen(PORT, ()=> {
    const msg = `Hello API running on PORT ${PORT}`
    const link = `http://localhost:${PORT}`
    const flink = `\x1b[1m${link}\x1b[0m`
    console.log(msg + '\n' + flink)
})

app.get('/', async (req, res) => {

    try {
        const response = await axios.get('https://ron-swanson-quotes.herokuapp.com/v2/quotes')
        console.log(response.data)
        res.render('index', {frase: response.data[0]})
    } catch (error) {
        console.log(error)
    }


})