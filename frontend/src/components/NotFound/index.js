import './NotFound.css';
import logo from '../../assets/zach_algo.gif';


const NotFound = () => {
    return (
        <>
            <img className='gif' src={logo} alt="loading..." />
            <div className='ohNo'>Uh oh! The page you are looking for seems to be missing.</div>
        </>
    )
}

export default NotFound;
