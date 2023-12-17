import { Box, Button } from "@mui/material";
import React from 'react';
import NavBar from './NavBar';

const Timeline3 = () => {
    return (
        <div style={{ overflow: 'hidden', background: '#414141', position: 'absolute', height: '100%', width: '100%' }} >
            <NavBar />
            <Box sx={{ marginLeft: '1480px', marginTop: "100px" }}>
                <img
                    height="600"
                    width="400"
                    src="https://cdn.discordapp.com/attachments/525052167007240224/1184496603613106246/ronaldo_manchester_united_2003.jpg?ex=658c2f6d&is=6579ba6d&hm=80eedf570f6bc83a0eebe882955823b9ca8948e6e87503e3c796dfddc0441953&"
                ></img>
            </Box>
            <img
            className="seta-cima"
            src="https://cdn.discordapp.com/attachments/525052167007240224/1185974286897401896/3081888.png?ex=65918fa0&is=657f1aa0&hm=4fbc9e3462b5fc57b6ff790fef2f686e393bb2307c56a4202fa986ec374545f1&"
            ></img>
            <div>
                <button className="invisible-button" onClick={() => window.location.href = "/timeline2"}></button>
            </div>
            <div className="line-full"></div>
            <div className="ball"></div>
            <div className="textotimeline2">
                <div>
                    In 2003, it was a year that would change Ronaldo's life, as he was already being
                    sought after by prominent teams at the time, such as Arsene Wenger's Arsenal.
                    However, no agreement was reached, and in the summer of 2003, Sporting defeated
                    Manchester United 3-1 in the inauguration of the Alvalade XXI stadium in Lisbon.
                    Ronaldo's performance impressed the Manchester United players and also Sir Alex
                    Ferguson, who ultimately signed him to replace David Beckham, who had transferred
                    to Real Madrid. The transfer was for approximately 15 million euros, marking
                    Ronaldo's ascent in European football. In 2003, he won the FA Cup with Manchester
                    United and received his first call-up to the Portuguese National Football Team
                    for a friendly against Kazakhstan, which Portugal won 1-0.
                </div>
            </div>
            <span className="datatimeline2">
                2003
            </span>
            <img
            className="seta-baixo"
            src="https://cdn.discordapp.com/attachments/525052167007240224/1185974286897401896/3081888.png?ex=65918fa0&is=657f1aa0&hm=4fbc9e3462b5fc57b6ff790fef2f686e393bb2307c56a4202fa986ec374545f1&"
            ></img>
            <div>
                <button className="invisible-button-bottom" onClick={() => window.location.href = "/timeline4"}></button>
            </div>
        </div>
    );
}

export default Timeline3;