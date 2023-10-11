import * as React from 'react';
import {useEffect, useState} from 'react'
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Link } from 'react-router-dom';
import configs from '../../../configs';
import * as ProfileService from '../../../services/ProfileService';
// TODO remove, this demo shouldn't need to reset the theme.

const defaultTheme = createTheme();


const getData = (event) => {
  return {
    fullName: event.target.fullName.value,
    email: event.target.email.value,
    phoneNumber: event.target.phoneNumber.value,
    dateOfBirth: event.target.dateOfBirth.value,
    address: event.target.address.value,

    username: event.target.username.value,
    roleName: 'CUSTOMER'
  }
}
const getUser = async () => {
  return await ProfileService.getProfile()
}


export default function UdpateProfile() {
  const [message, setMessage] = useState(null); 
 
  const [user, setUser] = useState({})

  
const onInputChange = (event) => {
  const { name, value } = event.target;
  setUser((prevUser) => ({
    ...prevUser,
    [name]: value,
  }));
};
    
  useEffect(()=>{
      const fetchData = async () => {
          const response = await getUser()
          setUser(response.data)
      }
      fetchData(); // Gọi hàm fetchData khi component được mount
  }, []);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = getData(event)
    const response = await ProfileService.updateProfile(user)

    if (response.isError === false){
      window.location.href = configs.routes.profile
    }
    else{
      setMessage(response.data)
      console.log(response.data)
    }
  };

  return (
    
    <ThemeProvider theme={defaultTheme}>

      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
        <p className='text-danger text-center' id='messageError'>{message}</p>

          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign up
          </Typography>
          <Box component="form" Validate onSubmit={handleSubmit} sx={{ mt: 3 }}>
            <Grid container spacing={2}>
            <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="fullName"
                  label="Full Name"
                  name="fullName"
                  autoComplete="Name"
                  value={user.fullName}
                  onChange={onInputChange}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                  value={user.email}
                  onChange={onInputChange}
                />
              </Grid>

              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="phoneNumber"
                  label="Phone Number"
                  name="phoneNumber"
                  autoComplete="phone"
                  value={user.phoneNumber}
                  onChange={onInputChange}
                />
              </Grid>

              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="dateOfBirth"
                  label="Date Of Birth"
                  name="dateOfBirth"
                  autoComplete="dateOfBirth"
                  type='date'
                  value={new Date(user.dateOfBirth ?? null).toISOString().slice(0,10)}
                  onChange={onInputChange}
                />
              </Grid>


              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id="address"
                  label="Address"
                  name="address"
                  autoComplete="address"
                  value={user.address}
                  onChange={onInputChange}
                />
              </Grid>

              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id="gender"
                  label="Gender"
                  name="gender"
                  autoComplete="gender"
                  type=''
                  value={user.gender}
                  onChange={onInputChange}
                />
              </Grid>

              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="username"
                  label="Username"
                  name="username"
                  autoComplete="username"
                  value={user.username}
                  onChange={onInputChange}
                />
              </Grid>
              <Grid item xs={12}>
                <FormControlLabel
                  control={<Checkbox value="allowExtraEmails" color="primary" />}
                  label="I want to receive inspiration, marketing promotions and updates via email."
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Update
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link to= {configs.routes.login}>
                  Already have an account? Login
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}