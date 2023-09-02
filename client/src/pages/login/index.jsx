import { Box, Typography, useMediaQuery, useTheme } from "@mui/material";
import Form from "./Form";
import logo from "../../assets/logo.png";

const Login = () => {
    const theme = useTheme();
    const isNonMobileScreens = useMediaQuery("(min-width : 1000px)");

    return <Box>
        <Box width="100%" backgroundColor={theme.palette.background.alt} p="1rem 6%" textAlign="center">
            <img src={logo} alt="logo" width={65} height={65} style={{borderRadius:10}}/>
            <Typography 
                fontWeight="bold" 
                fontSize="clamp(1rem, 2rem, 2.25rem)" 
                color="primary" 
            >
                Connected
            </Typography>
        </Box>
        <Box 
            width={isNonMobileScreens?"40%":"93&"}
            p="2rem"
            m="2rem auto"
            borderRadius="1.5rem"
            backgroundColor={theme.palette.background.alt}
        >
            <Typography fontWeight="500" textAlign="center" variant="h5" sx={{mb:"1.5rem"}}>
                <i>Welcom to</i> Connected!!!
            </Typography>
            <Form/>
        </Box>
    </Box>
}

export default Login;