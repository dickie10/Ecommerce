import React from 'react' 
import { useSelector } from 'react-redux' 
import Box from '@material-ui/core/Box'; 
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card'; 
import CardContent from '@material-ui/core/CardContent'; 
import CardMedia from '@material-ui/core/CardMedia'; 
import Typography from '@material-ui/core/Typography';

const Productcomp = () => { 
  const products = useSelector((state) => state.ALLPRODUCTS.products); 
  const {title,description,image} = products; 
  //   const renderfundata = products?.data?.map((product)=>{ 
  //   return(<Box sx={{ flexGrow: 1 }}>
  //   <Grid container spacing={4} direction="row" xs={6}  sm={2} md={4} lg={4} >  
  //   <Grid item   >
  //     <Card sx={{ maxWidth: 100 }}>  
  //     <CardMedia
  //       component="img"
  //       height="100"
  //       image={product.image}
  //       alt="green iguana"
  //     />
  //       <CardContent>
  //         <Typography gutterBottom variant="h5" component="div">
  //             {product.title}
  //         </Typography> 
  //         <Typography variant="body2" color="text.secondary">
  //           {product.description}
  //         </Typography>
  //       </CardContent>
  //     </Card>  
  //     </Grid> 
  
  //   </Grid> 
  // </Box>
  //   )})
  
  
  return (  
    <div>
    
    <Grid container spacing={4} direction="row" >  
    {
      products?.data?.map((product)=>
 
     
      <Grid item xs={6}  sm={4} md={4} lg={3}   >
      <Card sx={{ maxWidth: 100 }}>  
      <CardMedia
      component="img"
      height="250"
      image={product.image}
      alt="green iguana"
      />
      <CardContent>
      <Typography gutterBottom variant="h5" component="div">
      {product.title.slice(0,100)}
      </Typography> 
      <Typography variant="body2" color="text.secondary">
      {product.description.slice(0,100)}
      </Typography> 
      <Typography>
        <p>€{product.price} </p>
      </Typography> 
      <button> 
        <p>Cart</p> 
      </button>
      </CardContent>
      </Card>  
      </Grid> )
      
    
    
      
    }
    </Grid> 
    </div>
    
    )
  }
  export default Productcomp