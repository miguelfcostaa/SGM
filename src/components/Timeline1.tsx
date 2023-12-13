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
                <p> Cristiano Ronaldo, nascido na cidade do Funchal, na ilha da Madeira,<br></br>
                    em 5 de fevereiro de 1985, desde a infância já revelava sua paixão <br></br>
                    pelo futebol. Os dias eram preenchidos com partidas improvisadas nas ruas, <br></br>
                    compartilhadas com amigos, onde os primeiros traços do fenômeno surgiam. <br></br>
                    Aos 9 anos, deu início à sua trajetória no Futebol Clube Andorinha, marcando <br></br>
                    o ponto de partida de uma carreira lendária. Suas habilidades excepcionais <br></br>
                    chamaram a atenção do Clube Desportivo Nacional, um dos gigantes do futebol na <br></br>
                    ilha da Madeira, que o contratou em 1995. Após dois anos nas categorias de <br></br>
                    base do Nacional, Cristiano fez a transição para as categorias de base do <br></br>
                    Sporting Clube de Portugal em 1997. Essa mudança foi motivada por uma dívida <br></br>
                    de 450 mil escudos (2.244 euros) do Nacional com o Sporting</p>
            </div>
            <span className="datatimeline1"> 
                   1985 <br></br>
                   <center> - </center>
                   1997
            </span>
        </div>
    );
}
export default Timeline1;