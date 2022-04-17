import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { register, reset } from './../../store/auth/authSlice';
import Spinner from '../Spinner/Spinner';
import "./sign-up.css"

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
          //  toast.error(message)
          return'pleasesfle'
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
        <form onSubmit={handleSubmit} className='continer p-5 text-center  mt-3 sign-Up'>
            <div className='d-flex align-items-center justify-content-evenly w-100'>
            <label htmlFor="userName"><i className="fa-solid border p-2 rounded-circle fa-user" role="button"></i></label>
                <input required className='form-control w-75 ' placeholder='Enter Your fullname' type="text" name='fullName' value={fullName} onChange={onChange} />
            </div>
            <div className='d-flex align-items-center justify-content-evenly w-100'>
            <label htmlFor="userName"><i class="fa-solid fa-phone border p-2 rounded-circle " role="button"></i></label>
                <input required className='form-control w-75 'type="number" placeholder='Enter Your Phonenumber'  name='customerPhone' value={customerPhone} onChange={onChange} />
            </div>
            <div className='d-flex align-items-center justify-content-evenly w-100'>
            <label htmlFor="userName"><i class="fa-solid fa-at border p-2 rounded-circle  " role="button"></i></label>
                <input required className='form-control w-75 'type="email" placeholder='Enter Your Email' name='customerEmail' value={customerEmail} onChange={onChange} />
            </div>
            <div className='d-flex align-items-center justify-content-evenly w-100'>
            <label htmlFor="Passoword"><i className="fa-solid fa-unlock-keyhole border p-2 rounded-circle " role="button"></i></label>
                <input required className='form-control w-75 'type="text" placeholder='Enter Your Password' name='customerPassword' value={customerPassword} onChange={onChange} />
            </div>
            <div className='d-flex align-items-center justify-content-evenly w-100'>
            <label htmlFor="Passoword"><i className="fa-solid fa-unlock-keyhole border p-2 rounded-circle  " role="button"></i></label>
                <input required className='form-control w-75 'type="text" placeholder='Confirm Your Password' name='confirmPassword' value={confirmPassword} onChange={onChange} />
            </div>
            <div className='d-flex align-items-center justify-content-evenly w-100'>
            <label htmlFor="userName"><i className="fa-solid border p-2 rounded-circle fa-user  " role="button"></i></label>
                <input required className='form-control w-75 'type="text" placeholder='Enter Your Role' name='role' value={role} onChange={onChange} />
            </div>
            <div className='d-flex align-items-center justify-content-evenly w-100'>
            <label htmlFor="userName"><i className="fa-solid fa-location-dot border rounded-circle p-2  " role="button"></i></label>
                <input required className='form-control w-75'type="text" placeholder='Enter Your Address' name='customerAddresses' value={customerAddresses} onChange={onChange} />
            </div>
            <button className='btnSubmit btn mt-3' type="submit">submit <i class="fa-solid fa-clipboard-list"></i></button>
        </form>
        
    </>);
}

export default SignUP;
