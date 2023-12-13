import { Box, Button } from "@mui/material";
import React from 'react';
import NavBar from './NavBar';

const Timeline3 = () => {
    return (
        <div style={{overflow: 'hidden', background: '#414141', position: 'absolute', height: '100%', width: '100%'}} >
            <NavBar />
            <Box sx={{ marginLeft: '1480px', marginTop: "100px" }}>
                <img
                height="600"
                width="400"
                src="https://cdn.discordapp.com/attachments/525052167007240224/1184496603613106246/ronaldo_manchester_united_2003.jpg?ex=658c2f6d&is=6579ba6d&hm=80eedf570f6bc83a0eebe882955823b9ca8948e6e87503e3c796dfddc0441953&"
                ></img>
            </Box>
        </div>
    );
}

export default Timeline3;