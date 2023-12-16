import { Box, Button } from "@mui/material";
import React from 'react';
import NavBar from './NavBar';

const Timeline10 = () => {
    return (
        <div style={{overflow: 'hidden', background: '#414141', position: 'absolute', height: '100%', width: '100%'}} >
            <NavBar />
            <Box sx={{ marginLeft: '1480px', marginTop: "100px" }}>
                <img
                height="600"
                width="400"
                src="https://cdn.discordapp.com/attachments/525052167007240224/1185608148002807961/Ronaldo_Euro_2016.jpg?ex=65903aa2&is=657dc5a2&hm=58c1418c383670048c621ab3055b95f1b9af86ae0353c32fef2d2cf94745d130&"
                ></img>
            </Box>
            <div>
                <button className="invisible-button" onClick={() => window.location.href = "/timeline9"}></button>
            </div>
            <div className="line-full"></div>
            <div className="ball"></div>
            <div className="textotimeline2">
                <div>
                    
                </div>
            </div>
            <span className="datatimeline1"> 
                   2015 <br></br>
                   <center> - </center>
                   2016
            </span>
            <div>
                <button className="invisible-button-bottom" onClick={() => window.location.href = "/timeline10"}></button>
            </div>
        </div>
    );
}

export default Timeline10;