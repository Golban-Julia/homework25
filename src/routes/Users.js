import { useState, useEffect} from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";


import { getUsers } from "../api";

const Users = () => {
    const [users, setUsers] = useState([]);
    const [isLoading, setLoading] = useState(true);
    const navigate = useNavigate();
   

    useEffect(() => {
        getUsers().then((data)=> {
            setUsers(data);
            setLoading(false);
    });
    }, []);

    const handleClick = () => {
    navigate("/");
    }


    if (isLoading) {
        return <p>Loading...</p>
    }
    return (
    <>
        <table>
            <thead>
                <tr>
                    <th>First name</th>
                    <th>Last name</th>
                    <th>Email</th>
                    <th>Phone</th>
                </tr>
            </thead>
            <tbody>
            {users.map((user) => (
                <tr key={user.id}>
                    <td><Link to={`${user.id}`}>{user.firstName}</Link></td>
                    <td> {user.lastName} </td>
                    <td><a href="mailto:{user.email}">{user.email}</a></td>
                    <td><a href="tel:{user.phone}">{user.phone}</a></td>
                </tr>
            ))}
            </tbody>
        </table>
        <button onClick={handleClick}>Show More</button>
        </>    
    );
};

export default Users;