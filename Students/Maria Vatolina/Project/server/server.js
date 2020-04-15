const express = require('express')
const mong = require('mongoose')

const Message = require('./Models/message.js')

const app = express()

app.use(express.json())

mong.connect('mongodb://localhost/reactgram-v2', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => { console.log('DB connected') })
    .catch(() => { console.log('DB offline') })

app.listen(3300, () => {
    console.log('listening 3300...')
})

//API for messages
app.post('/message', async (req, res) => {
    let message = new Message(req.body)
    message = await message.save()
    // res.send(JSON.stringify({status: 1}))
    res.json(({status: 1}))
})

app.get('/messages', async (req, res) => {
    // console.log(req);
    
    const messages = await Message.find()
    res.json(messages)
})
//API for chats
app.get('/chats', async (req, res) => {
    const chats = await Chat.find()
    res.json(chats)
})
app.post('/chat', async (req, res) => {
    let chat = new Chat(req.body)
    chat = await chat.save()
    // res.send(JSON.stringify({status: 1}))
    res.json(chats)
})
