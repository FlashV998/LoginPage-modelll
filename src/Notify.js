import React from "react";
import Switch from '@material-ui/core/Switch';
import Menu from "./menu";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Toolbar from "@material-ui/core/Toolbar";

function Notify(){

const useStyles = makeStyles(theme => ({

  content: {
    flexGrow: 1,
    padding: theme.spacing(3)
  }
}));
const classes = useStyles();




  const [state, setState] = React.useState({
    checkedA: false,checkedB: false,checkedC: false,checkedD: false
    
  });

  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };
    return(
<div class="row">
    
<div class="col-lg-2 col-md-4 "><Menu/></div>
 <div class="col-lg-10 col-md-8 "><main className={classes.content}>
        <Toolbar />
     <Typography paragraph>

    
    <div class="container">
			<div class="row-lg-8 main">
				<div class="main-login main-center">
				
					<div class="col-lg-8 dis">
                    <h6>Send Alerts</h6>
                    </div>
                    <div class="col-lg-4 dis">
                        <Switch
                        checked={state.checkedA}
                        onChange={handleChange}
                        name="checkedA"
                        inputProps={{ 'aria-label': 'secondary checkbox' }}
                            />
                    </div>
			
            </div>
            </div>
            
            	<div class="row-lg-8 main ">
				<div class="main-login main-center">
				
					<div class="col-lg-8 dis">
                    <h6>Succeed Tasks Alerts</h6>
                    </div>
                    <div class="col-lg-4 dis">
                        <Switch
                        checked={state.checkedB}
                        onChange={handleChange}
                        name="checkedB"
                        inputProps={{ 'aria-label': 'secondary checkbox' }}
                            />
                    </div>
		
            </div>
            </div>
            

            	<div class="row-lg-8 main">
				<div class="main-login main-center">
				
					<div class="col-lg-8 dis">
                    <h6>Failed Tasks Alerts</h6>
                    </div>
                    <div class="col-lg-4 dis">
                        <Switch
                        checked={state.checkedC}
                        onChange={handleChange}
                        name="checkedC"
                        inputProps={{ 'aria-label': 'secondary checkbox' }}
                            />
                    </div>
			
            </div>
            </div>
            

            	<div class="row-lg-8 main">
				<div class="main-login main-center">
				
					<div class="col-lg-8 dis">
                    <h6>No Alerts</h6>
                    </div>
                    <div class="col-lg-4 dis">
                        <Switch
                        checked={state.checkedD}
                        onChange={handleChange}
                        name="checkedD"
                        inputProps={{ 'aria-label': 'secondary checkbox' }}
                            />
                    </div>
			
            </div>
            </div>
            
            
           

    
    </div>
    </Typography>
             </main>

    </div>
    </div>      

);
}
export default Notify;


