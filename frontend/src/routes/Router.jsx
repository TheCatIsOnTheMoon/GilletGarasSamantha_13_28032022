import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
//screens
import Home from '../screen/Home/Home';
import SignIn from '../screen/SignIn/SignIn';
import UserPage from '../screen/UserPage/UserPage';
import Error from '../screen/Error/Error';
//componants
import Header from '../components/Header/Header';

/**
 * The AppRouter function returns a Router component
 * that contains the differents Routes and paths of the App.
 * @component
 * @returns A router component.
 *
 */
function AppRouter() {
  return (
    <Router>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sign-in" element={<SignIn />} />
          <Route path="/user/:id" element={<UserPage />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </main>
    </Router>
  );
}

export default AppRouter;
