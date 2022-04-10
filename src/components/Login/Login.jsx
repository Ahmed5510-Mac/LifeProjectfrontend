import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Avatar from '@mui/material/Avatar';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import Button from '@mui/material/Button';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { login, reset } from './../../store/auth/authSlice';
import Spinner from '../Spinner/Spinner';

const Login = ({ handleChange }) => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const { isLoading, user, isSuccess, isError, message } = useSelector((state) => state.auth)

    const [formData, setFormData] = useState({
        customerEmail: '',
        customerPassword: '',
    })

    useEffect(() => {
        if (isError) {
            toast.error(message)
        }
        if (isSuccess || user) {
            navigate('/')
        }
        dispatch(reset())
    }, [user, isSuccess, isError, message, navigate, dispatch])

    const onChange = (e) => {
        setFormData((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value
        }))
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        const userData = {
            customerEmail, customerPassword
        }
        dispatch(login(userData))
    }
    if (isLoading) {
        return <Spinner />
    }

    const { customerEmail, customerPassword } = formData

    return (<>
        <form onSubmit={handleSubmit}>

            <div>
                <label htmlFor="">customerEmail</label>
                <input type="email" name='customerEmail' value={customerEmail} onChange={onChange} />
            </div>
            <div>
                <label htmlFor="">customerPassword</label>
                <input type="text" name='customerPassword' value={customerPassword} onChange={onChange} />
            </div>

            <button type="submit">submit</button>
        </form>
    </>);
}

export default Login;
/*
    const paperStyle = { padding: 20, height: '70vh', width: 300, margin: '0 auto' }
    const btnStyle = { margin: '8px 0' }
    const avatarStyle = { backgroundColor: '#1bbd7e' }
    return (<>
        <Grid>
            <Paper elvation={20} style={paperStyle}>
                <Grid align="center">
                    <Avatar style={avatarStyle}></Avatar>
                    <h2 style={{fontSize:25}}>Sign IN</h2>
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
*/