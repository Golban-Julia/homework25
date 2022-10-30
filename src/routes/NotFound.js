import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <>
            <p>Oops somthing went wrong</p>
            <h3> 404. Page not found</h3>
            <Link to="/">Go to Home page</Link>
        </>
    );
};

export default NotFound;