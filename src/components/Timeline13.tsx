import { Box, Button } from "@mui/material";
import React from 'react';
import NavBar from './NavBar';

const Timeline13 = () => {
    return (
        <div style={{overflow: 'hidden', background: '#414141', position: 'absolute', height: '100%', width: '100%'}} >
            <NavBar />
            <Box sx={{ marginLeft: '1480px', marginTop: "100px" }}>
                <img
                height="600"
                width="400"
                src="https://cdn.discordapp.com/attachments/525052167007240224/1185633673953943692/Ronaldo_Juventus.jpg?ex=65905267&is=657ddd67&hm=09f9b9d45ac7d893a3e859e76bfd7202a8d4bebc35995adba3007a279d5e6fb9&"
                ></img>
            </Box>
            <div>
                <button className="invisible-button" onClick={() => window.location.href = "/timeline11"}></button>
            </div>
            <div className="line-full"></div>
            <div className="ball"></div>
            <div className="textotimeline2">
                <div>
                    
                </div>
            </div>
            <span className="datatimeline1"> 
                   2020 <br></br>
                   <center> - </center>
                   2021
            </span>
            <div>
                <button className="invisible-button-bottom" onClick={() => window.location.href = "/timeline13"}></button>
            </div>
        </div>
    );
}

export default Timeline13;