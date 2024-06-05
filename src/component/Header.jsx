import { AppBar, IconButton, Toolbar, Typography } from "@mui/material";
import React, { useContext, useEffect, useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import UserContext from "../UserContext";
// import { Link } from "react-router-dom";

const Header = () => {

  const { isLogin, setIsLoggedIn } = useContext(UserContext)
  const ref = useRef(true)
  const userName = localStorage.getItem('userName')


  useEffect(()=> {
    ref.current = true;
    console.log(ref.current,"refff");
    console.log(isLogin, 'login')
  }, [isLogin])

  const handleLogoutClick = () => {
    localStorage.removeItem("accessToken");
    localStorage.removeItem("userName");
    localStorage.removeItem("password");
    setIsLoggedIn(false)
  };

  return (
    <div>
      <AppBar position="static">
        <Toolbar
          variant="dense"
          style={{ display: "flex", justifyContent: "space-between" }}

        >
          <IconButton
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            {/* <MenuIcon/> */}
            <img
              src="https://img.freepik.com/free-vector/bird-colorful-logo-gradient-vector_343694-1365.jpg?size=338&ext=jpg&ga=GA1.1.1700460183.1712188800&semt=ais"
              alt="logo"
              style={{ width: "30px", height: "30px" }}
            />
          </IconButton>
     
          {
          isLogin ?          
          (
            <Typography
              variant="h6"
              color="inherit"
              component="div"
              style={{ cursor: "pointer" }}
              onClick={handleLogoutClick}>
              Logout
            </Typography>
          ) : (
            <a href="/login" style={{textDecoration:'none' , color:'white'}}>

            <Typography
              variant="h6"
              color="inherit"
              component="div"
              style={{ cursor: "pointer"}}
            >
              Login
            </Typography>
            </a>
          )}
          {userName}
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Header;
