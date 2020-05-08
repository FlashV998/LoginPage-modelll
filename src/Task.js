import React from "react";
import Menu from "./menu";
import Typography from "@material-ui/core/Typography";

import Toolbar from "@material-ui/core/Toolbar";

import Checkbox from '@material-ui/core/Checkbox';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import InputBase from '@material-ui/core/InputBase';

 function Task(){
 
 const [checked, setChecked] = React.useState(false);

  const handleChange = (event) => {
    setChecked(event.target.checked);
  };
 

const BootstrapInput = withStyles((theme) => ({
  root: {
    'label + &': {
      marginTop: theme.spacing(3),
    },
  },
  input: {
    borderRadius: 4,
    position: 'relative',
    backgroundColor: theme.palette.background.paper,
    border: '1px solid #ced4da',
    fontSize: 16,
    width:"90px",
    padding: '10px 16px 10px 16px',
    transition: theme.transitions.create(['border-color', 'box-shadow']),
    // Use the system font instead of the default Roboto font.
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
    '&:focus': {
      borderRadius: 4,
      borderColor: '#80bdff',
      boxShadow: '0 0 0 0.2rem rgba(0,123,255,.25)',
    },
  },
}))(InputBase);

const useStyles = makeStyles((theme) => ({
  margin: {
    margin: theme.spacing(1),
  },
}));



  const classes = useStyles();
  const [age, setAge] = React.useState('');
  const handleChange1 = (event) => {
    setAge(event.target.value);
  };


    return(
        <div class="row">
    
<div class="col-lg-2 col-md-4 "><Menu/></div>
 <div class="col-lg-10 col-md-8 "><main className={classes.content}>
        <Toolbar />
     <Typography paragraph>
    <div class="container-xl">
			<div class="row main">
				<div class="main-login main-center">
				<h5>Tasks_1</h5>
					<form class="" method="post" action="#">
						
						<div class="form-group">
                        <div class="row">
							
                            <div class="cols-sm-6 d-inline-flex p-2 bd-highlight font-weight-bold">Source Name</div>
                            
                            <div class="cols-sm-4">
								<FormControl className={classes.margin}>
                                   
                                    <Select
                                    labelId="demo-customized-select-label"
                                    id="demo-customized-select"
                                    value={age}
                                    onChange={handleChange1}
                                    input={<BootstrapInput />}
                                    >
                                    <MenuItem value="">
                                        <em>None</em>
                                    </MenuItem>
                                    <MenuItem value={10}>Ten</MenuItem>
                                    <MenuItem value={20}>Twenty</MenuItem>
                                    <MenuItem value={30}>Thirty</MenuItem>
                                    </Select>
                                </FormControl>
                              
							</div>
						</div>


                    </div>


                    <div class="form-group">
                        <div class="row">
							
                            <div class="cols-sm-8 d-inline-flex p-2 bd-highlight font-weight-bold">Enable Logging</div>
                            
                            <div class="cols-sm-4 d-inline-flex p-2 bd-highlight font-weight-bold">
                            <Checkbox
                                checked={checked}
                                onChange={handleChange}
                                inputProps={{ 'aria-label': 'primary checkbox' }}
                            />
					      	</div>
						</div>


                </div>



                        <div class="form-group">
                            <div class="row">
                                
                                <div class="cols-sm-8 d-inline-flex p-2 bd-highlight font-weight-bold">Provide SQL</div>
                                
                                <div class="cols-sm-4 d-inline-flex p-2 bd-highlight font-weight-bold">
                                
                                <textarea name="content"  placeholder="Provide SQL Here..." rows="3" />
                                </div>
                            </div>


                        </div>

                 <div class="form-group">
                        <div class="row">
							
                            <div class="cols-sm-6 d-inline-flex p-2 bd-highlight font-weight-bold">Target Result</div>
                            
                            <div class="cols-sm-4">
								<FormControl className={classes.margin}>
                                   
                                    <Select
                                    labelId="demo-customized-select-label"
                                    id="demo-customized-select"
                                    value={age}
                                    onChange={handleChange1}
                                    input={<BootstrapInput />}
                                    >
                                    <MenuItem value="">
                                        <em>None</em>
                                    </MenuItem>
                                    <MenuItem value={10}>Completed</MenuItem>
                                    <MenuItem value={20}>Pending</MenuItem>
                                    <MenuItem value={30}>Incomplete</MenuItem>
                                    </Select>
                                </FormControl>
                              
							</div>

              </div>
              </div>
                            <div class="d-flex justify-content-around  ">
                           <div > <button type="button" class="btn btn-danger ">Cancel</button> </div>
                          <div> <button type="button" class="btn btn-success">Submit</button></div>
                           <div > <button type="button" class="btn btn-light ">Validate</button></div> 
                            </div>
             
                  </form>


			
</div>
</div>
</div>  
</Typography>
             </main>

    </div>
    </div>      
);
}
export default Task;


    