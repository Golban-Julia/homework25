import { useForm, Controller } from "react-hook-form";
import { useContext } from "react";
import LoginContext from "../contexts/LoginContext";

import Button from '@mui/material/Button';
import Popover from '@mui/material/Popover';
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import Box from '@mui/material/Box';
import Grid from "@mui/material/Grid";
import PopupState, { bindTrigger, bindPopover } from 'material-ui-popup-state';


const Login = () => {
    const { loginUser } = useContext(LoginContext);
    const { handleSubmit, control} = useForm();

    const onSubmit = (data) => {
        console.log(data);
        loginUser(data );
    };

    return (

        <PopupState  variant="popover" popupId="demo-popup-popover">
            {(popupState) => (
                <Box >
                    <Typography variant="h2" sx={{ mb: 2, color: '#6E7491;', fontWeight: 700, fontSize: 24 }}>
                                Log in for Tripma
                            </Typography>
                            <Typography variant="p" sx={{ mb: 2, color: '#7C8DB0;', fontWeight: 400, fontSize: 18, maxWidth: 440, display: "inline-block", lineHeight: '1.5' }}>
                                Tripma is totally free to use. Sign up using your email address or phone number below to get started.
                            </Typography>
                    <Button variant="contained" sx={{ textTransform: 'none', fontSize: 20, mr:5}} {...bindTrigger(popupState)}>
                        Login
                    </Button>
                    <Popover sx={{ mb: 4.5, p: 5}}
                             {...bindPopover(popupState)}
                             anchorOrigin={{
                                 vertical: 'bottom',
                                 horizontal: 'center',
                             }}
                             transformOrigin={{
                                 vertical: 'top',
                                 horizontal: 'center',
                             }}
                    >
                        <Box sx={{p:6}}>
                            <Typography variant="h2" sx={{ mb: 2, color: '#6E7491;', fontWeight: 700, fontSize: 24 }}>
                                Log in for Tripma
                            </Typography>
                            <Typography variant="p" sx={{ color: '#7C8DB0;', fontWeight: 400, fontSize: 18, maxWidth: 440, display: "inline-block", lineHeight: '1.5' }}>
                                Tripma is totally free to use. Sign up using your email address or phone number below to get started.
                            </Typography>

                            <form onSubmit={handleSubmit(onSubmit)}>
                                <Grid item xs={12}>
                                    <Controller control={control}
                                                name="username"
                                                rules={{ required: "The field is required" }}
                                                render={({ field, fieldState: { error } }) => (
                                                    <TextField {...field} fullWidth
                                                               id="outlined-basic" label="Username" variant="outlined"
                                                               margin="normal"
                                                               padding="normal"
                                                               error={!!error}
                                                               helperText={error?.message}
                                                    />
                                                )}
                                    />
                                </Grid>

                                <Controller control={control}
                                            name="password"
                                            type="password"
                                            rules={{ required: "The field is required" }}
                                            render={({ field, fieldState: { error } }) => (
                                                <TextField {...field} fullWidth
                                                           id="outlined-basic" label="Password" variant="outlined"
                                                           margin="normal"
                                                           padding="normal"
                                                           error={!!error}
                                                           helperText={error?.message}
                                                />
                                            )}
                                />
                                <Button  variant="contained" sx={{textTransform: 'none', fontSize:28}} type="submit">Login</Button>
                            </form>
                        </Box>
                    </Popover>
                </Box>
            )}
        </PopupState>
    );
}

export default Login;