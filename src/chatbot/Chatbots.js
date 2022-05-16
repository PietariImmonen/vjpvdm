import React from 'react'
import Chatbot from 'react-chatbot-kit'
import "./chatbot.css"
import 'react-chatbot-kit/build/main.css';

import config from './config'
import ActionProvider from './ActionProvider'
import MessageParser from './MessageParser'

export default function Chatbots() {

  //used for the Chatbot component
  return (
    <div className='chatbot'>
        <Chatbot config={config} actionProvider={ActionProvider} messageParser={MessageParser}/>
    </div>
  )
}
