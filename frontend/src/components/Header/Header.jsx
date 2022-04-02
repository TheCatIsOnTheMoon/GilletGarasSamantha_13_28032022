import { Link, useNavigate } from 'react-router-dom';
import { logOut } from '../../actions/userAction';
import './style.css';
import logo from '../../assets/img/argentBankLogo.png';
import { useDispatch, useSelector } from 'react-redux';

function Header() {
  // Get token from local storage
  const token = localStorage.getItem('token');

  //call our user action
  const dispatch = useDispatch();
  const navigateTo = useNavigate();

  const userProfile = useSelector((state) => state.userProfile);
  //destructuration
  const { loading, error, userInfo } = userProfile;

  // console.log('userProfile :', userInfo);

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

      <div className="navbar__item">
        {token ? (
          <>
            <Link to="/profile" className="main-nav-item">
              <i className="fa fa-user-circle"></i>
              <span>{userInfo?.body?.firstName}</span>
            </Link>

            <div onClick={logoutHandler} className="main-nav-item">
              <i className="fa fa-sign-out"></i>
              Sign Out
            </div>
          </>
        ) : (
          <Link to="/sign-in" className="main-nav-item">
            <i className="fa fa-user-circle"></i>
            <span>Sign In</span>
          </Link>
        )}
      </div>
    </nav>
  );
}

export default Header;
