import { BrowserRouter, Route, Routes } from 'react-router-dom';

//pages
import Home from './Pages/Home';
import About from './Pages/About';
import Contacts from './Pages/Contacts';
import Error from './Pages/Error';
import Navbar from './Components/Navbar';
import User from './Pages/Users';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/user" element={<User />} />
          <Route path="/About" element={<About />} />
          <Route path="/Contacts" element={<Contacts />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
