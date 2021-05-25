import { useState } from 'react';
import { HiOutlinePencil } from 'react-icons/hi';
import { VscTrash } from 'react-icons/vsc';

const Contact = ({ id, firstName, lastName, address, phoneNumber }) => {
    const [showIcons, setShowIcons] = useState(false);
    return (
        <tr
            className='py-4 my-2'
            data-toggle='modal'
            data-target={`#${id}`}
            onMouseEnter={() => setShowIcons(true)}
            onMouseLeave={() => setShowIcons(false)}
        >
            <td className='py-2 d-inline-block truncate'>
                <span className='label'>
                    {firstName.charAt(0).toUpperCase()}
                </span>{' '}
                {firstName.charAt(0).toUpperCase() + firstName.substring(1)}{' '}
                {lastName.charAt(0).toUpperCase() + lastName.substring(1)}
            </td>
            <td className='py-2'>{phoneNumber}</td>
            <td className='py-2 truncate'>{address}</td>
            <td className='py-2 '>
                {showIcons && (
                    <div>
                        <HiOutlinePencil
                            className='update'
                            data-toggle='edit-modal'
                            data-target={`#${id}1`}
                        />
                        _ <VscTrash />
                    </div>
                )}
            </td>

            {/* Edit Modal Starts */}

            <div
                className='modal fade'
                id={`#${id}1`}
                tabindex='-1'
                role='dialog'
                aria-labelledby='mySmallModalLabel'
                aria-hidden='true'
            >
                <div className='modal-dialog modal-dialog-centered modal-sm'>
                    <div className='modal-content p-4'>
                        <div className='label contact-label'>
                            {firstName[0].toUpperCase()}
                        </div>
                        <br />
                        <div className='row mb-3'>
                            <div className='col-6'>
                                <input
                                    type='text'
                                    name='firstName'
                                    value={firstName}
                                    // onChange={handleChange}
                                    placeholder='First name'
                                    className='form-control'
                                />
                            </div>
                            <div className='col-6'>
                                <input
                                    type='text'
                                    name='lastName'
                                    value={lastName}
                                    // onChange={handleChange}
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
                                    value={phoneNumber}
                                    // onChange={handleChange}
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
                                    value={address}
                                    // onChange={handleChange}
                                    placeholder='Email address'
                                    className='form-control'
                                />
                            </div>
                        </div>
                        <button
                            className='btn btn-block btn-success text-white mb-3'
                            data-dismiss='modal'
                            // onClick={createContact}
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

            {/* Edit Modal Ends */}

            {/* Contact Details Modal Starts */}

            <div
                className='modal fade'
                id={`${id}`}
                tabIndex='-1'
                role='dialog'
                aria-labelledby='exampleModalCenterTitle'
                aria-hidden='true'
            >
                <div
                    className='modal-dialog modal-dialog-centered'
                    role='document'
                    style={{ maxWidth: '400px' }}
                >
                    <div className='modal-content '>
                        <div className='d-flex justify-content-end align-items-start p-2'>
                            <div
                                className='px-1'
                                data-toggle='modal'
                                data-target={`#${id}1`}
                            >
                                <HiOutlinePencil className='update' />_
                            </div>
                            <div className='px-1'>
                                <VscTrash />
                            </div>
                            <div
                                className='close px-1'
                                data-dismiss='modal'
                                aria-label='Close'
                            >
                                <div
                                    aria-hidden='true'
                                    style={{
                                        fontSize: '1.2rem',
                                        marginTop: -3.5,
                                    }}
                                >
                                    &times;
                                </div>
                            </div>
                        </div>
                        <div className='modal-header py-1'>
                            <h5
                                className='modal-title'
                                id='exampleModalLongTitle'
                            >
                                <span className='label '>
                                    {firstName.charAt(0).toUpperCase()}
                                </span>{' '}
                                {firstName.charAt(0).toUpperCase() +
                                    firstName.substring(1)}{' '}
                                {lastName.charAt(0).toUpperCase() +
                                    lastName.substring(1)}
                            </h5>
                        </div>
                        <div className='modal-body'>
                            <p>Phone: {phoneNumber} </p>
                            <p>Email address: {address} </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Contact Details Modal Ends */}
        </tr>
    );
};

export default Contact;
