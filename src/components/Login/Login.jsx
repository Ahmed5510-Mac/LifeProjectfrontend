import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { login, reset } from './../../store/auth/authSlice';
import Spinner from '../Spinner/Spinner';
import "./login.css"

const Login = ({ handleChange }) => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const { isLoading, user, isSuccess, isError, message } = useSelector((state) => state.auth)

    const [formData, setFormData] = useState({
        email: '',
        password: ''
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
            email, password
        }
        dispatch(login(userData))
    }
    if (isLoading) {
        return <Spinner />
    }

    const { email, password } = formData

    return (<>
        <form className='continer p-5 mt-3 sign-in text-center' onSubmit={handleSubmit}>
            <div className='d-flex align-items-center justify-content-center w-100 '>
                <label htmlFor="userName"><i className="fa-solid border p-2 rounded-circle fa-user"></i></label>
                <input required placeholder='userName' className='form-control w-100 ms-2' type="email" name='email' value={email} onChange={onChange} />
            </div>
            <div className='d-flex justify-content-center align-items-center w-100 mt-2' >
                <label htmlFor="Passoword"><i className="fa-solid fa-unlock-keyhole border p-2 rounded-circle"></i></label>
                <input required placeholder='Passoword' className='form-control  ms-2' type="text" name='password' value={password} onChange={onChange} />
            </div>

            <button className='btn btn-lg text-white mt-3' type="submit">Login <i class="fa-solid fa-right-to-bracket"></i></button><br />
        </form>
    </>);
}

export default Login;
