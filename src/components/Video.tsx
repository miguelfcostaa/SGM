import React from 'react';
import NavBar from './NavBar';

const Video = () => {
    return (
        <div style={{ background: '#414141', position: 'absolute', height: '100%', width: '100%' }}>
            <NavBar />
            
            <div className='flexVideos'>
                <div className='row'>
                    <div className='col-4'>
                        <a href='/video/play' ><img height={300} width={400} src='https://cdn.discordapp.com/attachments/525052167007240224/1185637433753206878/image.png?ex=659055e8&is=657de0e8&hm=cbf36d3fedcbfe298d61435aadf58cda802b65d3a0c8bf75080e3a84d3f370eb&' /></a>
                    </div>
                    <div className='col-4'>
                        <a href='/video'><img height={300} width={400} src='https://cdn.discordapp.com/attachments/525052167007240224/1185632767598415983/image.png?ex=6590518f&is=657ddc8f&hm=bcde6268abefedffea067520dc564ed5a6663e7df0cb8d7bb7ac9c9c731367c1&' /></a>
                    </div>
                    <div className='col-4'>
                        <a href='/video'><img height={300} width={400} src='https://cdn.discordapp.com/attachments/525052167007240224/1185632798611087411/image.png?ex=65905197&is=657ddc97&hm=e8e0ae5a375b4d6e07d202aeb847053347260e51c232a98c649ab549267ecba9&' /></a>
                    </div>
                </div>

                <div className='row'>
                    <div className='col-4'>
                        <a href='/video'><img height={300} width={400} src='https://cdn.discordapp.com/attachments/525052167007240224/1185632831012090016/image.png?ex=6590519e&is=657ddc9e&hm=8cb0aa847b2827a8b8e39aa8dfcd6ff25b7fbe35c684f1f26b6e1898b3df6fd0&' /></a>
                    </div>
                    <div className='col-4'>
                        <a href='/video'><img height={300} width={400} src='https://cdn.discordapp.com/attachments/525052167007240224/1185632882836910140/image.png?ex=659051ab&is=657ddcab&hm=7d919eea222c56fff2f714a58d9f855f0b3621ed529591357aae5890aaaf44d9&' /></a>
                    </div>
                    <div className='col-4'>
                        <a href='/video'><img height={300} width={400} src='https://cdn.discordapp.com/attachments/525052167007240224/1185632883189219499/image.png?ex=659051ab&is=657ddcab&hm=535c633db1740f336c1ac2a48cf64d4b26fed7eb5ce773c563f57ce4a2f70545&' /></a>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default Video;