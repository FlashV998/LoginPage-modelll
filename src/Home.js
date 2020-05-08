import React from "react";
import Menu from "./menu";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Toolbar from "@material-ui/core/Toolbar";

const useStyles = makeStyles(theme => ({

  content: {
    flexGrow: 1,
    padding: theme.spacing(3)
  }
}));



const Home=() => {
    const classes = useStyles();
    return(

    <div class="row">
    
<div class="col-lg-2 col-md-4 "><Menu/></div>
 <div class="col-lg-10 col-md-8 "><main className={classes.content}>
        <Toolbar />
     <Typography paragraph>
        
    <div class="container">
			<div class="row main">
				<div class="main-login main-center">
				<h5>My-Profile</h5>
					<form class="" method="post" action="#">
						
						<div class="form-group">
							<label for="name" class="cols-sm-2 control-label">Your Name</label>
							<div class="cols-sm-10">
								<div class="input-group">
									<span class="input-group-addon"><i class="fa fa-user fa" aria-hidden="true"></i></span>
									<input type="text" class="form-control" name="name" id="name"  placeholder="Enter your Name"/>
								</div>
							</div>
						</div>

						<div class="form-group">
							<label for="dob" class="cols-sm-2 control-label">Your Date-Of-Birth</label>
							<div class="cols-sm-10">
								<div class="input-group">
									<span class="input-group-addon"><i class="fa fa-envelope fa" aria-hidden="true"></i></span>
									<input type="text" class="form-control" name="dob" id="dob"  placeholder="Enter your DOB"/>
								</div>
							</div>
						</div>

						<div class="form-group">
							<label for="profession" class="cols-sm-2 control-label">Profession</label>
							<div class="cols-sm-10">
								<div class="input-group">
									<span class="input-group-addon"><i class="fa fa-users fa" aria-hidden="true"></i></span>
									<input type="text" class="form-control" name="profession" id="profession"  placeholder="Enter your Profession"/>
								</div>
							</div>
						</div>

						<div class="form-group">
							<label for="desig" class="cols-sm-2 control-label">Designation</label>
							<div class="cols-sm-10">
								<div class="input-group">
									<span class="input-group-addon"><i class="fa fa-lock fa-lg" aria-hidden="true"></i></span>
									<input type="text" class="form-control" name="desig" id="desig"  placeholder="Enter your Designation"/>
								</div>
							</div>
						</div>

						

						<div class="form-group ">
							<a href="#" target="_blank" type="button" id="button" class="btn btn-primary btn-lg btn-block login-button">Register</a>
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

export default Home;
