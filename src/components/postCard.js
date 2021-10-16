import * as React from 'react';
import {Card,CardActions,CardContent,CardMedia,Avatar,CardHeader,IconButton,Typography} from '@material-ui/core';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import MoreVertIcon from '@material-ui/icons/MoreVert';


export default function PostCard() {

  return (
    <Card sx={{ width: '50vh'}}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: "purple"}} aria-label="recipe">
          E
        </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title="Explicações Matemática"
        subheader="September 20, 2022"
      />
      <CardMedia
        component="img"
        height="194"
        image="https://img.quizur.com/f/img6099779694b529.95255920.jpg?lastEdited=1620670381"
        alt="Paella dish"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          Ofereço explicações matemática para o secundário.<br/>
          Sou aluno de informática.<br/>
          12 euros por hora.<br/>
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
      </CardActions>
    </Card>
  );
}
