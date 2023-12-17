import { Box, Button } from "@mui/material";
import React from 'react';
import NavBar from './NavBar';

const Timeline14 = () => {
    return (
        <div style={{overflow: 'hidden', background: '#414141', position: 'absolute', height: '100%', width: '100%'}} >
            <NavBar />
            <Box sx={{ marginLeft: '1480px', marginTop: "100px" }}>
                <img
                height="600"
                width="400"
                src="https://cdn.discordapp.com/attachments/525052167007240224/1185641145745813544/cristiano_ronaldo_al_nassr.jpeg?ex=6590595d&is=657de45d&hm=dd62abfdf5da654ab9901ffa58fc478b834b044416ac63c9b146b29baab2b3f2&"
                ></img>
            </Box>
            <img
            className="seta-cima"
            src="https://cdn.discordapp.com/attachments/525052167007240224/1185974286897401896/3081888.png?ex=65918fa0&is=657f1aa0&hm=4fbc9e3462b5fc57b6ff790fef2f686e393bb2307c56a4202fa986ec374545f1&"
            ></img>
            <div>
                <button className="invisible-button" onClick={() => window.location.href = "/timeline13"}></button>
            </div>
            <div className="line-top"></div>
            <div className="ball"></div>
            <div className="textotimeline2">
                <div>
                    On December 30, 2022, Cristiano Ronaldo was announced at Al-Nassr in Saudi Arabia, revolutionizing 
                    the world of football and making the Saudi league much more viable. With a speculated salary around 
                    200 million euros per season, making him the highest-paid player in the world, Ronaldo continued to 
                    score goals, achieving two hattricks and reaching a total of 62 hattricks in his career. On August 12, 
                    2023, Ronaldo secured his first title with Al-Nassr, winning the 2023 Arab Champions League and scoring 
                    2 goals in the final.
                    For the national team, Ronaldo has 128 goals and 204 caps, setting a world record. Currently, in 2023, he 
                    has already scored 50 goals, marking the eighth year in his career where he has scored 50 goals or more in 
                    a single year.
                </div>
            </div>
            <span className="datatimeline1"> 
                   2023 <br></br>
                   <center> - </center>
            </span>
        </div>
    );
}

export default Timeline14;