import React, { useState, useEffect } from 'react'
import { Grid, Input, Typography, Button } from '@material-ui/core';
import useStyles from './Styles';
import Axios from 'axios'

const initialFValues = {
    ClassroomName: '',
    ClassroomDescription: '',
}

export default (props)=>{
    const {openPopup, setopenPopup}=props;
    const classestyle=useStyles();
    const url="https://btcn03-api-18120362.herokuapp.com/classes/addclass";
    const [data,setData]=useState({
        ClassroomName:"",
        ClassroomDes:""
    })

    function submit(e){
        e.preventDefault();
        Axios.post(url,{
            ClassroomName:data.ClassroomName,
            ClassroomDes:data.ClassroomDes
        });
        refreshPage();
    }

    function handle(e){
        const newdata={...data}
        newdata[e.target.id]=e.target.value
        setData(newdata)
    }

    function refreshPage() {
        window.location.reload(false);
      }

    return (
        <Grid item>
        <Typography variant="h5">Tên môn học</Typography>
        <form onSubmit={(e)=>submit(e)}>
        <Input fullWidth="md"
            onChange={(e)=>handle(e)}
            id="ClassroomName"
            value={data.ClassroomName}
            name="ClassroomName"
            label="Classroom Name"
        />
        <Typography variant="h5">Mô tả môn học</Typography>
        <Input fullWidth="md"
            onChange={(e)=>handle(e)}
            id="ClassroomDes"
            value={data.ClassroomDes}
            name="ClassroomDes"
            label="Classroom Description"
        />
        <Grid container justify="flex-end">
            <div className={classestyle.submit}>
                <Button onClick={()=>setopenPopup(false)} type="submit" color="primary" variant="contained" >submit</Button>
            </div>
        </Grid>
        </form>
        </Grid>
        
    )
}
