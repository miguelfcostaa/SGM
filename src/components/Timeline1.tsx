import { Box, Button } from "@mui/material";
import React from 'react';
import NavBar from './NavBar';

const Timeline1 = () => {
    return (  
        <div style={{overflow: 'hidden', background: '#414141', position: 'absolute', height: '100%', width: '100%'}} >
            <NavBar />
            <Box sx={{ marginLeft: '1550px', marginTop: "0px" }}>
                <img
                height="980"
                width="400"
                src="https://cdn.discordapp.com/attachments/525052167007240224/1179443168022900777/cristiano_Andorinha.png?ex=6579cd0c&is=6567580c&hm=3829a6d78156959a618c54142547f19c175f2bd3ce35f0e8803038571611b603&"
                ></img>
            </Box>
            <span className="TimelineTitle">
                Timeline
            </span>
            <div className="ball"></div>
            <div className="line"></div>
        </div>
    );
}
export default Timeline1;