const mong = require('mongoose')
const Schema = mong.Schema

let newMsgId = 'MS' + Date.now()

const messageSchema = new Schema({
    title: { type: String, required: true },
    messageList: { type: Array, default: [] },
    })
module.exports = mong.model('chat', messageSchema)
