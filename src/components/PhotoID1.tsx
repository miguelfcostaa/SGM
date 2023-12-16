import React from 'react';
import NavBar from './NavBar';
import { useParams } from 'react-router-dom';
import Button from 'react-bootstrap/Button';


const PhotoID = () => {


    return (
        <div style={{ background: '#414141', position: 'absolute', height: '100%', width: '100%' }}>
            <NavBar />

            <div className='photoIDcenter'>
                <img height={500} width={500} src='https://64.media.tumblr.com/aa70522f93cb0dd091e70ff6277d7120/863d550f350bb3d5-bc/s1280x1920/c406e597f998877614a8be87333aef4b3d2ab4eb.jpg'></img>

            </div>
            
            <div className='photoDetails'>
                <span>Original link: <a>https://64.media.tumblr.com/aa70522f93cb0dd091e70ff6277d7120/863d550f350bb3d5-bc/s1280x1920/c406e597f998877614a8be87333aef4b3d2ab4eb.jpg</a></span>
            </div>

            <Button variant="danger" size="lg" className='btnDownload'> Download </Button>
            <Button variant="danger" size="lg" className='btnGetLink'> View Image </Button>

        </div>
    );
}

export default PhotoID;