import React from 'react';
import NavBar from './NavBar';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';

const PortugalstatsEuroCup = () => {
    return (
        <>
            <NavBar />
            <div style={{ display: 'flex' }}>
                <img width={1100} height={846} src='https://cdn.discordapp.com/attachments/525052167007240224/1185998881406857388/Ronaldoselecao.jpg?ex=6591a688&is=657f3188&hm=207418960af8cf1d831bd3c515bff5da850a64cb24fbb594cf8b47ef3d6cd44b&' />

                <span style={{ fontSize: '2.8rem', fontFamily:'serif', marginLeft: 320, paddingTop: 50 }}> Portugal stats </span>
            </div>
            
            <div className='logoAlNassr'>
                <img width={230} height={300} src='https://upload.wikimedia.org/wikipedia/pt/7/75/Portugal_FPF.png'/>
            </div>

            <div className='chooseCompetitionBtn'>
                <DropdownButton id="dropdown-basic-button" title="Competitions" size='lg' variant="secondary">
                    <Dropdown.Item href="/portugalstats">All Stats</Dropdown.Item>
                    <Dropdown.Item href="/portugalstatseurocup">EuroCup</Dropdown.Item>
                </DropdownButton>
            </div>


            <div className='gamesPlayed'>
                <span style={{ fontSize: 26, fontWeight: 'bold'}}> GAMES PLAYED </span>
                <span style={{ fontSize: 26, paddingLeft: 94 }}> 25 </span>
            </div>

            <div className='goals'>
                <span style={{ fontSize: 26, fontWeight: 'bold'}}> GOALS </span>
                <span style={{ fontSize: 26, paddingLeft: 204 }}> 14 </span>
            </div>

            <div className='assists'>
                <span style={{ fontSize: 26, fontWeight: 'bold'}}> ASSISTS </span>
                <span style={{ fontSize: 26, paddingLeft: 184 }}> 9 </span>
            </div>

            <div className='minutesPlayed'>
                <span style={{ fontSize: 26, fontWeight: 'bold'}}> MINUTES PLAYED </span>
                <span style={{ fontSize: 26, paddingLeft: 59 }}> 2.154' </span>
            </div>

            <div className='trophies'>
                <span style={{ fontSize: 26, fontWeight: 'bold'}}> TROPHIES </span>
                <span style={{ fontSize: 26, paddingLeft: 174 }}> 1 </span>
            </div>
            
            
        </>
    );
}

export default PortugalstatsEuroCup;