import { HiOutlinePencil } from 'react-icons/hi';
import { VscTrash } from 'react-icons/vsc';

const Contact = ({ firstName, lastName, address, phoneNumber }) => {
    return (
        <tr
            className='py-4 my-2'
            data-toggle='modal'
            data-target='#contactInfoModal'
        >
            <td className='py-2 d-inline-block truncate'>
                <span className='label'>{firstName[0].toUpperCase()}</span>{' '}
                {firstName[0].toUpperCase() + firstName.substring(1)}{' '}
                {lastName[0].toUpperCase() + lastName.substring(1)}
            </td>
            <td className='py-2'>{phoneNumber}</td>
            <td className='py-2  d-inline-block truncate'>{address}</td>
            {/* <td className='py-2'>{icons && 'Some'}</td> */}

            {/* Modal Starts */}

            <div
                className='modal fade'
                id='contactInfoModal'
                tabindex='-1'
                role='dialog'
                // aria-labelledby='exampleModalCenterTitle'
                aria-hidden='true'
            >
                <div
                    className='modal-dialog modal-dialog-centered'
                    role='document'
                    style={{ width: '400px' }}
                >
                    <div className='modal-content '>
                        <div className='d-flex justify-content-end align-items-start p-2'>
                            <div className='px-1'>
                                <HiOutlinePencil />_
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
                                    {firstName[0].toUpperCase()}
                                </span>{' '}
                                {firstName[0].toUpperCase() +
                                    firstName.substring(1)}{' '}
                                {lastName[0].toUpperCase() +
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

            {/* Modal Ends */}
        </tr>
    );
};

export default Contact;
