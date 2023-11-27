
import React from 'react';  
import './try.css';
import {Link} from 'react-router-dom';
import { Grid,Paper, Avatar, TextField, Button, Typography } from '@mui/material'
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
const Login=()=>{

    const paperStyle={padding:60,height:'70vh',width:280,alignItems:'center' ,backgroundColor:'rgba(255,255,255,0.8)'}
    const avatarStyle={backgroundColor:'#1bbd7e'}
    const btnstyle={margin:'8px 0'}
    return(<body className='login'>
        <br/><br/>
        <Grid align='center'>
            <Paper elevation={10} style={paperStyle}>
                <Grid align='center' >
                     <Avatar style={avatarStyle}><LockOutlinedIcon/></Avatar>
                    <h2>Sign In</h2>
                </Grid>
                <TextField label='Username' placeholder='Enter username' fullWidth required/><br/><br/>
                <TextField label='Password' placeholder='Enter password' type='password' fullWidth required/>
                <FormControlLabel
                    control={
                    <Checkbox
                        name="checkedB"
                        color="primary"
                    />
                    }
                    label="Remember me"
                 />
                <Link to="/">
                <Button type='submit' color='primary' variant="contained" style={btnstyle} fullWidth>Sign in</Button>
                </Link>
                <Typography >
                     <Link href="#" >
                        Forgot password ?
                </Link>
                </Typography>
            </Paper>
        </Grid>
        </body>
    )
}
export default Login;