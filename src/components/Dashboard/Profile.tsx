import React, { useContext } from 'react';
import { AuthContext } from '../../context/AuthContext';

const Profile: React.FC = () => {
  const { user } = useContext(AuthContext);

  return (
    <div className="profile">
      <h2>Profile</h2>
      {user && (
        <div>
          <p>Username: {user.username}</p>
          {/* Display other profile information here */}
        </div>
      )}
    </div>
  );
};

export default Profile;
