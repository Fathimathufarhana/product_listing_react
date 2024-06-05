import React, { useId } from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import UserContext from "../UserContext";
import { useContext } from "react";

export default function SignIn() {
  const defaultAccessToken = useId()

  const navigate = useNavigate();
  const { setIsLoggedIn } = useContext(UserContext);
  const [userName, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const HandleSubmit = (e) => {
    e.preventDefault();
    const defaultUser = "farhana";
    const defaultPassword = "12345";

    if (defaultPassword === password && defaultUser === userName) {
      console.log("login successful");
      localStorage.setItem("accessToken", defaultAccessToken);
      localStorage.setItem("userName", userName);
      localStorage.setItem("password", password);
      setIsLoggedIn(true);

      navigate("/");
    } else {
      console.log("Invalid credentials");
    }
  };

  return (
    <Container component="main" maxWidth="xs" style={{marginBottom:'150px'}}>
      <Box
        sx={{
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <Box component="form" noValidate sx={{ mt: 1 }}>
          <TextField
            margin="normal"
            required
            fullWidth
            id="username"
            label="Username"
            name="username"
            value={userName}
            onChange={(e) => setUsername(e.target.value)}
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            id="password"
            autoComplete="current-password"
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            onClick={(e) => {
              HandleSubmit(e);
            }}
            sx={{ mt: 3, mb: 2 }}
          >
            Sign In
          </Button>
        </Box>
      </Box>
    </Container>
  );
}
