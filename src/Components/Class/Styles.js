import {makeStyles} from '@material-ui/core/styles';
const useStyles = makeStyles((theme) =>({
  container:{
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8,0,6)
  },
  icon:{
    marginRight: '20px',
  },
  button:{
    marginTop: '40px',
  },
  cardGrid:{
    padding: '20px 0 0 0'
  },
  card:{
    height:"100%",
    display:'flex',
    flexDirection:'column'
  },
  cardMedia:{
    paddingTop:'56.25%',
  },
  cardContent:{
    flexGrow: 1,
  },
  footer:{
    backgroundColor: theme.palette.background.paper,
    padding:'50px 0'
  },
  dialogWrapper:{
    width:"40%",
    padding:theme.spacing(2),
    position:'absolute',
    top: theme.spacing(5)
  },
  submit:{
    margin: '10px',
  },
}))

export default useStyles;