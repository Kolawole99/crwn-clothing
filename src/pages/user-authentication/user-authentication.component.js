import React from 'react';

import './user-authentication.styles.scss';

import SignIn from '../../components/sign-in/sign-in.component';

const UserAuthentication = () => {
  return (
    <div className="sign-in-and-sign-up">
      <SignIn />
    </div>
  );
};

export default UserAuthentication;
