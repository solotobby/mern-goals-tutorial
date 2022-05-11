// import {useState, useEffect} from 'react'
// import {useSelector, useDispatch} from 'react-redux'
// import {useNavigationType, userNavigate} from 'react-router-dom'
// import {toast} from 'react-toastify'
// import {FaUser} from 'react-icons/fa'
// import {register, reset} from '../features/auth/authSlice'
// import Spinner from '../components/Spinner'


// function Register() {
//     const [formData, setFormData] = useState({
//         name: '',
//         email: '',
//         password: '',
//         password2: ''
//     })

//     const { name, email, password, password2 } = formData
    
//     const navigate = useNavigate()

//     const dispatch = useDispatch()

//     const {user, isLoading, isError, isSuccess, message} 
//     = useSelector((state) = state.auth) 

//     useEffect(() => {
//         if(isError)
//         {
//             toast.error(message)
//         }

//         if(isSuccess || user)
//         {
//             navigate('/')
//         }

//         dispatch(reset())
//     }, [user, isError, isSuccess, message, navigate, dispatch])
//     const onChange = (e) => {
//         setFormData((prevState) => ({
//             ...prevState, ///this spread the state to other textfield 
//             [e.target.name]: e.target.value,
//         }))
//     }

//     const onSubmit = (e) => {
//         e.preventDefault()

//         if(password !== password2)
//         {
//             toast.error('Password do not match')
//         }else{
//             const userData = {
//                 name,
//                 email,
//                 password
//             }

//             dispatch(register(userData))
//         }
//     }

//     if(isLoading){
//         return <Spinner />
//     }

//   return <>
//     <section className='heading'>
//         <h1>
//             <FaUser /> Register
//         </h1>
//         <p>Please create an acc account</p>
//     </section>
//     <section className='form'>
//         <form onSubmit={onSubmit}>
//             <div className='form-group'>
//                 <input 
//                     type="text" 
//                     className='form-control' 
//                     name='name'
//                     id='name' 
//                     value={name} 
//                     placeholder='Enter your name' 
//                     onChange={onChange}
//                 />
//             </div>
//             <div className='form-group'>
//                 <input 
//                     type="email" 
//                     className='form-control'
//                     name='email' 
//                     id='email' 
//                     value={email} 
//                     placeholder='Enter your email' 
//                     onChange={onChange}
//                 />
//             </div>
//             <div className='form-group'>
//                 <input 
//                     type="password" 
//                     className='form-control' 
//                     name='password'
//                     id='password' 
//                     value={password} 
//                     placeholder='Enter password' 
//                     onChange={onChange}
//                 />
//             </div>
//             <div className='form-group'>
//                 <input 
//                     type="password" 
//                     className='form-control' 
//                     name='password2'
//                     id='password2' 
//                     value={password2} 
//                     placeholder='Confirm password' 
//                     onChange={onChange}
//                 />
//             </div>

//             <div className="form-group">
//                 <button type='submit' className='btn btn-block'>
//                     Submit
//                 </button>
//             </div>
//         </form>    
//     </section>
//   </>
// }

// export default Register
// ----------------------------------------





import {useState, useEffect} from 'react'
import {useSelector, useDispatch} from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import {FaUser} from 'react-icons/fa'
import { register, reset } from '../features/auth/authSlice'
import Spinner from '../components/Spinner'


function Register() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        password2: '',
    })

    const { name, email, password, password2 } = formData
    
    const navaigate = useNavigate()
    const dispatch = useDispatch()

    const {user, isLoading, isError, isSuccess, message} = useSelector(
        (state) => state.auth
    ) 
    //handles the behavior based on the activity of the user
    useEffect(() => {
        if(isError){
            toast.error(message)
        }

        if(isSuccess || user){
            navaigate('/')
        }
        dispatch(reset())

    },[user, isError, isSuccess, message, navaigate, dispatch])

    const onChange = (e) => {
        setFormData((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value,
        }))
    }


    const onSubmit= (e) => {
        e.preventDefault()

        if(password !== password2)
        {
            toast.error('Password do not match')
        }else{
            ///register the user
            const userData = {
                name, email, password
            }

            dispatch(register(userData))
        }
    }

    if(isLoading){
        return <Spinner></Spinner>
    }

    return <>
        <section className='heading'> 
        <h1><FaUser /> Register</h1>
        <p> Create User account </p>
        </section>

        <section className='form'>
            <form onSubmit={onSubmit}>
                <div className='form-group'>
                    <input 
                    type="text" 
                    className='form-control' 
                    name='name'
                    id='name' 
                    value={name} 
                    placeholder='Enter your name' 
                    onChange={onChange}
                    />
                </div>
                <div className='form-group'>
                <input 
                    type="email" 
                    className='form-control'
                    name='email' 
                    id='email' 
                    value={email} 
                    placeholder='Enter your email' 
                    onChange={onChange}
                />
            </div>
            <div className='form-group'>
                <input 
                    type="password" 
                    className='form-control' 
                    name='password'
                    id='password' 
                    value={password} 
                    placeholder='Enter password' 
                    onChange={onChange}
                />
            </div>
            <div className='form-group'>
                <input 
                    type="password" 
                    className='form-control' 
                    name='password2'
                    id='password2' 
                    value={password2} 
                    placeholder='Confirm password' 
                    onChange={onChange}
                />
            </div>
            <div className="form-group">
                <button type='submit' className='btn btn-block'>
                    Submit
                </button>
            </div>
            </form>
            
        </section>
    </>
}

export default Register