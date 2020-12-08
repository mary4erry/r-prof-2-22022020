const express = require('express')
const mong = require('mongoose')

const Message = require('./Models/message.js')

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
   let message = new Message(req.body)
   message = await message.save()
   res.send(JSON.stringify({status: 1}))
})
app.get('/messages', async (req, res) => {
   const messages = await Message.find()
   res.json(messages)
})


