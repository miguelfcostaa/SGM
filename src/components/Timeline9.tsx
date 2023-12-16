import { Box, Button } from "@mui/material";
import React from 'react';
import NavBar from './NavBar';

const Timeline9 = () => {
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
                <button className="invisible-button" onClick={() => window.location.href = "/timeline8"}></button>
            </div>
            <div className="line-full"></div>
            <div className="ball"></div>
            <div className="textotimeline2">
                <div>
                    In 2015, Ronaldo surpassed the forward Raúl, who had scored 230 goals for Real Madrid, 
                    becoming the first player to score a hat-trick in less than 20 minutes in the competition. 
                    That year, he finished second in the Ballon d'Or, losing to Lionel Messi. During the Champions
                    League group stage, Ronaldo reached 500 career goals after scoring 2 goals against Malmo.
                    In 2016, Ronaldo played a crucial role in winning the Champions League again, this time against 
                    Atlético Madrid, with a victory in penalties where Ronaldo scored the final penalty. For the national 
                    team, it was a significant year as Ronaldo played a decisive role in qualifying for Euro 2016. In the 
                    competition, Portugal faced what seemed like an "easy" group with Iceland, Hungary, and Austria. However, 
                    despite drawing all the group stage matches and finishing third, Portugal advanced, facing Croatia in the 
                    round of 16, Poland in the quarter-finals, and Wales in the semi-finals. In the final against France, Ronaldo
                    suffered an injury, but Portugal secured their first major title with a legendary goal from Éder. Ronaldo's 
                    remarkable achievements in that year earned him his fourth Ballon d'Or.
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

export default Timeline9;