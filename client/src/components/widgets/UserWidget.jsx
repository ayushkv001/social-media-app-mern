import { ManageAccountsOutlined, EditOffOutlined, LocationOnOutlined, WorkOutlineOutlined } from "@mui/icons-material";
import { Box, Divider, Typography, useTheme } from "@mui/material";
import FlexBetween from "components/FlexBetween";
import UserImage from "components/UserImage";
import WidgetWrapper from "components/WidgetWrapper";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";


const UserWidget = ({userId,picturePath}) => {
    const [user,setUser] = useState(null);
    const {palette} = useTheme();
    const navigate = useNavigate();
    const token = useSelector((state) => state.token);
    const dark = palette.neutral.dark;
    const medium = palette.neutral.medium;
    const main = palette.neutral.main;

    const getUser = async () => {
        const response = await fetch(`http://localhost:3001/users/${userId}`,
            {
                method:"GET",
                headers:{Authorization : `Bearer ${token}`},
            }
        );
        const data = await response.json();
        setUser(data);
    }

    useEffect(() => {
        getUser();
    },[])

    if(!user){
        return null;
    }

    const {
        firstName,
        lastName,
        location,
        occuption,
        viewedProfile,
        impressions,
        friends
    } = user;

    return <WidgetWrapper>
        <FlexBetween
            gap="0.5rem"
            pb="1.1rem"
            onClick={() => navigate(`/profile/${userId}`)}
        >
            <FlexBetween gap="1rem">
                <UserImage image={picturePath}/>
                <Box>
                    <Typography
                        variant="h4"
                        color={dark}
                        fontWeight="500"
                        sx={{
                            "&:hover":{
                                color:palette.primary.light,
                                cursor:"pointer"
                            }
                        }}
                    >
                        {firstName} {lastName}
                    </Typography>
                    <Typography color={medium} >{friends.length} friends</Typography>
                </Box>
                <ManageAccountsOutlined/>
            </FlexBetween>
            <Divider/>
            <Box p="1rem 0"></Box>
        </FlexBetween>
    </WidgetWrapper>
}