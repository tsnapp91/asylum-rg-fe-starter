import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { Link } from 'react-router-dom';

const LoginButton = () => {
  const { loginWithRedirect, isAuthenticated } = useAuth0();
  return (
    !isAuthenticated && (
      <Link
        style={{ color: '#E2F0F7', paddingRight: '75px' }}
        onClick={() => loginWithRedirect()}
      >
        Log In
      </Link>
    )
  );
};

export default LoginButton;
