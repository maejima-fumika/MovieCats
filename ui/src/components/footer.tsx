import * as React from 'react';
import { useEffect } from 'react';
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import SearchIcon from '@mui/icons-material/Search';
import BookmarkAddedIcon from '@mui/icons-material/BookmarkAdded';
import { useNavigate,useLocation } from 'react-router-dom';
import "../styles/bottom-navigation.css"

export default function Footer() {
  const [value, setValue] = React.useState("search");
  const location = useLocation()
  const navigate = useNavigate()

  useEffect(() => {
    if (location.pathname == "/saved-movies") {
      setValue("saved")
    }else{
      setValue("search")
    }
  }, [location.key]);

  return (
    <div>
    { location.pathname != "/"
      &&<Box style={{position:"fixed", bottom:0, left:0, right:0}}>
      <BottomNavigation
        showLabels
        style={{backgroundColor:"black"}}
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      >
        <BottomNavigationAction 
          label="Search" 
          icon={<SearchIcon />} 
          onClick={()=>navigate("/categories")} 
          value="search"/>
        <BottomNavigationAction 
          label="Saved" 
          icon={<BookmarkAddedIcon/>}
          onClick={()=>navigate("/saved-movies")}
          value="saved"/>
      </BottomNavigation>
    </Box>}
    </div>
  );
}

