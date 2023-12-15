import { Box, Button } from "@mui/material";
import React from 'react';
import NavBar from './NavBar';

const Timeline7 = () => {
    return (
        <div style={{overflow: 'hidden', background: '#414141', position: 'absolute', height: '100%', width: '100%'}} >
            <NavBar />
            <Box sx={{ marginLeft: '1480px', marginTop: "100px" }}>
                <img
                height="600"
                width="400"
                src="https://cdn.discordapp.com/attachments/525052167007240224/1185273240512372856/ronaldo_real_madrid_2010.jpg?ex=658f02b9&is=657c8db9&hm=b36d24ca51149b77c725525e0c8158e3a51af6cc7b711e971ca97a48fd032515&"
                ></img>
            </Box>
            <div>
                <button className="invisible-button" onClick={() => window.location.href = "/timeline6"}></button>
            </div>
            <div className="line-full"></div>
            <div className="ball"></div>
            <div className="textotimeline2">
                <div>
                    In his first season with Real Madrid, Ronaldo was already setting a record by becoming the first 
                    player to score in his first four appearances in the league. By the end of the season, he had netted 
                    26 goals in the league, showcasing his decisiveness and goal-scoring prowess. In total, he scored 46 
                    goals in 48 games. In 2011, he became the top scorer in a single season in the history of Real Madrid 
                    with 53 goals, surpassing Ferenc Puskás's record of 49 goals.
                    In 2012, Ronaldo finished in second place for the Ballon d'Or behind Messi, but he scored 60 goals in 
                    all competitions during the season, surpassing his previous records. In the same year, he won his first 
                    La Liga title under the management of José Mourinho, and Real Madrid amassed 100 points in the competition. 
                    In 2013, he secured the Spanish Supercup against Barcelona, being decisive with 2 goals. However, in the same 
                    year, Real Madrid was eliminated in the semi-finals of the Champions League. Ronaldo expressed that he owed a 
                    Champions League title to the fans and ended the year with 69 goals, his personal record.
                </div>
            </div>
            <span className="datatimeline1"> 
                   2009 <br></br>
                   <center> - </center>
                   2013
            </span>
            <div>
                <button className="invisible-button-bottom" onClick={() => window.location.href = "/timeline8"}></button>
            </div>
        </div>
    );
}

export default Timeline7;