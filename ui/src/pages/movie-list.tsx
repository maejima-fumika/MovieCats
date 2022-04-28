import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import { Rating } from '@mui/material';

export default function MovieList(){
    return (
        <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <Avatar variant="square" sx={{ width: 45, height: 70 }}  alt="Remy Sharp" src="http://www.yardbarker.com/media/d/0/d087c897fc875471933ced712bf4677d8b551a3a/thumb_16x9/28-best-animated-movie-franchises-time.jpg" />
            </ListItemAvatar>
            <ListItemText
              primary="Toy Story2"
              secondary={
                <React.Fragment>
                  <Rating name="read-only" value={3.5} precision={0.5}  readOnly style={{marginTop:5}} size="small"/>
                  <br />
                    {" Wish I could come, but I'm out of…foooo"}
                </React.Fragment>
              }
            />
          </ListItem>
          <Divider variant="inset" component="li" />
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <Avatar variant="square" sx={{ width: 45, height: 70 }}  alt="Travis Howard" src="https://pyxis.nymag.com/v1/imgs/1b5/fa1/37a5a2807988b2821a543ae9aaf61f50fc-23-michael-bay-explosions-1.rsocial.w1200.jpg" />
            </ListItemAvatar>
            <ListItemText
              primary="Summer BBQ"
              secondary={
                <React.Fragment>
                  <Rating name="read-only" value={3.5} precision={0.5}  readOnly style={{marginTop:5}} size="small"/>
                  <br />
                    {" Wish I could come, but I'm out of…"}
                </React.Fragment>
              }
            />
          </ListItem>
          <Divider variant="inset" component="li" />
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <Avatar variant="square" sx={{ width: 45, height: 70 }} alt="Cindy Baker" src="https://netstorage-tuko.akamaized.net/images/62986d234ef17429.jpg?imwidth=900" />
            </ListItemAvatar>
            <ListItemText
              primary="Oui Oui"
              secondary={
                <React.Fragment>
                  <Rating name="read-only" value={3.5} precision={0.5}  readOnly style={{marginTop:5}} size="small"/>
                  <br />
                    {" Wish I could come, but I'm out of…"}
                </React.Fragment>
              }
            />
          </ListItem>
        </List>
      );
}