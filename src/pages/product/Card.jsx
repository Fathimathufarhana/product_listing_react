import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import './products.css'
import ViewProduct from './ViewProduct';
import { Link } from 'react-router-dom';

export default function ActionAreaCard({data}) {
// console.log(data,"data");

  return (
<Link to={`/products/${data.id}`}>
    <div className='cards' >

    <Card >
      <CardActionArea>
        <CardMedia
        className='card-banner'
        component="img"
        height="450"
        image={data.image} style={{width:'100%'}}
        alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div" className='card-title'>
           {data.title}
          </Typography>
          <Typography variant="body2" color="text.secondary" className='product-price'>
              &#8377; {data.price}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
        </div>
        </Link>
  );
}
