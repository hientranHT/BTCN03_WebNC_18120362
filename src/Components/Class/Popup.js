import React from "react"
import {Dialog} from "@material-ui/core"
import { DialogContent, DialogTitle, Button, Typography } from "@mui/material";
import useStyles from './Styles';

export default function Popup(props){
    const {title, children, openPopup, setopenPopup}=props;
    const classestyle=useStyles();
    return (
        <Dialog open={openPopup} maxWidth="md" classes={{paper: classestyle.dialogWrapper}}>
            <DialogTitle>
                <div style={{display: 'flex'}}>
                <Typography variant="h6" component="div" style={{flexGrow: 1}}>
                    {title}
                </Typography>
                <Button color="error" onClick={()=>setopenPopup(false)} variant="contained">
                    X
                </Button>
                </div>
            </DialogTitle>
            <DialogContent>
                {children}
            </DialogContent>
        </Dialog>
    )
}