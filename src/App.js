import './App.css';
import Navbar from './components/Navbar';
// import TextForm from './components/TextForm';
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Navbar name="Anas" />
      {/* <TextForm heading="Enter the text analyze below" /> */}
    </BrowserRouter>
  );
}

export default App;