import { Box, Button } from "@mui/material";
import React from 'react';
import NavBar from './NavBar';

const Timeline2 = () => {
    return (
        <div style={{overflow: 'hidden', background: '#414141', position: 'absolute', height: '100%', width: '100%'}} >
            <NavBar />
            <Box sx={{ marginLeft: '1480px', marginTop: "100px" }}>
                <img
                height="600"
                width="400"
                src="https://cdn.discordapp.com/attachments/525052167007240224/1184483274681233458/ronaldo_sporting_academia.jpg?ex=658c2303&is=6579ae03&hm=cb4e728a2e2daf36e844a948d3646fff59fe164838d393f5db5aff50ea6f9e01&"
                ></img>
            </Box>
            <img
            className="seta-cima"
            src="https://cdn.discordapp.com/attachments/525052167007240224/1185974286897401896/3081888.png?ex=65918fa0&is=657f1aa0&hm=4fbc9e3462b5fc57b6ff790fef2f686e393bb2307c56a4202fa986ec374545f1&"
            ></img>
            <div>
                <button className="invisible-button" onClick={() => window.location.href = "/timeline1"}></button>
            </div>
            <div className="line-full"></div>
            <div className="ball"></div>
            <div className="textotimeline2">
                <div>
                    On April 14, 1997, Cristiano Ronaldo joined Sporting Clube Lisboa, where he 
                    played for the Sporting under-16, under-17, under-18, B teams, and the 
                    first team. Ronaldo scored 2 goals in his debut for the first team against 
                    Moreirense and made his first appearance for Portugal in the UEFA European 
                    Under-17 Championship. At the age of 15, he was diagnosed with a heart 
                    condition that could have forced him to give up playing football. A successful 
                    operation was performed, and he resumed playing. On July 13, 2002, Ronaldo 
                    started as a titular player in the first team, playing 30 games and scoring 5 goals. 
                </div>
            </div>
            <span className="datatimeline1"> 
                   1997 <br></br>
                   <center> - </center>
                   2002
            </span>
            <img
            className="seta-baixo"
            src="https://cdn.discordapp.com/attachments/525052167007240224/1185974286897401896/3081888.png?ex=65918fa0&is=657f1aa0&hm=4fbc9e3462b5fc57b6ff790fef2f686e393bb2307c56a4202fa986ec374545f1&"
            ></img>
            <div>
                <button className="invisible-button-bottom" onClick={() => window.location.href = "/timeline3"}></button>
            </div>
        </div>
    );
}

export default Timeline2;