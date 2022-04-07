import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Avatar from '@mui/material/Avatar';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import Button from '@mui/material/Button';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';

const Login = ({ handleChange }) => {
    const paperStyle = { padding: 20, height: '70vh', width: 300, margin: '0 auto' }
    const btnStyle = { margin: '8px 0' }
    const avatarStyle = { backgroundColor: '#1bbd7e' }
    return (<>
        <Grid>
            <Paper elvation={20} style={paperStyle}>
                <Grid align="center">
                    <Avatar style={avatarStyle}></Avatar>
                    <h2>Sign IN</h2>
                </Grid>
                <TextField label="Username" placeholder='Enter username' fullWidth required />
                <TextField label="Password" placeholder='Enter password' type="password" fullWidth required />
                <FormControlLabel
                    control={
                        <Checkbox
                            name="checkedB"
                            color="primary"
                        />
                    }
                    label="Remember me"
                />
                <Button type="submit" color="primary" variant="contained" style={btnStyle} fullWidth>Sign in</Button>
                <Typography>
                    <Link href="#">
                        Forget Password ?
                    </Link>
                </Typography>
                <Typography>Do you have an account ?
                    <Link href="#" onClick={() => handleChange("event", 1)}>
                        Sign Up
                    </Link>
                </Typography>
            </Paper>
        </Grid>
    </>);
}

export default Login;