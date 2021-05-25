import Loader from '../img/loader.gif';

const Loading = () => {
    return (
        <div
            className='d-flex justify-content-center align-items-center'
            style={{ margin: 'auto 0' }}
        >
            <img src={Loader} alt='Loader' width='15%' />
        </div>
    );
};

export default Loading;
