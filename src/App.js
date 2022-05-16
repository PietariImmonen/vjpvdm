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
import { SiChatbot } from "react-icons/si"
import Comments from './comments/Comments';

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
              <Route path="/comments" element={<Comments />} />
            </Routes>
            <div onClick={help} className="chatbot-button"><SiChatbot size={"100px"}/></div>
            <div className='chatbot-div'>
            {chatBot? <Chatbot /> : ""}
            </div>
        <Footer />
      </div>
    </Router>
  );
}
export default App;
