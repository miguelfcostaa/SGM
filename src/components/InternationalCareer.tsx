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
                <a href='/Portugalstats'><img height={200} width={150} src='https://upload.wikimedia.org/wikipedia/pt/7/75/Portugal_FPF.png' /></a>
            </div>

            <div className='detailsInternational'>
                <img height={300} width={1600} src='https://cdn.discordapp.com/attachments/525052167007240224/1185983062304112771/image.png?ex=659197cc&is=657f22cc&hm=d2cce7a31d536313855f84de951a7d0d1decb96e3c6f58ac36ff2a4540b9d314&' />
            </div>

        </html>
    );
}

export default InternationalCareer;