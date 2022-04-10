import Checkbox from '@mui/material/Checkbox';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormLabel from '@mui/material/FormLabel';
import FormControl from '@mui/material/FormControl';
import Button from '@mui/material/Button';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { register, reset } from './../../store/auth/authSlice';
import Spinner from '../Spinner/Spinner';

const SignUP = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const { isLoading, user, isSuccess, isError, message } = useSelector((state) => state.auth)

    const [formData, setFormData] = useState({
        fullName: '',
        customerPhone: '',
        customerEmail: '',
        customerPassword: '',
        confirmPassword: '',
        customerTotalPurchase: '',
        customerAddresses: '',
        Orders: '',
        cart: '',
        myFavorite: '',
        role: '',
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
        if (customerPassword !== confirmPassword) {
            toast.error('Passwords not match')
        } else {
            const userData = {
                fullName, 
                customerPhone,
                customerEmail, 
                customerPassword,
                confirmPassword,
                customerTotalPurchase,
                role,
                customerAddresses,
                Orders,
                cart,
                myFavorite,
            }
            dispatch(register(userData))
        }
    }

    if (isLoading) {
        return <Spinner />
    }
    const { fullName,
         customerPhone,
        customerEmail,
        customerPassword, 
        confirmPassword,
        customerTotalPurchase, 
        role , 
        customerAddresses,
        Orders,
        cart,
        myFavorite} = formData

    return (<>
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="">fullName</label>
                <input type="text" name='fullName' value={fullName} onChange={onChange} />
            </div>
            <div>
                <label htmlFor="">customerPhone</label>
                <input type="number" name='customerPhone' value={customerPhone} onChange={onChange} />
            </div>
            <div>
                <label htmlFor="">customerEmail</label>
                <input type="email" name='customerEmail' value={customerEmail} onChange={onChange} />
            </div>
            <div>
                <label htmlFor="">customerPassword</label>
                <input type="text" name='customerPassword' value={customerPassword} onChange={onChange} />
            </div>
            <div>
                <label htmlFor="">confirmPassword</label>
                <input type="text" name='confirmPassword' value={confirmPassword} onChange={onChange} />
            </div>
            <div>
                <label htmlFor="">role</label>
                <input type="text" name='role' value={role} onChange={onChange} />
            </div>
            <div>
                <label htmlFor="">customerAddresses</label>
                <input type="text" name='customerAddresses' value={customerAddresses} onChange={onChange} />
            </div>
            <div>
                <label htmlFor="">Orders</label>
                <input type="text" name='Orders' value={Orders} onChange={onChange} />
            </div>
            <div>
                <label htmlFor="">cart</label>
                <input type="text" name='cart' value={cart} onChange={onChange} />
            </div>
            <div>
                <label htmlFor="">customerTotalPurchase</label>
                <input type="number" name='customerTotalPurchase' value={customerTotalPurchase} onChange={onChange} />
            </div>
            <div>
                <label htmlFor="">myFavorite</label>
                <input type="text" name='myFavorite' value={myFavorite} onChange={onChange} />
            </div>
            <button type="submit">submit</button>
        </form>

    </>);
}

export default SignUP;

/*
  const paperStyle = { padding: 10, width: 300, margin: "0 auto" }
    const headerStyle = { margin: 0, fontSize: 25 }
    const avatarStyle = { backgroundColor: '#1bbd7e' }
    const marginTop = { marginTop: 0 }
---------------------------------
   <Grid>
            <Paper style={paperStyle}>
                <Grid align='center'>
                    <Avatar style={avatarStyle}>

                    </Avatar>
                    <h2 style={headerStyle}>Sign Up</h2>
                    <Typography variant='caption' gutterBottom>Please fill this form to create an account !</Typography>
                </Grid>
                <form>
                    <TextField fullWidth label='Name' placeholder="Enter your name" />
                    <TextField fullWidth label='Email' placeholder="Enter your email" />
                    <FormControl component="fieldset" style={marginTop}>
                        <FormLabel component="legend">Gender</FormLabel>
                        <RadioGroup aria-label="gender" name="gender" style={{ display: 'initial' }}>
                            <FormControlLabel value="female" control={<Radio />} label="Female" />
                            <FormControlLabel value="male" control={<Radio />} label="Male" />
                        </RadioGroup>
                    </FormControl>
                    <TextField fullWidth label='Phone Number' placeholder="Enter your phone number" />
                    <TextField fullWidth label='Password' placeholder="Enter your password" />
                    <TextField fullWidth label='Confirm Password' placeholder="Confirm your password" />
                    <FormControlLabel
                        control={<Checkbox name="checkedA" />}
                        label="I accept "
                    />
                    <Button type='submit' variant='contained' color='primary'>Sign up</Button>
                </form>
            </Paper>
        </Grid>

*/