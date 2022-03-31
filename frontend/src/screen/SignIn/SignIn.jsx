import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { login } from '../../actions/userAction';

function SignIn() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  //call our user action
  const dispatch = useDispatch();

  const userLogin = useSelector((state) => state.userLogin);
  //destructuration
  const { loading, error, userInfo } = userLogin;

  const navigateTo = useNavigate();

  //if userInfo redirect to profilepage
  useEffect(() => {
    if (userInfo) {
      navigateTo('/user/:id');
    }
  }, [navigateTo, userInfo]);

  const submitHandler = async (e) => {
    e.preventDefault();
    console.log(
      'submitHandler email : ',
      email,
      'submitHandler password : ',
      password
    );
    dispatch(login(email, password));
  };

  if (error) {
    <div>error</div>;
  }

  if (loading) {
    return <div>loading</div>;
  }

  return (
    <>
      <main className="main bg-dark">
        <section className="sign-in-content">
          <i className="fa fa-user-circle sign-in-icon"></i>
          <h1>Sign In</h1>
          <form onSubmit={submitHandler}>
            <div className="input-wrapper">
              <label htmlFor="email"> Email </label>
              <input
                type="text"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="input-wrapper">
              <label htmlFor="password"> Password </label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className="input-remember">
              <input type="checkbox" id="remember-me" />
              <label htmlFor="remember-me"> Remember me </label>
            </div>
            <button className="sign-in-button">Sign In</button>
          </form>
        </section>
      </main>
    </>
  );
}

export default SignIn;
