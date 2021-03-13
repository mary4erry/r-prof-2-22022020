const express = require('express')
const mong = require('mongoose')

const Message = require('./Models/message.js')
const Chat = require('./Models/chat.js')

const app = express()

app.use(express.json())

//Server
app.listen(3300, () => {
   console.log('listening port 3300');
})

//Database
mong.connect('mongodb://localhost/reactgram-v2', {
   useNewUrlParser: true,
   useUnifiedTopology: true,
   useFindAndModify: false
})
   .then(() => { console.log('DB connected') })
   .catch( error => { console.log('DB offline'), error })
   
app.post('/message', async (req, res) => {
   const message = new Message(req.body)
   message = await message.save()
   res.send(JSON.stringify({status: 1}))
   // res.json(messages)
})
app.get('/messages', async (req, res) => {
   const messages = await Message.find()
   res.json(messages)
})

app.get('/chats', async (req, res) => {
   const chats = await Chat.find()
   res.json(chats)
})
app.post('/chat', async (req, res) => {
   const chat = new Chat(req.body)
   chat = await chat.save()
   // res.send(JSON.stringify({status: 1}))
   res.json(chat)
})
app.delete('/chat', async (req, res) => {
   await Chat.findOneAndDelete({ _id: req.body.chatId })
   await Message.deleteMany({ chatId: req.body.chatId })
   res.json({ _id: req.body.chatId })
})



