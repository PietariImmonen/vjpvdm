import './index.css';
import Navbar from "./navbar/Navbar"
import Chatbot from './chatbot/Chatbots';
import Footer from './footer/Footer';
import Main from './main/Main';
import Stories from './stories/Stories';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Facts from './facts/Facts';

function App() {
  return (
    <Router>
      <div className="App">
          <Navbar />
            <Routes>
              <Route path="/" exact element={<Main />} />
              <Route path="/stories" element={<Stories />} />
              <Route path="/facts" element={<Facts />} />
            </Routes>
          <Footer />
      </div>
    </Router>
  );
}

export default App;
