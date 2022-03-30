import { Link, useNavigate } from 'react-router-dom';
import { logOut } from '../../actions/userAction';
import './style.css';
import logo from '../../assets/img/argentBankLogo.png';
import { useDispatch, useSelector } from 'react-redux';

function Header() {
  //call our user action
  const dispatch = useDispatch();
  const navigateTo = useNavigate();

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const logoutHandler = () => {
    dispatch(logOut());
    navigateTo('/');
  };

  return (
    <nav className="main-nav">
      <Link to={'/'} className="main-nav-logo">
        <img
          className="main-nav-logo-image"
          src={logo}
          alt="Argent Bank Logo"
        />
        <h1 className="sr-only">Argent Bank</h1>
      </Link>
      <div>
        <Link to={'/user/:id'} className="main-nav-item">
          <i className="fa fa-user-circle"></i>
          Tony
        </Link>

        <Link to={'/sign-in'} className="main-nav-item">
          <i className="fa fa-user-circle"></i>
          Sign In
        </Link>

        <div onClick={logoutHandler} className="main-nav-item">
          <i className="fa fa-sign-out"></i>
          Sign Out
        </div>
      </div>
    </nav>
  );
}

export default Header;
