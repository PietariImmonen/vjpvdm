import './index.css';
import Chatbot from './chatbot/Chatbots';
import Footer from './footer/Footer';
import Main from './main/Main';
import Stories from './stories/Stories';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Facts from './facts/Facts';
import { useState } from 'react';
import "./chatHelper.css"
import WholeNav from './navbar2/WholeNav';

function App() {

  const [chatBot, setChatBot] = useState(false)


  function help() {
    if(chatBot) {
      setChatBot(false)
    } else setChatBot(true)
  }

  

  return (
    <Router>
      <div className="App">
        <WholeNav />
            <Routes>
              <Route path="/" exact element={<Main />} />
              <Route path="/stories" element={<Stories />} />
              <Route path="/facts" element={<Facts />} />
            </Routes>
          
          
      </div>
    </Router>
  );
}

/*
<Route path="/" exact element={<Main />} />
<div onClick={help} className="chatbot-button">Click chatbot</div>
<div className='chatbot-div'>
          {chatBot? <Chatbot /> : ""}
          </div> */
export default App;
