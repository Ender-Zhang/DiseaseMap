import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
// import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';

import { Link, useLocation, useNavigate } from "react-router-dom";


const theme = createTheme();



export default function LoginComponent(props: any) {
  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");

  let auth = props.auth;
  console.log("component Auth: ", auth);

  // 定义authcontext
  interface AuthContextType {
    user: any;
    signin: (user: string, callback: VoidFunction) => void;
    signout: (callback: VoidFunction) => void;
  }
  let AuthContext = React.createContext<AuthContextType>(null!);
  function useAuth() {
    return React.useContext(AuthContext);
  }

  let navigate = useNavigate();
  let location = useLocation();
  // let auth = useAuth();
  let from = location.state?.from?.pathname || "/";

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log("Login")
    console.log({
      email: data.get('email'),
      password: data.get('password'),
    });
    setUsername(data.get('email') as string);
    setPassword(data.get('password') as string);

    // 登录授权
    event.preventDefault();

    let formData = new FormData(event.currentTarget);
    let username = formData.get("email") as string;

    console.log("Username: " + username);
    console.log("from: " + from);
    auth.signin(username, () => {
      // Send them back to the page they tried to visit when they were
      // redirected to the login page. Use { replace: true } so we don't create
      // another entry in the history stack for the login page.  This means that
      // when they get to the protected page and click the back button, they
      // won't end up back on the login page, which is also really nice for the
      // user experience.
      navigate("/map", { replace: true });
    });
  };

  


  return (
    <ThemeProvider theme={theme}>
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
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>

            <Typography component="h1" variant="h5">
                Sign in
            </Typography>


          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            {/* <Link to="/map"> */}
            {/* <Link to={"/map/"+username+"ZYC"+password} key={username}> */}
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign In
            </Button>
            {/* </Link> */}
            <Grid container>
              <Grid item xs>
                <Button>
                  Forgot password?
                </Button>
              </Grid>
              <Grid item>
                <Button>
                  {"Don't have an account? Sign Up"}
                </Button>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}

