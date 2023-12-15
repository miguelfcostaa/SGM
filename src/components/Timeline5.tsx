import { Box, Button } from "@mui/material";
import React from 'react';
import NavBar from './NavBar';

const Timeline5 = () => {
    return (
        <div style={{overflow: 'hidden', background: '#414141', position: 'absolute', height: '100%', width: '100%'}} >
            <NavBar />
            <Box sx={{ marginLeft: '1480px', marginTop: "100px" }}>
                <img
                height="600"
                width="400"
                src="https://cdn.discordapp.com/attachments/525052167007240224/1184520885105868850/ronaldo_manchester_united_2008.jpg?ex=658c460a&is=6579d10a&hm=19f43468d7c9a7b34b491f4f8d066e7677202b1d9d6314342abc0fa4befd1656&"
                ></img>
            </Box>
            <div>
                <button className="invisible-button" onClick={() => window.location.href = "/timeline2"}></button>
            </div>
            <div className="line-full"></div>
            <div className="ball"></div>
            <div className="textotimeline2">
                <p>
                    
                </p>
            </div>
        </div>
    );
}

export default Timeline5;