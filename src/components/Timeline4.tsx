import { Box, Button } from "@mui/material";
import React from 'react';
import NavBar from './NavBar';

const Timeline4 = () => {
    return (
        <div style={{overflow: 'hidden', background: '#414141', position: 'absolute', height: '100%', width: '100%'}} >
            <NavBar />
            <Box sx={{ marginLeft: '1480px', marginTop: "100px" }}>
                <img
                height="600"
                width="400"
                src="https://cdn.discordapp.com/attachments/525052167007240224/1184510429020569620/ronaldo_manchester_united_2005.jpg?ex=658c3c4d&is=6579c74d&hm=ed4393a98a43b54305252a5edab3464707397b6880adb2e4ff8db69ae8658b3c&"
                ></img>
            </Box>
            <div>
                <button className="invisible-button" onClick={() => window.location.href = "/timeline2"}></button>
            </div>
            <div className="line-full"></div>
            <div className="ball"></div>
            <div className="textotimeline2">
                <div>
                    Between 2004 and 2007, Cristiano Ronaldo went through an adaptation period and struggled 
                    to score many goals, but he achieved success with Manchester United, winning the English  
                    League Cup in 2005-2006, the Premier League in 2006-07, and the FA Community Shield in  
                    2007. In 2007, Ronaldo received accolades as the best player and best young footballer in  
                    the Premier League, awarded by the Professional Footballers' Association in England. It  
                    was also in 2007 that Ronaldo began to showcase his goal-scoring prowess, netting more  
                    than 20 goals in a season. During this time, Real Madrid expressed interest in Ronaldo, 
                    willing to pay €80 million for his services. In 2004, representing the national team,  
                    Ronaldo was called up to participate in Euro 2004, held in Portugal. He scored his first 
                    goal for the national team against Greece in the group stage, although Portugal lost 2-1.  
                    Despite this setback, Portugal reached the Euro final but lost to Greece again. Between 
                    2005 and 2006, the World Cup took place, where Ronaldo was the second-highest scorer in 
                    the qualification phase with 7 goals. He scored his first World Cup goal against Iran.  
                    Portugal finished in 4th place in the competition, and Ronaldo was recognized as one of the  
                    best young players of the 2006 World Cup.
                </div>
            </div>
            <span className="datatimeline1"> 
                   2004 <br></br>
                   <center> - </center>
                   2007
            </span>
            <div>
                <button className="invisible-button-bottom" onClick={() => window.location.href = "/timeline5"}></button>
            </div>
        </div>
    );
}

export default Timeline4;