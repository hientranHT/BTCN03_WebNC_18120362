import React, { useEffect, useState } from "react";
import { Typography, AppBar, Card, CardActions, CardContent, CardMedia, CssBaseline, Grid, Toolbar, Container, Button  } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import useStyles from './Styles';
import Popup from './Popup';
import ClassForm from "./ClassForm";

export default (pros)=>{
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [items, setItems] = useState([]);
    const [openPopup,setopenPopup] = useState(false);


    const classestyle=useStyles();
    const classes=[];

    useEffect(() => {
        fetch("https://btcn03-api-18120362.herokuapp.com/classes")
          .then(res => res.json())
          .then(
            (result) => {
              setIsLoaded(true);
              setItems(result);
            },
            // Note: it's important to handle errors here
            // instead of a catch() block so that we don't swallow
            // exceptions from actual bugs in components.
            (error) => {
              setIsLoaded(true);
              setError(error);
            }
          )
      }, [])
    items.map(allclassroom =>{classes.push(allclassroom)})
    return (
     <>
       <CssBaseline/>
       <AppBar position="relative">
           <Toolbar>
            <HomeIcon className={classestyle.icon}/>
            <Typography variant="h5">
              Classroom
            </Typography>
           </Toolbar>
         </AppBar>
         <main>
           <div className={classestyle.container}>
            <Container maxWidth="sm" style={{marginTop: "20px"}}>
              <Typography variant="h2" align="center" color="textPrimary" gutterBottom>
                Classroom List
              </Typography>
              <Typography variant="h5" align="center" color="textSecond" paragraph>
                Danh sách các lớp học
              </Typography>
              <div className={classestyle.button}>
                <Grid  justify="center">
                  <Grid item>
                    <Button marginTop="20px" variant="contained" color="primary" onClick={()=>setopenPopup(true)}>
                      New Classroom 
                    </Button>
                  </Grid>
                </Grid>
              </div>
            </Container>
           </div>
           <Container className={classestyle.cardGrid} maxWidth="md">
            <Grid container spacing={4} maxWidth="md">
              
              {items.map((allclassroom)=>(
                <Grid item key={allclassroom.ClassroomID} xs={12} sm={6} md={4}>
                <Card className={classestyle.card}>
                  <CardMedia 
                    className={classestyle.cardMedia} 
                    image="https://source.unsplash.com/random" 
                    title="Image Title"/>
                    <CardContent className={classestyle.cardContent}>
                      <Typography gutterBottom variant="h5">
                        {allclassroom.ClassroomName}
                      </Typography>
                      <Typography >
                        {allclassroom.ClassroomDes}
                      </Typography>
                    </CardContent>
                    <CardActions>
                      <Button size="small" color="primary">View</Button>
                      <Button size="small" color="primary">Edit</Button>
                    </CardActions>
                </Card>
              </Grid>
              ))}
            </Grid>
           </Container>
         </main>
         <footer className={classestyle.footer}>
            <Typography variant="h6" align="center" gutterBottom>
              Hien Tran 
            </Typography>
            <Typography variant="subtitle1" align="center" color="textsSecondary">
              Classroom Exercises
            </Typography>
         </footer>
         <Popup
            title="New Class Form"
            openPopup={openPopup} 
            setopenPopup={setopenPopup}>
            <ClassForm  openPopup={openPopup} 
                        setopenPopup={setopenPopup}/>
         </Popup>
     </>
    )
    // return <ul>
    //     {items.map(allclassroom =><li>{allclassroom.ClassroomName}</li>)}
    // </ul>
    //{classes.map((card)=>(
}