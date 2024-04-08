import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';

function ProfilePage() {
  const { user, isAuthenticated } = useAuth0();

  if (!isAuthenticated) {
    return <div>Loading...</div>;
  }

  const isPremiumMember = user?.user_metadata?.isPremiumMember || false;

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '50vh',
      }}
    >
      <div
        style={{
          border: '1px solid #ccc',
          padding: '20px',
          borderRadius: '10px',
          width: '400px',
        }}
      >
        <h2>User Profile</h2>
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            marginBottom: '20px',
          }}
        >
          <img
            src={user.picture}
            alt="User"
            style={{ borderRadius: '50%', width: '100px', marginRight: '20px' }}
          />
          <div>
            <h3>{user.name}</h3>
            <p>Email: {user.email}</p>
            <p>Premium Member: {isPremiumMember ? 'Yes' : 'No'}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export { ProfilePage };
