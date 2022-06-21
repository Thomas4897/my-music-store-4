import { Box, Button, TextField } from '@mui/material';
import React, { useState } from 'react';
import { logInUserRequest } from '../../dataFetching';
import { useUser } from '../../reduxStore/userState';
import Layout from '../Layout';

function SignInPage() {
  const { user, logIn, logOut } = useUser();

  const [signInForm, setSignInForm] = useState({
    email: '',
    password: '',
  });

  const onSubmit = () => {
    logInUserRequest()
      .then((response) => {
        // console.log('user sign in response: ', response);
        // Put the resulting user data in react context over the entire application
        // That it can be accessed from any component in the component tree.
        logIn({ user: response.data });
      });
  };

  const handleSignOut = () => {
    // lougout the user
    logInUserRequest()
      .then(() => {
        // console.log('user sign out response: ', response);
        // Remove the user data from the user context when a user logs out
        logOut();
      });
  };

  return (
    <Layout>
      {!user
        ? (
          <Box p={4}>
            <h1>Sign in</h1>
            <Box mb={3}>
              <TextField
                id="email"
                label="Email"
                variant="standard"
                value={signInForm.email}
                onChange={(event) => {
                  setSignInForm({ ...signInForm, email: event.target.value });
                }}
              />
            </Box>
            <Box mb={3}>
              <TextField
                id="password"
                type="password"
                label="Password"
                variant="standard"
                value={signInForm.password}
                onChange={(event) => {
                  setSignInForm({ ...signInForm, password: event.target.value });
                }}
              />
            </Box>
            <Button variant="contained" onClick={onSubmit}>Sign in</Button>
          </Box>
        )
        : (
          <Box p={4}>
            <h1>
              Hi,
              {' '}
              {user.firstName}
            </h1>
            <Button variant="contained" onClick={handleSignOut}>Sign out</Button>
          </Box>
        )}

    </Layout>
  );
}

export default SignInPage;
