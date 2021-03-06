const express = require('express')
const mong = require('mongoose')

// const Message = require('./Models/message.js')
//controllers
const MsgController = require('./controllers/messages_controller.js')
const ChatsController = require('./controllers/chats_controller.js')


const app = express()

app.use(express.json())

//database
mong.connect('mongodb://localhost/reactgram-v2', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => { console.log('DB connected') })
    .catch(() => { console.log('DB offline') })

app.listen(3300, () => {
    console.log('listening 3300...')
})

app.get('/messages', MsgController.load)
app.post('/message', MsgController.send)

app.get('/chats', ChatsController.load)
app.post('/chat', ChatsController.create)

//API
// app.post('/message', async (req, res) => {
//     let message = new Message(req.body)
//     message = await message.save()
//     res.json({status: 1}))
// })

// app.get('/messages', async (req, res) => {
//     // console.log(req); 
//     const messages = await Message.find()
//     res.json(messages)
// })
