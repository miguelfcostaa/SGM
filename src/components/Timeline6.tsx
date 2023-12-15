import { Box, Button } from "@mui/material";
import React from 'react';
import NavBar from './NavBar';

const Timeline6 = () => {
    return (
        <div style={{overflow: 'hidden', background: '#414141', position: 'absolute', height: '100%', width: '100%'}} >
            <NavBar />
            <Box sx={{ marginLeft: '1480px', marginTop: "100px" }}>
                <img
                height="600"
                width="400"
                src="https://cdn.discordapp.com/attachments/525052167007240224/1185269164206727311/cristiano_Ronaldo_2009.jpg?ex=658efeed&is=657c89ed&hm=2fbdaa3d6c92592b565630cbf1ff5f98581747bc08cb5050e10185a83ba5deb5&"
                ></img>
            </Box>
        </div>
    );
}

export default Timeline6;