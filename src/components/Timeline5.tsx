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
            <img
            className="seta-cima"
            src="https://cdn.discordapp.com/attachments/525052167007240224/1185974286897401896/3081888.png?ex=65918fa0&is=657f1aa0&hm=4fbc9e3462b5fc57b6ff790fef2f686e393bb2307c56a4202fa986ec374545f1&"
            ></img>
            <div>
                <button className="invisible-button" onClick={() => window.location.href = "/timeline4"}></button>
            </div>
            <div className="line-full"></div>
            <div className="ball"></div>
            <div className="textotimeline2">
                <div>
                    In 2008, it was the year where Cristiano Ronaldo truly established himself as one of the best 
                    in the world. He secured the Golden Boot with 31 goals in the Premier League and 42 goals in all 
                    competitions. In the Premier League, he not only won the competition but also claimed victory in 
                    the FA Community Shield, FIFA Club World Cup, and the UEFA Champions League, the latter being 
                    particularly noteworthy as it was his first. Ronaldo shone in the final, scoring a goal in the 1-1 
                    draw against Chelsea, who were eventually defeated in a penalty shootout.
                    In terms of individual awards, Ronaldo achieved remarkable success, winning the FIFA World Player 
                    of the Year, FIFPro World Player of the Year, World Soccer's World Player of the Year, UEFA Club 
                    Forward of the Year, UEFA Golden Shoe (most goals scored), UEFA Club Footballer of the Year, English 
                    Footballer of the Year, PFA Players' Player of the Year. Culminating these achievements, he clinched 
                    the ultimate individual honor for a footballer—the Ballon d'Or. In essence, Ronaldo in that year 
                    cemented his status as the best player in the world.
                </div>
            </div>
            <span className="datatimeline2">
                2008
            </span>
            <img
            className="seta-baixo"
            src="https://cdn.discordapp.com/attachments/525052167007240224/1185974286897401896/3081888.png?ex=65918fa0&is=657f1aa0&hm=4fbc9e3462b5fc57b6ff790fef2f686e393bb2307c56a4202fa986ec374545f1&"
            ></img>
            <div>
                <button className="invisible-button-bottom" onClick={() => window.location.href = "/timeline6"}></button>
            </div>
        </div>
    );
}

export default Timeline5;