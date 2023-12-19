import React from 'react';
import NavBar from './NavBar';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';

const PortugalStats = () => {
    return (
        <>
            <NavBar />
            <div style={{ display: 'flex' }}>
                <img width={1100} height={846} src='https://cdn.discordapp.com/attachments/525052167007240224/1186436949515452476/topshot-fbl-eur-nations-swe-por.jpeg?ex=65933e83&is=6580c983&hm=6deb6495ce14b64b190c21398f377cc8ce70a26cb8d968f890044b116d65fc06&' />

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
                <span style={{ fontSize: 26, paddingLeft: 94 }}> 205 </span>
            </div>

            <div className='goals'>
                <span style={{ fontSize: 26, fontWeight: 'bold'}}> GOALS </span>
                <span style={{ fontSize: 26, paddingLeft: 204 }}> 128 </span>
            </div>

            <div className='assists'>
                <span style={{ fontSize: 26, fontWeight: 'bold'}}> ASSISTS </span>
                <span style={{ fontSize: 26, paddingLeft: 184 }}> 46 </span>
            </div>

            <div className='minutesPlayed'>
                <span style={{ fontSize: 26, fontWeight: 'bold'}}> MINUTES PLAYED </span>
                <span style={{ fontSize: 26, paddingLeft: 59 }}> 16.215' </span>
            </div>

            <div className='trophies'>
                <span style={{ fontSize: 26, fontWeight: 'bold'}}> TROPHIES </span>
                <span style={{ fontSize: 26, paddingLeft: 174 }}> 2 </span>
            </div>
        </>
    );
}

export default PortugalStats;