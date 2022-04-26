import './index.css';
import Navbar from "./Navbar"
import Header from './Header';
import Video from './Video';
import Story from './Story';
import Facts from './Facts';
import Chatbot from './chatbot/Chatbots';

function App() {
  return (
    <div className="App">
      <Chatbot />
      <Navbar />
      <Header />
      <Video />
      <Story />
      <Facts />
    </div>
  );
}

export default App;
