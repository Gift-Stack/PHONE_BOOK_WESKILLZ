import { useContext } from 'react';
import { Link } from 'react-router-dom';
import UserContext from '../context/user/userContext';

const Navbar = () => {
    const userContext = useContext(UserContext);
    const { isAuthenticated, logout } = userContext;

    const handleLogout = () => logout();
    return (
        <nav className='navbar navbar-light bg-white justify-content-between d-flex align-items-center px-4 px-md-5 mb-4 border-bottom '>
            <a className=' logo' style={{ fontSize: '1.9em' }}>
                Phonebook
            </a>
            {!isAuthenticated ? (
                <Link
                    to='/login'
                    className='navbar-link'
                    style={{ fontWeight: 'bold' }}
                >
                    Login
                </Link>
            ) : (
                <Link
                    className='navbar-link'
                    style={{ fontWeight: 'bold' }}
                    onClick={handleLogout}
                >
                    Logout
                </Link>
            )}
        </nav>
    );
};

export default Navbar;
