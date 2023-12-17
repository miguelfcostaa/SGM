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
                src="https://cdn.discordapp.com/attachments/525052167007240224/1185621276006547527/Ronaldo_Real_Madrid_2018.jpg?ex=659046db&is=657dd1db&hm=e9ab669f5411d709b565f8a0c9cd4741d46d890fe498e5e555b8c142b70707f8&"
                ></img>
            </Box>
            <img
            className="seta-cima"
            src="https://cdn.discordapp.com/attachments/525052167007240224/1185974286897401896/3081888.png?ex=65918fa0&is=657f1aa0&hm=4fbc9e3462b5fc57b6ff790fef2f686e393bb2307c56a4202fa986ec374545f1&"
            ></img>
            <div>
                <button className="invisible-button" onClick={() => window.location.href = "/timeline9"}></button>
            </div>
            <div className="line-full"></div>
            <div className="ball"></div>
            <div className="textotimeline2">
                <div>
                    In 2017, it was another peak year for Ronaldo as he once again secured LaLiga, this time 
                    under the management of Zinedine Zidane. He played a pivotal role in the Champions League, 
                    scoring five goals against Bayern Munich in the quarter-finals (3 in the first leg and 2 in 
                    the second leg), reaching a milestone of 100 goals in European competitions. In the final against 
                    Juventus, he scored two goals in the 4-1 victory, claiming his fourth Champions League title and 
                    marking his 600th career goal against Juventus. Additionally, in 2017, he won the Spanish Supercup 
                    against Barcelona and the UEFA Super Cup against his former club, Manchester United. On December 7, 
                    2017, he won his fifth and final Ballon d'Or.
                    In 2018, in the Champions League quarter-finals, he faced Juventus again. In Turin, he scored two 
                    goals, including a bicycle kick—one of his best goals. The Juventus fans even applauded the rival's 
                    goal, leaving a lasting impression on Ronaldo, influencing his decision to join Juventus in the following 
                    season. In the Champions League final against Liverpool, they won 3-1, securing Ronaldo's fifth and final 
                    Champions League title, which was the third consecutive one and his seventh top scorer title in the competition 
                    (sixth consecutive).
                </div>
            </div>
            <span className="datatimeline1"> 
                   2017 <br></br>
                   <center> - </center>
                   2018
            </span>
            <img
            className="seta-baixo"
            src="https://cdn.discordapp.com/attachments/525052167007240224/1185974286897401896/3081888.png?ex=65918fa0&is=657f1aa0&hm=4fbc9e3462b5fc57b6ff790fef2f686e393bb2307c56a4202fa986ec374545f1&"
            ></img>
            <div>
                <button className="invisible-button-bottom" onClick={() => window.location.href = "/timeline11"}></button>
            </div>
        </div>
    );
}

export default Timeline10;