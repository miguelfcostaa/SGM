import React from 'react';
import NavBar from './NavBar';
import { Margin } from '@mui/icons-material';
import { Hidden } from '@mui/material';

const InternationalCareer = () => {
    return (
        <html style={{ overflow: 'hidden'}}>
            <NavBar />    
            
            <img style={{ position: 'absolute', height: '92%', width: '100% ', opacity: '30%' }} src='https://cdn.discordapp.com/attachments/525052167007240224/1185623116265820160/ronaldo-wallpaper-21013022253617.jpg?ex=65904892&is=657dd392&hm=08679961766a55c47447897a91dade15bb9c773605cd062d511e5462d3e125ba&' />
            
            <div style={{ marginTop: 150, marginLeft: 300}}>
                <span style={{ fontSize: '2.8rem', fontFamily:'serif'}}> International Career </span>  
            </div> 

            <div className='logoPortugal'>
                <img height={200} width={150} src='https://upload.wikimedia.org/wikipedia/pt/7/75/Portugal_FPF.png' />
            </div>

            <div className='detailsInternational'>
                <img height={300} width={1600} src='https://cdn.discordapp.com/attachments/525052167007240224/1185624822500311040/image.png?ex=65904a29&is=657dd529&hm=d3abf234537b102181937ca426abb114cd08056fa9a88547eddd5d4a0db31796&' />
            </div>

        </html>
    );
}

export default InternationalCareer;