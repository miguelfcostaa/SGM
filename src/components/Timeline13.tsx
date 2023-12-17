import { Box, Button } from "@mui/material";
import React from 'react';
import NavBar from './NavBar';

const Timeline13 = () => {
    return (
        <div style={{overflow: 'hidden', background: '#414141', position: 'absolute', height: '100%', width: '100%'}} >
            <NavBar />
            <Box sx={{ marginLeft: '1480px', marginTop: "100px" }}>
                <img
                height="600"
                width="400"
                src="https://cdn.discordapp.com/attachments/525052167007240224/1185639196598218872/Ronaldo_United_2021.jpg?ex=6590578c&is=657de28c&hm=83f09fdf6b9508b8c9259a37bc316894273ac31f9f2a2bb8a929518af5ab9e47&"
                ></img>
            </Box>
            <img
            className="seta-cima"
            src="https://cdn.discordapp.com/attachments/525052167007240224/1185974286897401896/3081888.png?ex=65918fa0&is=657f1aa0&hm=4fbc9e3462b5fc57b6ff790fef2f686e393bb2307c56a4202fa986ec374545f1&"
            ></img>
            <div>
                <button className="invisible-button" onClick={() => window.location.href = "/timeline12"}></button>
            </div>
            <div className="line-full"></div>
            <div className="ball"></div>
            <div className="textotimeline2">
                <div>
                    On August 27, 2021, Manchester United announced the return of Cristiano Ronaldo after 12 years. 
                    In this season, he was highly decisive, scoring many goals and helping Manchester United qualify
                    for the Champions League. However, they were eliminated in the round of 16 by Atletico Madrid. 
                    During this period, Ronaldo reached a total of 807 career goals, finishing the season with 24 goals
                    and 3 assists.
                    For the national team, due to the COVID-19 pandemic, Euro 2020 was postponed. Ronaldo participated, 
                    scoring 5 goals, but Portugal was eliminated in the round of 16 by Belgium. In that year, he became 
                    the all-time leading scorer in international competitions with 111 goals.
                    In 2022, it was Ronaldo's toughest season in many years. He continued with Manchester United, scoring 
                    4 goals in the first half of the season. There were reported conflicts with the new manager, Erik ten Hag.
                    Before the 2022 World Cup held at the end of the year, Ronaldo gave an interview stating that the club 
                    did not support him when his daughter was hospitalized, and he often found himself on the bench. Following 
                    this interview, and by mutual agreement, Ronaldo left Manchester United. In the World Cup, he scored and 
                    became the first player to score in five consecutive World Cups, but Portugal was eliminated in the 
                    quarter-finals by Morocco with a 1-0 defeat.
                </div>
            </div>
            <span className="datatimeline1"> 
                   2021 <br></br>
                   <center> - </center>
                   2022
            </span>
            <img
            className="seta-baixo"
            src="https://cdn.discordapp.com/attachments/525052167007240224/1185974286897401896/3081888.png?ex=65918fa0&is=657f1aa0&hm=4fbc9e3462b5fc57b6ff790fef2f686e393bb2307c56a4202fa986ec374545f1&"
            ></img>
            <div>
                <button className="invisible-button-bottom" onClick={() => window.location.href = "/timeline14"}></button>
            </div>
        </div>
    );
}

export default Timeline13;