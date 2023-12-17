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
                src="https://cdn.discordapp.com/attachments/525052167007240224/1185279517728706670/Ronaldo_Real_Madrid_2014.jpg?ex=658f0892&is=657c9392&hm=5330f3a7e0d98fc34b6c25bc1a182317aa5a4490a3b5a8780449fe2e9928728f&"
                ></img>
            </Box>
            <img
            className="seta-cima"
            src="https://cdn.discordapp.com/attachments/525052167007240224/1185974286897401896/3081888.png?ex=65918fa0&is=657f1aa0&hm=4fbc9e3462b5fc57b6ff790fef2f686e393bb2307c56a4202fa986ec374545f1&"
            ></img>
            <div>
                <button className="invisible-button" onClick={() => window.location.href = "/timeline7"}></button>
            </div>
            <div className="line-full"></div>
            <div className="ball"></div>
            <div className="textotimeline2">
                <div>
                    In January 2014, Cristiano Ronaldo won his second Ballon d'Or for scoring 69 goals in all 
                    competitions. In the same year, José Mourinho left Real Madrid and was replaced by Carlo 
                    Ancelotti. Ronaldo played a crucial role in winning the Champions League, defeating Bayern 
                    Munich in the semi-finals with 2 goals and clinching the final against Atlético Madrid with 
                    a 4-1 victory. In that final, he scored the last goal, setting a record that still stands today 
                    for scoring 17 goals in a single edition of the Champions League. Additionally, he won the Copa del 
                    Rey that year and, at the end of the season, secured his third Ballon d'Or for this magnificent year.
                    For the national team, he participated in his third World Cup, becoming the second-highest scorer 
                    for the national team that year. He scored several decisive goals in the qualification matches, including 
                    a hat-trick in the 3-2 victory against Sweden, led by Zlatan Ibrahimovic. However, in the World Cup, 
                    Portugal did not advance from a group that included Germany, Ghana, and the United States.
                </div>
            </div>
            <span className="datatimeline2">
                2014
            </span>
            <img
            className="seta-baixo"
            src="https://cdn.discordapp.com/attachments/525052167007240224/1185974286897401896/3081888.png?ex=65918fa0&is=657f1aa0&hm=4fbc9e3462b5fc57b6ff790fef2f686e393bb2307c56a4202fa986ec374545f1&"
            ></img>
            <div>
                <button className="invisible-button-bottom" onClick={() => window.location.href = "/timeline9"}></button>
            </div>
        </div>
    );
}

export default Timeline8;