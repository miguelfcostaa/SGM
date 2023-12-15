import React from 'react';
import NavBar from '../NavBar';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';

const ManUnitedPremier = () => {
    return (
        <>
            <NavBar />
            <div style={{ display: 'flex' }}>
                <img width={1100} height={846} src='https://placar.com.br/wp-content/uploads/2021/09/GettyImages-81191334.jpg' />

                <span style={{ fontSize: '2.8rem', fontFamily:'serif', marginLeft: 230, paddingTop: 50 }}> Manchester United Stats </span>
            </div>
            
            <div className='logoManUnited'>
                <img width={350} height={350} src='https://www.freepnglogos.com/uploads/manchester-united-logo-png/manchester-united-logo-manchester-united-wallpapers-wallpaper-cave-0.png'/>
            </div>

            <div className='chooseCompetitionBtn'>
                <DropdownButton id="dropdown-basic-button" title="Competitions" size='lg' variant="secondary">
                    <Dropdown.Item href="/club-career/manUnited/">All Stats</Dropdown.Item>
                    <Dropdown.Item href="/club-career/manUnited/premier">Premier League</Dropdown.Item>
                    <Dropdown.Item href="/club-career/manUnited/champions">Champions League</Dropdown.Item>
                </DropdownButton>
            </div>


            <div className='gamesPlayed'>
                <span style={{ fontSize: 26, fontWeight: 'bold'}}> GAMES PLAYED </span>
                <span style={{ fontSize: 26, paddingLeft: 80 }}> 236 </span>
            </div>

            <div className='goals'>
                <span style={{ fontSize: 26, fontWeight: 'bold'}}> GOALS </span>
                <span style={{ fontSize: 26, paddingLeft: 190 }}> 103 </span>
            </div>

            <div className='assists'>
                <span style={{ fontSize: 26, fontWeight: 'bold'}}> ASSISTS </span>
                <span style={{ fontSize: 26, paddingLeft: 184 }}> 39 </span>
            </div>

            <div className='minutesPlayed'>
                <span style={{ fontSize: 26, fontWeight: 'bold'}}> MINUTES PLAYED </span>
                <span style={{ fontSize: 26, paddingLeft: 45 }}> 17.517' </span>
            </div>

            
            
        </>
    );
}

export default ManUnitedPremier;