import React from 'react'
import './try.css';
 import {Link} from 'react-router-dom';
import { Grid,Paper, Avatar, TextField, Button, Typography } from '@mui/material'
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
const RegistrationForm=()=>{

    const paperStyle={padding :20,height:'70vh',width:280, margin:"20px auto", backgroundColor:'rgba(255,255,255,0.8)'}
    const avatarStyle={backgroundColor:'#1bbd7e'}
    const btnstyle={margin:'8px 0'}
    return(<body className='reg'>
        <br/><br/>  
        <Grid>
            <Paper elevation={10} style={paperStyle}>
                <Grid align='center' >
                     <Avatar style={avatarStyle}><LockOutlinedIcon/></Avatar>
                    <h2>Sign Up</h2>
                </Grid>
                <TextField label='Name' placeholder='Enter Your Name' fullWidth required/><br/><br/>
                <TextField label='Email' placeholder='Enter Your Email' type='email' fullWidth required/><br/><br/>
                <TextField label='Password' placeholder='Enter password' type='password' fullWidth required/><br/><br/>
                <TextField label='Confirm Password' placeholder='Enter password' type='password' fullWidth required/><br/><br/>
                <Link to="/">
                  
                <Button type='submit' color='primary' variant="contained" style={btnstyle} fullWidth>Sign Up</Button>
                  </Link>                
                <Typography > 
                     <Link href="#" >
                </Link>
                </Typography>
            </Paper>
        </Grid>
        </body>
    )
}

export default RegistrationForm;