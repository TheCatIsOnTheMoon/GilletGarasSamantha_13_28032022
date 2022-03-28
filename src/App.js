import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './style.css';

import Footer from './components/Footer';

import Home from './pages/Home';
import SignIn from './pages/SignIn';
import UserPage from './pages/User';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sign-in" element={<SignIn />} />
          <Route path="/user/:id" element={<UserPage />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
