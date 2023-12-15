import { Box, Button } from "@mui/material";
import React from 'react';
import NavBar from './NavBar';

const Timeline1 = () => {
    return (  
        <div style={{overflow: 'hidden', background: '#414141', position: 'absolute', height: '100%', width: '100%'}} >
            <NavBar />
            <Box sx={{ marginLeft: '1480px', marginTop: "100px" }}>
                <img
                height="600"
                width="400"
                src="https://cdn.discordapp.com/attachments/525052167007240224/1183474748546621601/Ronaldo_andorinha.jpg?ex=658877bf&is=657602bf&hm=ab5b1cbc8db56eedcbb076a6ef8e80b3c41b31a747d08c50b6f4fd688ce58adc&"
                ></img>
            </Box>
            <span className="TimelineTitle">
                Timeline
            </span>
            <div className="ball"></div>
            <div className="line"></div>
            <div className="textotimeline1">
                <div> 
                    Cristiano Ronaldo, born in the city of Funchal on the island of Madeira,
                    on February 5, 1985, already revealed his passion for football from childhood. 
                    Days were filled with improvised matches on the streets, shared with friends,
                    where the first traces of the phenomenon emerged. At the age of 9, he began 
                    his journey at Futebol Clube Andorinha, marking the starting point of a 
                    legendary career. His exceptional skills caught the attention of Clube 
                    Desportivo Nacional, one of the giants of football in Madeira, who signed 
                    him in 1995. After two years in the youth categories of Nacional, Cristiano 
                    transitioned to the youth categories of Sporting Clube de Portugal in 1997. 
                    This change was motivated by a debt of 450 thousand escudos (2,244 euros) 
                    that Nacional owed to Sporting.
                </div>
            </div>
            <span className="datatimeline1"> 
                   1985 <br></br>
                   <center> - </center>
                   1997
            </span>
            <div>
                <button className="invisible-button-bottom" onClick={() => window.location.href = "/timeline2"}></button>
            </div>
        </div>
    );
}
export default Timeline1;