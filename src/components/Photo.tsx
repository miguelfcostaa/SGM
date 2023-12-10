import React from 'react';
import NavBar from './NavBar';
import { Link, useParams } from 'react-router-dom';

const Photo = () => {

    let params = useParams();

    const imagem1 = "https://64.media.tumblr.com/aa70522f93cb0dd091e70ff6277d7120/863d550f350bb3d5-bc/s1280x1920/c406e597f998877614a8be87333aef4b3d2ab4eb.jpg";
    const imagem2 = "https://pbs.twimg.com/media/E9zTn2bWEAAD8W6.jpg:large";
    const imagem3 = "https://e0.365dm.com/17/12/2048x1152/skysports-cristiano-ronaldo-real-madrid-football_4178227.jpg?20171209155617";
    const imagem4 = "https://assets.goal.com/v3/assets/bltcc7a7ffd2fbf71f5/blt5648e027198a434f/64162a3012c1f4425a6f02e0/Cristiano_Ronaldo_2022-23.jpg?auto=webp&format=pjpg&width=3840&quality=60";


    console.log("photo link: ", params.link);

    return (
        <>
            <NavBar />
            
            <div className='flexPhotos'>
                <div className="row">
                    <div className='col-3'>
                        <img height={300} width={300} src={ imagem1 } />
                    </div>
                    <div className='col-4'>
                        <img height={300} width={400} src={ imagem2 } />
                    </div>
                    <div className='col-5'>
                        <img height={300} width={500} src={ imagem3 } />
                    </div>
                </div>
                <div className="row">
                    <div className='col-6'>
                        <img height={300} width={500} src={ imagem4 } />
                    </div>
                    <div className='col-6'>
                        <img height={300} width={500} src={ imagem4 } />
                    </div>
                </div>
            </div>

        
        </>
    );
}

export default Photo;