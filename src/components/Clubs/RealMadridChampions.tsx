import React from 'react';
import NavBar from '../NavBar';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';

const RealMadridChampions = () => {
    return (
        <>
            <NavBar />
            <div style={{ display: 'flex' }}>
                <img width={1100} height={846} src='https://pbs.twimg.com/media/FxDwNNwWcAAGT1a.jpg:large' />

                <span style={{ fontSize: '2.8rem', fontFamily:'serif', marginLeft: 280, paddingTop: 50 }}> Real Madrid Stats </span>
            </div>
            
            <div className='logoRealMadrid'>
                <img width={250} height={350} src='https://www.freepnglogos.com/uploads/real-madrid-logo-png/real-madrid-logo-large-images-3.png'/>
            </div>

            <div className='chooseCompetitionBtn'>
                <DropdownButton id="dropdown-basic-button" title="Competitions" size='lg' variant="secondary">
                    <Dropdown.Item href="/club-career/realMadrid/">All Stats</Dropdown.Item>
                    <Dropdown.Item href="/club-career/realMadrid/laliga">LaLiga</Dropdown.Item>
                    <Dropdown.Item href="/club-career/realMadrid/champions">Champions League</Dropdown.Item>
                </DropdownButton>
            </div>


            <div className='gamesPlayed'>
                <span style={{ fontSize: 26, fontWeight: 'bold'}}> GAMES PLAYED </span>
                <span style={{ fontSize: 26, paddingLeft: 80 }}> 101 </span>
            </div>

            <div className='goals'>
                <span style={{ fontSize: 26, fontWeight: 'bold'}}> GOALS </span>
                <span style={{ fontSize: 26, paddingLeft: 190 }}> 105 </span>
            </div>

            <div className='assists'>
                <span style={{ fontSize: 26, fontWeight: 'bold'}}> ASSISTS </span>
                <span style={{ fontSize: 26, paddingLeft: 184 }}> 31 </span>
            </div>

            <div className='minutesPlayed'>
                <span style={{ fontSize: 26, fontWeight: 'bold'}}> MINUTES PLAYED </span>
                <span style={{ fontSize: 26, paddingLeft: 59 }}> 9.018' </span>
            </div>

            <div className='trophies'>
                <span style={{ fontSize: 26, fontWeight: 'bold'}}> TROPHIES </span>
                <span style={{ fontSize: 26, paddingLeft: 160 }}> 17 </span>
            </div>
            
            
        </>
    );
}

export default RealMadridChampions;