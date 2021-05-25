import { useState, useContext, useEffect } from 'react';
import UserContext from '../context/user/userContext';
import ContactContext from '../context/contacts/contactContext';

import Loading from '../components/Loading';

import firebase from '../firebase/config';
import Contact from '../components/Contact';

const Phonebook = () => {
    const userContext = useContext(UserContext);
    const { loadUser, loading, user, isAuthenticated } = userContext;
    const contactContext = useContext(ContactContext);

    const { addContact } = contactContext;

    const [contact, setContact] = useState([]);

    useEffect(() => {
        loadUser();
        if (isAuthenticated) {
            firebase
                .firestore()
                .collection('Contact')
                .onSnapshot(snapshot => {
                    const newContact = snapshot.docs.map(doc => ({
                        id: doc.id,
                        ...doc.data(),
                    }));
                    setContact(newContact);
                });
        }

        // eslint-disable-next-line
    }, []);

    const [value, setValue] = useState({
        firstName: '',
        lastName: '',
        phoneAddress: '',
        email: '',
    });
    const [contactCreateStatus, setContactCreateStatus] = useState(false);

    const { firstName, lastName, phoneAddress, email } = value;
    const handleChange = e => {
        setValue({ ...value, [e.target.name]: e.target.value });
    };

    const createContact = () => {
        if (
            firstName !== '' &&
            lastName !== '' &&
            phoneAddress !== '' &&
            email !== ''
        ) {
            addContact({
                firstName,
                lastName,
                phoneNumber: phoneAddress,
                address: email,
            });
            setContactCreateStatus(true);
            setValue({
                firstName: '',
                lastName: '',
                phoneAddress: '',
                email: '',
            });
        } else {
            alert('All fields are important');
        }
    };
    if (loading) {
        return <Loading />;
    } else {
        return (
            <div className='mb-4 mx-4 mx-md-5'>
                <div className='row'>
                    <div className='col-sm-3 text-center mb-3'>
                        <button
                            type='button'
                            className='btn btn-block py-2 mb-2 text-white'
                            data-toggle='modal'
                            data-target='.addContactModal'
                            style={{
                                backgroundColor: '#00955C',
                                fontSize: 'small',
                                width: '100%',
                            }}
                        >
                            + Create contact
                        </button>
                        <button
                            type='button'
                            className='btn btn-block py-2'
                            style={{
                                backgroundColor: '#E5FAF2',
                                fontSize: 'small',
                                width: '100%',
                            }}
                        >
                            Contacts
                        </button>
                    </div>

                    {/* Modal Data Starts */}
                    <div
                        className='modal fade addContactModal'
                        tabindex='-1'
                        role='dialog'
                        aria-labelledby='mySmallModalLabel'
                        aria-hidden='true'
                    >
                        <div className='modal-dialog modal-dialog-centered modal-sm'>
                            <div className='modal-content p-4'>
                                <div className='label contact-label'>
                                    {user.email[0].toUpperCase()}
                                </div>
                                <br />
                                <div className='row mb-3'>
                                    <div className='col-6'>
                                        <input
                                            type='text'
                                            name='firstName'
                                            value={firstName}
                                            onChange={handleChange}
                                            placeholder='First name'
                                            className='form-control'
                                        />
                                    </div>
                                    <div className='col-6'>
                                        <input
                                            type='text'
                                            name='lastName'
                                            value={lastName}
                                            onChange={handleChange}
                                            placeholder='Last name'
                                            className='form-control'
                                        />
                                    </div>
                                </div>
                                <div className='row mb-3'>
                                    <div className='col-12'>
                                        <input
                                            type='text'
                                            name='phoneAddress'
                                            value={phoneAddress}
                                            onChange={handleChange}
                                            placeholder='Phone address'
                                            className='form-control'
                                        />
                                    </div>
                                </div>
                                <div className='row mb-3'>
                                    <div className='col-12'>
                                        <input
                                            type='text'
                                            name='email'
                                            value={email}
                                            onChange={handleChange}
                                            placeholder='Email address'
                                            className='form-control'
                                        />
                                    </div>
                                </div>
                                <button
                                    className='btn btn-block btn-success text-white mb-3'
                                    data-dismiss='modal'
                                    onClick={createContact}
                                >
                                    Create
                                </button>
                                <button
                                    className='btn btn-block border text-secondary'
                                    data-dismiss='modal'
                                >
                                    Cancel
                                </button>
                            </div>
                        </div>
                    </div>
                    {/* Modal Data Ends */}

                    <div
                        className='col-sm-9 border rounded p-3 bg-white'
                        style={{ fontSize: 'small' }}
                    >
                        <table className='w-100 text-left ' id='contact'>
                            <tr className='align-items-center mb-4 border-bottom'>
                                <th className=' pb-2'>Name</th>
                                <th className='pb-2'>Phone number</th>
                                <th className='pb-2'>Email address</th>
                                <th></th>
                            </tr>

                            <p className='my-2' style={{ opacity: 0.5 }}>
                                Contacts ({contact.length})
                            </p>

                            {contact.map(each_contact => (
                                <Contact
                                    key={each_contact.id}
                                    id={each_contact.id}
                                    firstName={each_contact.firstName}
                                    lastName={each_contact.lastName}
                                    address={each_contact.address}
                                    phoneNumber={each_contact.phoneNumber}
                                />
                            ))}
                        </table>
                    </div>
                </div>
            </div>
        );
    }
};

export default Phonebook;
