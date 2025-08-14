import { useSelector } from 'react-redux';
import { auth } from '../../config/firebase';
import './ProfileScreen.scss';

function ProfileScreen() {
  const { user } = useSelector((state) => state?.user);

  return (
    <div className="UserProfile">
      <div className="UserProfile-content">
        <h1>User Profile</h1>
        <div className="UserProfile-info">
          <div className="UserProfile-avatar">
            <img src={user?.photoURL || 'avatar.png'} alt="Avatar" />
          </div>
          <div className="UserProfile-details">
            <p>
              <span>Name:</span> {user?.displayName || 'N/A'}
            </p>
            <p>
              <span>UID:</span> {user?.uid}
            </p>
            <p>
              <span>Email:</span> {user?.email}
            </p>
            <p>
              <span>Verified:</span> {user?.emailVerified ? 'Yes' : 'No'}
            </p>
            <p>
              <span>Time:</span> {user?.reloadUserInfo?.lastLoginAt || 'NA'}
            </p>
          </div>
        </div>
        <button className="btn" onClick={() => auth.signOut()}>
          SignOut
        </button>
      </div>
    </div>
  );
}

export default ProfileScreen;
