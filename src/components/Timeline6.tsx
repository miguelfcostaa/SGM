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
            <img
            className="seta-cima"
            src="https://cdn.discordapp.com/attachments/525052167007240224/1185974286897401896/3081888.png?ex=65918fa0&is=657f1aa0&hm=4fbc9e3462b5fc57b6ff790fef2f686e393bb2307c56a4202fa986ec374545f1&"
            ></img>
            <div>
                <button className="invisible-button" onClick={() => window.location.href = "/timeline5"}></button>
            </div>
            <div className="line-full"></div>
            <div className="ball"></div>
            <div className="textotimeline2">
                <div>
                    In 2009, after achieving everything, Ronaldo stayed with Manchester United. In this year, he 
                    secured both the Premier League and the English League Cup. Additionally, he received the Puskas 
                    Award for the best goal of the year, a spectacular strike against Porto from 36 meters out. He also
                     reached another Champions League final, facing Barcelona, resulting in his only defeat in Champions
                    League finals with a 2-0 loss.
                    This historic final featured Ronaldo and Messi on opposing sides. Throughout this season, Ronaldo 
                    played 53 games but scored 16 goals fewer compared to the previous season. However, his season was 
                    destined to take an upward turn as Manchester United accepted a £80 million (€94 million) offer from 
                    Real Madrid, making it the most expensive transfer in football history. This transfer also brought in 
                    the player Kaká.
                    For the national team, Cristiano continued to stand out by scoring numerous decisive goals, contributing 
                    significantly to their success in international competitions.
                </div>
            </div>
            <span className="datatimeline2">
                2009
            </span>
            <img
            className="seta-baixo"
            src="https://cdn.discordapp.com/attachments/525052167007240224/1185974286897401896/3081888.png?ex=65918fa0&is=657f1aa0&hm=4fbc9e3462b5fc57b6ff790fef2f686e393bb2307c56a4202fa986ec374545f1&"
            ></img>
            <div>
                <button className="invisible-button-bottom" onClick={() => window.location.href = "/timeline7"}></button>
            </div>
        </div>
    );
}

export default Timeline6;