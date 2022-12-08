import { useContext } from "react";

import LoginContext from "../contexts/LoginContext";
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';


const UserImage = () => {
    const { userInfo, logoutUser } = useContext(LoginContext);
    return (

        <Stack direction="row" spacing={2}>
            <Button variant="contained" sx={{ textTransform: 'none', fontSize: 20, m:4 }} type="submit" onClick={logoutUser}>Log out</Button>
            <img className="avatar" src={userInfo.image} alt="avatar" />
        </Stack>
    );
}
export default UserImage;