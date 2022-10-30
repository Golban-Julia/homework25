import { useState, useEffect} from "react";
import { Link, useParams } from "react-router-dom";

import { getUserById } from "../api";

const Users = () => {
    const { userId } = useParams();
    const [user, setUser] = useState({});
    const [isLoading, setLoading] = useState(true);

    useEffect(() => {
        getUserById(userId).then((data)=> {
            setUser(data);
            setLoading(false);
    });
    }, [userId]);

    if (isLoading) {
        return <p>Loading...</p>
    }

    

    return (
        <div>
            <Link to="/users">Back to Users</Link>
            <h2 className="user_name">{user.firstName} {user.lastName} {user.maidenName}:</h2>
            <div className="user_block">
                <div className="img_block"> <img src={user.image} /></div>  
            
                <div className="info_block1">
                    <p>Age: {user.age }</p>
                    <p>Gender: { user.gender}</p>
                    <p>Email: { user.email}</p>
                    <p>Phone: {user.phone}</p>
                    <p>Username: : {user.username}</p>
                    <p>Password: {user.password}</p>
                    <p>Birthdate: {user.birthDate}</p>
                    <p>Blood Group: {user.bloodGroup}</p>
                    <p>Height: {user.height}</p>
                    <p>Weight: {user.weight}</p>
                    <p>Eye color: {user.eyeColor}</p>
                    <p>Hair: {user.hair.color} {user.hair.type} </p>
                </div>
                <div className="info_block2">
                    <p>University: {user.university}</p>
                    <p>Domain: {user.domain}</p>
                    <p>IP: {user.ip}</p>
                    <p>Address: {user.address.address}</p>
                    <p>City: {user.address.city} </p>
                    <p>Postal Code: {user.address.postalCode}</p>
                    <p>macAddress: {user.macAddress}</p>
                    <p>Company: {user.company.name} </p>
                    <p>Department: {user.company.department} </p>
                    <p>Title: {user.company.title} </p>
                    <p>Company Address: {user.company.address.address} </p>
                </div>
            </div>
        </div>
    );
};

export default Users;