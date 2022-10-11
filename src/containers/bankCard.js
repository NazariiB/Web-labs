import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import logo from '../image/112.jpg';
import { Button, CardActionArea, CardActions } from '@mui/material';
import { Link, useNavigate, useParams } from "react-router-dom";
import { minHeight, minWidth } from '@mui/system';
import ThemeContext from './Context';

export default function MultiActionAreaCard(props) {
  const navigate = useNavigate();
  const temp = React.useContext(ThemeContext)
  const onClickView = (e) => {
    e.preventDefault()
    // props.cardF.cardFun(props.data)
    navigate(`/itemPage/${JSON.stringify(props)}`)
    navigate(0)
    props.info.cardFun([...props])
    temp.setIdcard([props])
  }
  return (
    <Card sx={{ maxWidth: 300, minWidth:250 }} className="card_bank">
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={logo}
          alt="bank"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {props.data.name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc maximus, nulla ut commodo sagittis, sapien dui 
          </Typography>
          <Typography variant="h6">
          Clients: {props.data.clients} 
          </Typography>
          <Typography variant="h6" >
          Credits: {props.data.credits} 
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button  size="small" color="primary" onClick={e => {onClickView(e)}}>
          Viev more
        </Button>
      </CardActions>
    </Card>
  );
}