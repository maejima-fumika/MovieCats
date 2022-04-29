import * as React from 'react';
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import SearchIcon from '@mui/icons-material/Search';
import BookmarkAddedIcon from '@mui/icons-material/BookmarkAdded';
import "../styles/bottom-navigation.css"

export default function Footer() {
  const [value, setValue] = React.useState(0);

  return (
    <Box style={{position:"fixed", bottom:0, left:0, right:0}}>
      <BottomNavigation
        showLabels
        style={{backgroundColor:"black"}}
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      >
        <BottomNavigationAction label="Search" icon={<SearchIcon />}/>
        <BottomNavigationAction label="Saved" icon={<BookmarkAddedIcon />}/>
      </BottomNavigation>
    </Box>
  );
}

