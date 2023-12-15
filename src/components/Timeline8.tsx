import { Box, Button } from "@mui/material";
import React from 'react';
import NavBar from './NavBar';

const Timeline8 = () => {
    return (
        <div style={{overflow: 'hidden', background: '#414141', position: 'absolute', height: '100%', width: '100%'}} >
            <NavBar />
            <Box sx={{ marginLeft: '1480px', marginTop: "100px" }}>
                <img
                height="600"
                width="400"
                src="https://cdn.discordapp.com/attachments/525052167007240224/1185273240512372856/ronaldo_real_madrid_2010.jpg?ex=658f02b9&is=657c8db9&hm=b36d24ca51149b77c725525e0c8158e3a51af6cc7b711e971ca97a48fd032515&"
                ></img>
            </Box>
            <div>
                <button className="invisible-button" onClick={() => window.location.href = "/timeline6"}></button>
            </div>
            <div className="line-full"></div>
            <div className="ball"></div>
            <div className="textotimeline2">
                <div>
                    
                </div>
            </div>
            <span className="datatimeline1"> 
                   2009 <br></br>
                   <center> - </center>
                   2013
            </span>
            <div>
                <button className="invisible-button-bottom" onClick={() => window.location.href = "/timeline7"}></button>
            </div>
        </div>
    );
}

export default Timeline8;