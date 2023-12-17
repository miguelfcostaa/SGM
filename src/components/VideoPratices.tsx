import React from 'react';
import NavBar from './NavBar';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';

const VideoPratices = () => {
    return (
        <div style={{ background: '#414141', position: 'absolute', height: '100%', width: '100%' }}>
            <NavBar />
            <div className='filtro-videos'>
                <DropdownButton id="dropdown-basic-button" title="Best Moments" size='lg' variant="secondary">
                    <Dropdown.Item href="/video">Best Moments</Dropdown.Item>
                    <Dropdown.Item href="/videopratice">Pratices</Dropdown.Item>
                </DropdownButton>
            </div>
            <div className='flexVideos'>
                <div className='row'>
                    <div className='col-4'>
                        <a href='/video/playpratices' ><img height={300} width={400} src='https://cdn.discordapp.com/attachments/525052167007240224/1185992167748030535/image.png?ex=6591a047&is=657f2b47&hm=79f7f8f460778d7db73ea84419e54e5962763eb3634cf04022f8fbbd056641f7&' /></a>
                    </div>
                    <div className='col-4'>
                        <a href='/video'><img height={300} width={400} src='https://cdn.discordapp.com/attachments/525052167007240224/1185991799488118867/image.png?ex=65919fef&is=657f2aef&hm=e4e310d26e309fb06b2e298267b0f8e4d7bd27187910756b2577f39cd696f31a&' /></a>
                    </div>
                    <div className='col-4'>
                        <a href='/video'><img height={300} width={400} src='https://cdn.discordapp.com/attachments/525052167007240224/1185991455009931474/image.png?ex=65919f9d&is=657f2a9d&hm=e33498538a7417f634b7c12e2af1144a690341b7e467d158521dc6198ea1d44f&' /></a>
                    </div>
                </div>

            </div>

        </div>
    );
}

export default VideoPratices;