import { useState, useEffect} from "react";
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

    const handleClick = (id) =>()=> {
        
        navigate (`/users/${id}`)
    };

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
                    <td>{user.firstName}</td>
                    <td> {user.lastName} </td>
                    <td><a href="mailto:{user.email}">{user.email}</a></td>
                    <td><a href="tel:{user.phone}">{user.phone}</a></td>
                    <button type="button" onClick={handleClick(user.id)}> Show More</button>
                </tr>
            ))}
            </tbody>
        </table>
        </>    
    );
};

export default Users;