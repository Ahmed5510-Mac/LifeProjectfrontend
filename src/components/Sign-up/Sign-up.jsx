import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { register, reset } from './../../store/auth/authSlice';
import Spinner from '../Spinner/Spinner';
import "./sign-up.css"
import { useFormik } from 'formik';
import * as Yup from 'yup';

const validationSchema = Yup.object({
    fullName: Yup.string().required('Please Enter your Fullname'),
    customerPhone: Yup.string().required('Please Enter your Phone'),
    customerEmail: Yup.string().required('Please Enter your Email').email('Invalid email format'),
    customerPassword: Yup.string().required('Please Enter your Password'),
    confirmPassword: Yup.string().required('Please confirm your Password'),
    // customerTotalPurchase: Yup.string().required('Please Enter your Purchase'),
    customerAddresses: Yup.string().required('Please Enter your Address'),
    //  Orders: Yup.string().required('Please Enter your Orders'),
    // myFavorite: Yup.string().required('Please Enter your favourite'),
    role: Yup.string().required('Please Enter your Role'),
})

const SignUP = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const { isLoading, user, isSuccess, isError, message } = useSelector((state) => state.auth)

    const formik = useFormik({
        initialValues: {
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
        },
        onSubmit: values => {
            console.log('asdasdd')
            const userData = {
                fullName: values.fullName,
                customerPhone: values.customerPhone,
                customerEmail: values.customerEmail,
                customerPassword: values.customerPassword,
                confirmPassword: values.confirmPassword,
                customerTotalPurchase: values.customerTotalPurchase,
                customerAddresses: values.customerAddresses,
                Orders: values.Orders,
                cart: values.cart,
                myFavorite: values.myFavorite,
                role: values.role,
            }
            dispatch(register(userData))

            if (isError) {
                console.log("error mesage")
            }
            if (isSuccess || user) {
                navigate('/')
            }
            // dispatch(reset())
        },
        validationSchema,
    })
    /*
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
        })*/

    useEffect(() => {
        if (isError) {
            //  toast.error(message)
           // return 'pleasesfle'
        }
        if (isSuccess || user) {
            navigate('/')
        }
       dispatch(reset())
    }, [user, isSuccess, isError, message, navigate, dispatch])

    /*
    const onChange = (e) => {
        setFormData((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value
        }))
    }*/

    /*
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
    }*/

    if (isLoading) {
        return <Spinner />
    }
    /*
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
*/
    return (<>
        <form onSubmit={formik.handleSubmit} className='continer p-5 text-center  mt-3 sign-Up'>
            <div className='d-flex align-items-center justify-content-evenly w-100'>
                <label htmlFor="fullName"><i className="fa-solid border p-2 rounded-circle fa-user" role="button"></i></label>
                <input className='form-control w-75 ' placeholder='Enter Your fullname' type="text" name='fullName'
                    {...formik.getFieldProps('fullName')} />
            </div>
            {formik.touched.fullName && formik.errors.fullName ? <div className='errorForm'>{formik.errors.fullName}</div> : null}

            <div className='d-flex align-items-center justify-content-evenly w-100'>
                <label htmlFor="customerPhone"><i className="fa-solid fa-phone border p-2 rounded-circle " role="button"></i></label>
                <input className='form-control w-75 ' type="text" placeholder='Enter Your Phonenumber' name='customerPhone'
                    {...formik.getFieldProps('customerPhone')} />
            </div>
            {formik.touched.customerPhone && formik.errors.customerPhone ? <div className='errorForm'>{formik.errors.customerPhone}</div> : null}

            <div className='d-flex align-items-center justify-content-evenly w-100'>
                <label htmlFor="customerEmail"><i className="fa-solid fa-at border p-2 rounded-circle  " role="button"></i></label>
                <input className='form-control w-75 ' type="email" placeholder='Enter Your Email' name='customerEmail'
                    {...formik.getFieldProps('customerEmail')} />
            </div>
            {formik.touched.customerEmail && formik.errors.customerEmail ? <div className='errorForm'>{formik.errors.customerEmail}</div> : null}

            <div className='d-flex align-items-center justify-content-evenly w-100'>
                <label htmlFor="customerPassword"><i className="fa-solid fa-unlock-keyhole border p-2 rounded-circle " role="button"></i></label>
                <input className='form-control w-75 ' type="password" placeholder='Enter Your Password' name='customerPassword'
                    {...formik.getFieldProps('customerPassword')} />
            </div>
            {formik.touched.customerPassword && formik.errors.customerPassword ? <div className='errorForm'>{formik.errors.customerPassword}</div> : null}

            <div className='d-flex align-items-center justify-content-evenly w-100'>
                <label htmlFor="confirmPassword"><i className="fa-solid fa-unlock-keyhole border p-2 rounded-circle  " role="button"></i></label>
                <input className='form-control w-75 ' type="password" placeholder='Confirm Your Password' name='confirmPassword'
                    {...formik.getFieldProps('confirmPassword')} />
            </div>
            {formik.touched.confirmPassword && formik.errors.confirmPassword ? <div className='errorForm'>{formik.errors.confirmPassword}</div> : null}

            <div className='d-flex align-items-center justify-content-evenly w-100'>
                <label htmlFor="role"><i className="fa-solid border p-2 rounded-circle fa-user  " role="button"></i></label>
                <input className='form-control w-75 ' type="text" placeholder='Enter Your Role' name='role'
                    {...formik.getFieldProps('role')} />
            </div>
            {formik.touched.role && formik.errors.role ? <div className='errorForm'>{formik.errors.role}</div> : null}

            <div className='d-flex align-items-center justify-content-evenly w-100'>
                <label htmlFor="customerAddresses"><i className="fa-solid fa-location-dot border rounded-circle p-2  " role="button"></i></label>
                <input className='form-control w-75' type="text" placeholder='Enter Your Address' name='customerAddresses'
                    {...formik.getFieldProps('customerAddresses')} />
            </div>
            {formik.touched.customerAddresses && formik.errors.customerAddresses ? <div className='errorForm'>{formik.errors.customerAddresses}</div> : null}

            <button className='btnSubmit btn mt-3' type="submit">submit <i className="fa-solid fa-clipboard-list"></i></button>
        </form>
    </>);
}

export default SignUP;
