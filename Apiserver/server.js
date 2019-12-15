const app = require('express')()
const bodyParser = require('body-parser')

const port = process.env.PORT || 5000

app.use(bodyParser.json())

var seikai = []

app.get('/get/answerhow', (req, res) => {
    res.json(seikai)
})

app.post('/post/submitanswer', (req, res) => {
    // console.log(req.body)
    var user = {}
    user["name"] = req.body.name
    user["seikai"] = req.body.seikai
    seikai.push(user)
    res.json({result:1})
})

app.listen(port, console.log("Sato 서버 도는중!"))