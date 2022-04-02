import { useEffect, useState } from 'react';
import { useDispatch, useSelector, useStore } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { getProfile, updateProfile } from '../../actions/userAction';

function UserPage() {
  const [editName, setEditName] = useState(false);
  const [newFirstName, setNewFirstName] = useState('');
  const [newLastName, setNewLastName] = useState('');

  //call our user action
  const dispatch = useDispatch();
  const navigateTo = useNavigate();

  //check store content
  // const store = useStore();
  // console.log('check store :', store.getState());

  const userProfile = useSelector((state) => state.userProfile);
  //destructuration
  const { loading, error, userInfo } = userProfile;

  // console.log('userProfile :', userInfo);

  // Get token from local storage
  const token = localStorage.getItem('token');
  //Get userInfos
  useEffect(() => {
    if (!token) {
      navigateTo('/');
    }
    dispatch(getProfile(token));
  }, [navigateTo, dispatch, token]);

  //edit name
  const launchEditName = () => {
    if (editName) {
      dispatch(updateProfile(token, newFirstName, newLastName));
      alert('Your name has been changed');
      //force refresh
      window.location.reload(false);
      //end edit
      return setEditName(false);
    }
    return setEditName(true);
  };

  return (
    <>
      <main className="main bg-dark">
        {editName ? (
          //name edit version
          <div className="header">
            <h1>
              Change your name :
              <br />
              <div className="input-area">
                <div className="input-wrapper">
                  <label htmlFor="firstName"></label>
                  <input
                    type="text"
                    id="firstName"
                    maxLength="20"
                    placeholder="Your first name"
                    onChange={(e) => setNewFirstName(e.target.value)}
                  />
                </div>
                <div className="input-wrapper">
                  <label htmlFor="lastName"></label>
                  <input
                    type="text"
                    id="lastName"
                    maxLength="20"
                    placeholder="Your last name"
                    onChange={(e) => setNewLastName(e.target.value)}
                  />
                </div>
              </div>
            </h1>
            <button onClick={launchEditName} className="edit-button">
              Use that name for now
            </button>
          </div>
        ) : (
          //name display version
          <div className="header">
            <h1>
              Welcome back
              <br />
              {userInfo?.body?.firstName} {userInfo?.body?.lastName} !
            </h1>
            <button onClick={launchEditName} className="edit-button">
              Edit Name
            </button>
          </div>
        )}

        <h2 className="sr-only">Accounts</h2>
        <section className="account">
          <div className="account-content-wrapper">
            <h3 className="account-title">Argent Bank Checking (x8349)</h3>
            <p className="account-amount">$2,082.79</p>
            <p className="account-amount-description">Available Balance</p>
          </div>
          <div className="account-content-wrapper cta">
            <button className="transaction-button">View transactions</button>
          </div>
        </section>
        <section className="account">
          <div className="account-content-wrapper">
            <h3 className="account-title">Argent Bank Savings (x6712)</h3>
            <p className="account-amount">$10,928.42</p>
            <p className="account-amount-description">Available Balance</p>
          </div>
          <div className="account-content-wrapper cta">
            <button className="transaction-button">View transactions</button>
          </div>
        </section>
        <section className="account">
          <div className="account-content-wrapper">
            <h3 className="account-title">Argent Bank Credit Card (x8349)</h3>
            <p className="account-amount">$184.30</p>
            <p className="account-amount-description">Current Balance</p>
          </div>
          <div className="account-content-wrapper cta">
            <button className="transaction-button">View transactions</button>
          </div>
        </section>
      </main>
    </>
  );
}

export default UserPage;
