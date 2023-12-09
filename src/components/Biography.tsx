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
            <div className='flexCarrerStatsAndTransfer'>
                <div className='col-6'>
                    <div className='whiteBoxTitleCareerStats'>
                        <span style={{ fontSize: '2.2rem', fontFamily:'serif'}}> Career Stats </span>
                    </div>
                    <div className='whiteBoxCareerStats'>
                        <span style={{ fontSize: 22, fontWeight: 'bold'}}> GAMES PLAYED </span>
                        <span style={{ fontSize: 22, paddingLeft: 300 }}> 1187 </span>
                        <p></p>
                        <span style={{ fontSize: 22, fontWeight: 'bold'}}> GOALS </span>
                        <span style={{ fontSize: 22, paddingLeft: 400 }}> 837 </span>
                        <p></p>
                        <span style={{ fontSize: 22, fontWeight: 'bold'}}> ASSISTS </span>
                        <span style={{ fontSize: 22, paddingLeft: 385 }}> 279 </span>
                        <p></p>
                        <span style={{ fontSize: 22, fontWeight: 'bold'}}> MINUTES PLAYED </span>
                        <span style={{ fontSize: 22, paddingLeft: 270 }}> 96537 </span>
                        <p></p>
                        <span style={{ fontSize: 22, fontWeight: 'bold'}}> TROPHIES </span>
                        <span style={{ fontSize: 22, paddingLeft: 370 }}> 35 </span>
                        <p></p>
                    </div>
                </div>

                <div className='col-6'>
                    <div className='whiteBoxTitleTransferHist'>
                        <span style={{ fontSize: '2.2rem', fontFamily:'serif'}}> Career Stats </span>
                    </div>
                    <div className='whiteBoxTransferHist'>
                        <span style={{ fontSize: 22 }}> Andorinha <img height={34} width={30} src='https://cdn.discordapp.com/attachments/707687832239603863/1174751638746046544/image.png?ex=6568bbb8&is=655646b8&hm=753884d5225298a7a46b3699983abce87cd67ddb7514c14fadda144a111032e0&'/> </span>
                        <p></p>
                        <span style={{ fontSize: 22 }}> Nacional <img height={20} width={28} src='https://cdn.discordapp.com/attachments/707687832239603863/1174751857705496716/image.png?ex=6568bbec&is=655646ec&hm=c4acb50a18c85232f40bf22badc87ecf3e6c77b774321428bc89b39da1a119b1&'/> </span>
                        <p></p>
                        <span style={{ fontSize: 22 }}> Sporting <img height={20} width={28} src='https://www.countryflags.com/wp-content/uploads/portugal-flag-400.png'/> </span>
                        <p></p>
                        <span style={{ fontSize: 22 }}> Manchester United <img height={20} width={28} src='https://www.countryflags.com/wp-content/uploads/portugal-flag-400.png'/> </span>
                        <p></p>
                        <span style={{ fontSize: 22 }}> Real Madrid <img height={20} width={28} src='https://www.countryflags.com/wp-content/uploads/portugal-flag-400.png'/> </span>
                        <p></p>
                        <span style={{ fontSize: 22 }}> Juventus <img height={20} width={28} src='https://www.countryflags.com/wp-content/uploads/portugal-flag-400.png'/> </span>
                        <p></p>
                        <span style={{ fontSize: 22 }}> Al-Nassr <img height={20} width={28} src='https://www.countryflags.com/wp-content/uploads/portugal-flag-400.png'/> </span>
                        <p></p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Biography;