import React from 'react';
import NavBar from './NavBar';
import { Box } from '@mui/material';

const Biography = () => {
    return (
        <div style={{ background: '#E6E6E6', position: 'absolute', height: '200%', width: '100%' }}>
            <NavBar />
            <span className="bioTitle">
                Biography
            </span>
            <img className='imgBio' height={355} width={240} src='https://cdn.discordapp.com/attachments/707687832239603863/1178771992082653244/image.png?ex=65775bf7&is=6564e6f7&hm=d12904b94d11da7adc667808ad4cc6dabf5b177205a7a1cd9cf7fe8d503be942&' />
            <div className='whiteBoxTitleAbout'>
                <span style={{ fontSize: '2.2rem', fontFamily:'serif'}}>About</span>
            </div>
            <div className='whiteBoxAbout'> 
                <span style={{ fontSize: 22, fontWeight: 'bold'}}> NAME </span>
                <span style={{ fontSize: 22, paddingLeft: 250 }}> Cristiano Ronaldo dos Santos Aveiro </span>
                <p></p>
                <span style={{ fontSize: 22, fontWeight: 'bold'}}> AGE </span>
                <span style={{ fontSize: 22, paddingLeft: 320 }}> 38 years old (5/02/1985) </span>
                <p></p>
                <span style={{ fontSize: 22, fontWeight: 'bold'}}> LOCATION </span>
                <span style={{ fontSize: 22, paddingLeft: 260 }}> Funchal, Madeira Island </span>
                <p></p>
                <span style={{ fontSize: 22, fontWeight: 'bold'}}> HEIGHT </span>
                <span style={{ fontSize: 22, paddingLeft: 380 }}> 189cm </span>
                <p></p>
                <span style={{ fontSize: 22, fontWeight: 'bold'}}> NATIONALITY </span>
                <span style={{ fontSize: 22, paddingLeft: 290 }}> Portuguese <img height={20} width={28} src='https://www.countryflags.com/wp-content/uploads/portugal-flag-400.png'/> </span>
            </div>

            <div className='whiteBoxTitleCareerStats'>
                <span style={{ fontSize: '2.2rem', fontFamily:'serif'}}> Career Stats </span>
            </div>
            <div className='whiteBoxCareerStats'>

            </div>
        </div>
    );
}

export default Biography;