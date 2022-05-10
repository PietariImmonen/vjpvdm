import './index.css';
import Navbar from "./navbar/Navbar"
import Chatbot from './chatbot/Chatbots';
import Footer from './footer/Footer';
import Main from './main/Main';
import Stories from './stories/Stories';

function App() {
  return (
    <div className="App">
      <Chatbot />
      <Navbar />
      <Stories />
      <Footer />
    </div>
  );
}

export default App;
