import { Box, Button } from "@mui/material";
import React from 'react';
import NavBar from './NavBar';

const Timeline11 = () => {
    return (
        <div style={{overflow: 'hidden', background: '#414141', position: 'absolute', height: '100%', width: '100%'}} >
            <NavBar />
            <Box sx={{ marginLeft: '1480px', marginTop: "100px" }}>
                <img
                height="600"
                width="400"
                src="https://cdn.discordapp.com/attachments/525052167007240224/1185626747308343406/Ronaldo_Nations_League_2019.jpg?ex=65904bf4&is=657dd6f4&hm=2fa487bfe9d199ba50ad1dee3c457ffcb162f70c58e8971292689e428ca0c806&"
                ></img>
            </Box>
            <div>
                <button className="invisible-button" onClick={() => window.location.href = "/timeline10"}></button>
            </div>
            <div className="line-full"></div>
            <div className="ball"></div>
            <div className="textotimeline2">
                <div>
                    At the end of 2018, Ronaldo was transferred to Juventus for 100 million euros. During the France 
                    Football Ballon d'Or ceremony, Ronaldo finished second, losing to his former teammate Luka Modric. 
                    He did not attend the ceremony, which, in the public's opinion, was a significant injustice.
                    In his first season with Juventus, Ronaldo won the Italian Supercup. In the Champions League round 
                    of 16, Juventus faced Atletico Madrid, losing 2-0 in Madrid. However, in the return leg, Cristiano 
                    scored his first hat-trick for Juventus, securing qualification. In the quarter-finals, Juventus was 
                    eliminated by Ajax with a 3-2 aggregate score. Despite this, they won the Scudetto (Italian league title), 
                    and Ronaldo finished the season with 28 goals and 10 assists for the club.
                    For the national team, Ronaldo played in the Nations League, where he played a crucial role in the victory 
                    against Switzerland in the semi-finals, scoring a hat-trick. In the final against the Netherlands, he didn't 
                    score, but he became the top scorer with three goals, helping Portugal win their second major title.
                </div>
            </div>
            <span className="datatimeline2">
                2019
            </span>
            <div>
                <button className="invisible-button-bottom" onClick={() => window.location.href = "/timeline12"}></button>
            </div>
        </div>
    );
}

export default Timeline11;