import React from 'react';
import NavBar from '../NavBar';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';

const AlNassrSaudi = () => {
    return (
        <>
            <NavBar />
            <div style={{ display: 'flex' }}>
                <img width={1100} height={846} src='https://cdn.discordapp.com/attachments/525052167007240224/1185646878377922570/al-nassr-striker-cristiano-ronaldo.jpg?ex=65905eb4&is=657de9b4&hm=70281e087cd1096310e73cff814554e87e3887f0bf5ae657d52026c1035aafcb&' />

                <span style={{ fontSize: '2.8rem', fontFamily:'serif', marginLeft: 320, paddingTop: 50 }}> Al-Nassr Stats </span>
            </div>
            
            <div className='logoAlNassr'>
                <img width={230} height={300} src='https://seeklogo.com/images/A/al-nassr-fc-logo-7FBA561439-seeklogo.com.png?v=638091122880000000'/>
            </div>

            <div className='chooseCompetitionBtn'>
                <DropdownButton id="dropdown-basic-button" title="Competitions" size='lg' variant="secondary">
                    <Dropdown.Item href="/club-career/al-nassr/">All Stats</Dropdown.Item>
                    <Dropdown.Item href="/club-career/al-nassr/saudi-pro-league">Saudi Pro League</Dropdown.Item>
                </DropdownButton>
            </div>


            <div className='gamesPlayed'>
                <span style={{ fontSize: 26, fontWeight: 'bold'}}> GAMES PLAYED </span>
                <span style={{ fontSize: 26, paddingLeft: 94 }}> 31 </span>
            </div>

            <div className='goals'>
                <span style={{ fontSize: 26, fontWeight: 'bold'}}> GOALS </span>
                <span style={{ fontSize: 26, paddingLeft: 204 }}> 30 </span>
            </div>

            <div className='assists'>
                <span style={{ fontSize: 26, fontWeight: 'bold'}}> ASSISTS </span>
                <span style={{ fontSize: 26, paddingLeft: 184 }}> 10 </span>
            </div>

            <div className='minutesPlayed'>
                <span style={{ fontSize: 26, fontWeight: 'bold'}}> MINUTES PLAYED </span>
                <span style={{ fontSize: 26, paddingLeft: 59 }}> 2.780' </span>
            </div>

            
            
        </>
    );
}

export default AlNassrSaudi;