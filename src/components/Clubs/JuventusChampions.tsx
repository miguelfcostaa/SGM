import React from 'react';
import NavBar from '../NavBar';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';

const JuventusChampions = () => {
    return (
        <>
            <NavBar />
            <div style={{ display: 'flex' }}>
                <img width={1100} height={846} src='https://cdn.discordapp.com/attachments/707687832239603863/1185606216328695879/cristiano-ronaldo-saat-melawan-ac-milan-di-leg-kedua-semi-final-coppa-italia.png?ex=659038d5&is=657dc3d5&hm=8d766617658564a5bcd0ab539e339a48d9faf04867afea8eacaacb37e04b8959&' />

                <span style={{ fontSize: '2.8rem', fontFamily:'serif', marginLeft: 320, paddingTop: 50 }}> Juventus Stats </span>
            </div>
            
            <div className='logoJuventus'>
                <img width={200} height={350} src='https://upload.wikimedia.org/wikipedia/commons/5/51/Juventus_FC_2017_logo.png'/>
            </div>

            <div className='chooseCompetitionBtn'>
                <DropdownButton id="dropdown-basic-button" title="Competitions" size='lg' variant="secondary">
                    <Dropdown.Item href="/club-career/juventus/">All Stats</Dropdown.Item>
                    <Dropdown.Item href="/club-career/juventus/serie-a">Serie A</Dropdown.Item>
                    <Dropdown.Item href="/club-career/juventus/champions">Champions League</Dropdown.Item>
                </DropdownButton>
            </div>


            <div className='gamesPlayed'>
                <span style={{ fontSize: 26, fontWeight: 'bold'}}> GAMES PLAYED </span>
                <span style={{ fontSize: 26, paddingLeft: 94 }}> 23 </span>
            </div>

            <div className='goals'>
                <span style={{ fontSize: 26, fontWeight: 'bold'}}> GOALS </span>
                <span style={{ fontSize: 26, paddingLeft: 204 }}> 14 </span>
            </div>

            <div className='assists'>
                <span style={{ fontSize: 26, fontWeight: 'bold'}}> ASSISTS </span>
                <span style={{ fontSize: 26, paddingLeft: 198 }}> 5 </span>
            </div>

            <div className='minutesPlayed'>
                <span style={{ fontSize: 26, fontWeight: 'bold'}}> MINUTES PLAYED </span>
                <span style={{ fontSize: 26, paddingLeft: 59 }}> 2.029' </span>
            </div>
            
            
        </>
    );
}

export default JuventusChampions;