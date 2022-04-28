import React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Chip from '@mui/material/Chip';
import { Paper } from '@mui/material';
import { styled } from '@mui/material/styles';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import { Rating } from '@mui/material';


const OriginalListItem = styled('li')(({ theme }) => ({
    marginRight: theme.spacing(1),
  }));

export default function MovieDetail(){
    return (
        <div>
        <Card style={{ marginRight:10, marginLeft:10, marginTop:15 }}>
          <CardMedia
            component="img"
            height="200"
            image="http://www.yardbarker.com/media/d/0/d087c897fc875471933ced712bf4677d8b551a3a/thumb_16x9/28-best-animated-movie-franchises-time.jpg"
            alt="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div" >
              Toy Story 2
            </Typography>
            <Rating name="read-only" value={3.5} precision={0.5}  readOnly style={{marginBottom:10}}/>
            <Paper component="ul" elevation={0} sx={{
                display: 'flex',
                listStyle: 'none',
                p: 0,
                m: 0,
            }}>
            { chipData.map((data)=>
                <OriginalListItem key={data.key}>
                <Chip label={data.label}/>
              </OriginalListItem>
            )}
            </Paper>
            <Typography variant="body2" color="text.secondary" style={{marginTop:10}}>
              Lizards are a widespread group of squamate reptiles, with over 6,000
              species, ranging across all continents except Antarctica
            </Typography>
          </CardContent>
        </Card>
        <Typography variant="h6" component="div" style={{marginTop:20, marginLeft:15,marginBottom:0}}>
            Recommended movies
        </Typography>
        <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper'}}>
          <ListItem alignItems="flex-start" style={{paddingTop:0}}>
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
        </div>
      );
}

const chipData = [
    { key: 0, label: 'Action' },
    { key: 1, label: 'Comedy' },
    { key: 2, label: 'Fantasy' },
    { key: 3, label: 'Child' },
  ]