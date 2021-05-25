import { useState, useContext, useEffect } from 'react';
import Loading from '../components/Loading';
import UserContext from '../context/user/userContext';

const Login = props => {
    const userContext = useContext(UserContext);
    const { login, isAuthenticated, loading } = userContext;

    useEffect(() => {
        if (isAuthenticated) {
            props.history.push('/');
        }
    }, [isAuthenticated, props.history]);

    const [value, setValue] = useState({
        email: '',
        password: '',
    });

    const { email, password } = value;
    const handleChange = e => {
        setValue({ ...value, [e.target.name]: e.target.value });
    };
    const handleLogin = e => {
        e.preventDefault();
        if (email === '' || password === '') {
            alert('Please fill up all fields');
        }
        login({ email, password });
        setValue({
            email: '',
            password: '',
        });
    };
    if (loading) {
        return <Loading />;
    } else
        return (
            <div className='container'>
                <div className='row justify-content-center mx-2'>
                    <div className='col-sm-6 col-lg-4 px-3 border rounded bg-white'>
                        <h6
                            className='text-center mt-3'
                            style={{ fontWeight: 'bold' }}
                        >
                            Welcome to Phonebook!
                        </h6>
                        <form className='my-4'>
                            <div className='form-group mb-3'>
                                <label>Email address</label>
                                <input
                                    type='email'
                                    name='email'
                                    value={email}
                                    onChange={handleChange}
                                    placeholder='Enter email address'
                                    className='form-control'
                                />
                            </div>
                            <div className='form-group mb-3'>
                                <label>Password</label>
                                <input
                                    type='password'
                                    name='password'
                                    value={password}
                                    onChange={handleChange}
                                    placeholder='Enter password'
                                    className='form-control'
                                />
                            </div>
                            <button
                                type='submit'
                                className='btn form-control text-white'
                                style={{ backgroundColor: '#00955C' }}
                                onClick={handleLogin}
                            >
                                Login
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        );
};

export default Login;
