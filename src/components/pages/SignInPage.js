import { Box, Button, TextField } from '@mui/material';
import React, { useState } from 'react';
import { logInUserRequest } from '../../dataFetching';
import Layout from '../Layout';
import { useUserData } from '../../context/userDataContext';

function SignInPage() {
  const { userData, addToUserData } = useUserData();

  const [signInForm, setSignInForm] = useState({
    email: '',
    password: '',
  });

  const onSubmit = () => {
    logInUserRequest()
      .then((response) => {
        console.log('user sign in response: ', response);
        // Put the resulting user data in react context over the entire application
        // That it can be accessed from any component in the component tree.
        addToUserData(response.data);
      });
  };

  const handleSignOut = () => {
    // lougout the user
    logInUserRequest()
      .then((response) => {
        console.log('user sign out response: ', response);
        // Remove the user data from the user context when a user logs out
      });
  };

  return (
    <Layout>
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
    </Layout>
  );
}

export default SignInPage;
