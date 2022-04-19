import {useState, useEffect} from 'react'
import {FaSignInAlt} from 'react-icons/fa'
function Login() {
    const [formData, setFormData] = useState({
        email: '',
        password: '',
    })

    const { name, email, password, password2 } = formData
    const onChange = (e) => {
        setFormData((prevState) => ({
            ...prevState, ///this spread the state to other textfield 
            [e.target.name]: e.target.value,
        }))
    }

    const onSubmit = (e) => {
        e.preventDefault()
    }
  return <>
    <section className='heading'>
        <h1>
            <FaSignInAlt /> Login
        </h1>
        <p>Login into account</p>
    </section>
    <section className='form'>
        <form onSubmit={onSubmit}>
            
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

            <div className="form-group">
                <button type='submit' className='btn btn-block'>
                    Login
                </button>
            </div>
        </form>    
    </section>
  </>
}

export default Login