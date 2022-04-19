import './index.css';
import Navbar from "./Navbar"
import Header from './Header';
import Video from './Video';
import Story from './Story';
import Facts from './Facts';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <Video />
      <Story />
      <Facts />
    </div>
  );
}

export default App;
