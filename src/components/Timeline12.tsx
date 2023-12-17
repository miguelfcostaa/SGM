import { Box, Button } from "@mui/material";
import React from 'react';
import NavBar from './NavBar';

const Timeline12 = () => {
    return (
        <div style={{overflow: 'hidden', background: '#414141', position: 'absolute', height: '100%', width: '100%'}} >
            <NavBar />
            <Box sx={{ marginLeft: '1480px', marginTop: "100px" }}>
                <img
                height="600"
                width="400"
                src="https://cdn.discordapp.com/attachments/525052167007240224/1185633673953943692/Ronaldo_Juventus.jpg?ex=65905267&is=657ddd67&hm=09f9b9d45ac7d893a3e859e76bfd7202a8d4bebc35995adba3007a279d5e6fb9&"
                ></img>
            </Box>
            <img
            className="seta-cima"
            src="https://cdn.discordapp.com/attachments/525052167007240224/1185974286897401896/3081888.png?ex=65918fa0&is=657f1aa0&hm=4fbc9e3462b5fc57b6ff790fef2f686e393bb2307c56a4202fa986ec374545f1&"
            ></img>
            <div>
                <button className="invisible-button" onClick={() => window.location.href = "/timeline11"}></button>
            </div>
            <div className="line-full"></div>
            <div className="ball"></div>
            <div className="textotimeline2">
                <div>
                    In the following season, Ronaldo continued his prolific goal-scoring form, proving decisive 
                    in various matches. He broke the record as the first player in Juventus history to score in 
                    10 consecutive league matches. In the Champions League, Juventus was eliminated in the 
                    quarter-finals by Olympique Lyon, who reached the semi-finals that year. In the Italian league, 
                    Juventus once again clinched the Scudetto, marking their ninth consecutive title, and Ronaldo 
                    concluded the season with 37 goals.
                    In the next season, Ronaldo remained a pivotal figure, scoring numerous goals, including in 
                    the victory of the 2021 Italian Supercup. However, in the Champions League, Juventus was eliminated 
                    by Porto in the round of 16, losing 3-3 on aggregate (losing on the away goals rule). In that year, 
                    at the age of 36, he became the all-time leading scorer in the history of football, considering official
                     goals, surpassing Pelé. Despite losing the league title to Inter Milan, Juventus won the Coppa Italia 
                     by defeating Atalanta 2-1. Ronaldo scored 36 goals in the season but appeared dissatisfied at Juventus 
                     and expressed interest in leaving.
                </div>
            </div>
            <span className="datatimeline1"> 
                   2020 <br></br>
                   <center> - </center>
                   2021
            </span>
            <img
            className="seta-baixo"
            src="https://cdn.discordapp.com/attachments/525052167007240224/1185974286897401896/3081888.png?ex=65918fa0&is=657f1aa0&hm=4fbc9e3462b5fc57b6ff790fef2f686e393bb2307c56a4202fa986ec374545f1&"
            ></img>
            <div>
                <button className="invisible-button-bottom" onClick={() => window.location.href = "/timeline13"}></button>
            </div>
        </div>
    );
}

export default Timeline12;