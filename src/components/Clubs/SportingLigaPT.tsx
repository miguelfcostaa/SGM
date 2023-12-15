import React from 'react';
import NavBar from '../NavBar';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';

const SportingLigaPT = () => {
    return (
        <>
            <NavBar />
            <div style={{ display: 'flex' }}>
                <img width={1100} height={846} src='https://cdn.discordapp.com/attachments/525052167007240224/1185266694453743656/2bedc9496d8fb450010a9bc8b6622428.jpg?ex=658efca1&is=657c87a1&hm=2f972db771daaad0fa31039eafdaaeb4b3cfb4ef27b7b6fd2728d78d22439ac7&' />

                <span style={{ fontSize: '2.8rem', fontFamily:'serif', marginLeft: 280, paddingTop: 50 }}> Sporting Stats </span>
            </div>
            
            <div className='logoRealMadrid'>
                <img width={250} height={350} src='https://logodownload.org/wp-content/uploads/2019/03/sporting-clube-de-portugal-logo-escudo.png'/>
            </div>

            <div className='chooseCompetitionBtn'>
                <DropdownButton id="dropdown-basic-button" title="Competitions" size='lg' variant="secondary">
                    <Dropdown.Item href="/club-career/sporting/">All Stats</Dropdown.Item>
                    <Dropdown.Item href="/club-career/sporting/ligaPT">Liga Portugal</Dropdown.Item>
                </DropdownButton>
            </div>


            <div className='gamesPlayed'>
                <span style={{ fontSize: 26, fontWeight: 'bold'}}> GAMES PLAYED </span>
                <span style={{ fontSize: 26, paddingLeft: 108 }}> 3 </span>
            </div>

            <div className='goals'>
                <span style={{ fontSize: 26, fontWeight: 'bold'}}> GOALS </span>
                <span style={{ fontSize: 26, paddingLeft: 218 }}> 2 </span>
            </div>

            <div className='assists'>
                <span style={{ fontSize: 26, fontWeight: 'bold'}}> ASSISTS </span>
                <span style={{ fontSize: 26, paddingLeft: 198 }}> 0 </span>
            </div>

            <div className='minutesPlayed'>
                <span style={{ fontSize: 26, fontWeight: 'bold'}}> MINUTES PLAYED </span>
                <span style={{ fontSize: 26, paddingLeft: 79 }}> 172' </span>
            </div>

            
        </>
    );
}

export default SportingLigaPT;