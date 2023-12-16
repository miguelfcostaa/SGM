import React from 'react';
import NavBar from '../NavBar';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';

const Sporting = () => {
    return (
        <>
            <NavBar />
            <div style={{ display: 'flex' }}>
                <img width={1100} height={846} src='https://www.mktesportivo.com/wp-content/uploads/2018/09/germany-only-cristiano-ronaldo-juventus-turin_91qwx9v5oipp1b6lem1kn12y8_B0DFEE5D-49CF-4E40-83FC-8895FC77F1F4.jpg' />

                <span style={{ fontSize: '2.8rem', fontFamily:'serif', marginLeft: 320, paddingTop: 50 }}> Sporting Stats </span>
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
                <span style={{ fontSize: 26, paddingLeft: 94 }}> 31 </span>
            </div>

            <div className='goals'>
                <span style={{ fontSize: 26, fontWeight: 'bold'}}> GOALS </span>
                <span style={{ fontSize: 26, paddingLeft: 218 }}> 5 </span>
            </div>

            <div className='assists'>
                <span style={{ fontSize: 26, fontWeight: 'bold'}}> ASSISTS </span>
                <span style={{ fontSize: 26, paddingLeft: 198 }}> 6 </span>
            </div>

            <div className='minutesPlayed'>
                <span style={{ fontSize: 26, fontWeight: 'bold'}}> MINUTES PLAYED </span>
                <span style={{ fontSize: 26, paddingLeft: 59 }}> 1.391' </span>
            </div>

            <div className='trophies'>
                <span style={{ fontSize: 26, fontWeight: 'bold'}}> TROPHIES </span>
                <span style={{ fontSize: 26, paddingLeft: 174 }}> 1 </span>
            </div>
            
            
        </>
    );
}

export default Sporting;