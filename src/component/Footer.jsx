import { BottomNavigation, BottomNavigationAction } from '@mui/material';
import React, { useState } from 'react';
// import{ RestoreIcon, FavoriteIcon, LocationOnIcon } from "@mui/icons-material"

const Footer = () => {
    const {value,setValue} =useState()
  return (
    <div>
      <BottomNavigation
      style={{backgroundColor:'#1976d2'}}
  showLabels
  value={value}
  onChange={(event, newValue) => {
    setValue(newValue);
  }}
>
<div>
  &copy; copyright:2024 Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt, accusantium.
</div>
</BottomNavigation>
    </div>
  );
}

export default Footer;
