import React from 'react'
import ReactDOM from 'react-dom'

import MessageField from './Components/MessageField/MessageField.jsx'

const user = 'Luke'

ReactDOM.render(
   <MessageField usr={user}/>,
   document.getElementById('app'),
)