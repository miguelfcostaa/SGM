import React from 'react';
import NavBar from './NavBar';
import { Link, useParams } from 'react-router-dom';
import Card from '@mui/material/Card';

const Photo = () => {

    let params = useParams();

    const imagem1 = "https://64.media.tumblr.com/aa70522f93cb0dd091e70ff6277d7120/863d550f350bb3d5-bc/s1280x1920/c406e597f998877614a8be87333aef4b3d2ab4eb.jpg";
    const imagem2 = "https://pbs.twimg.com/media/E9zTn2bWEAAD8W6.jpg:large";
    const imagem3 = "https://e0.365dm.com/17/12/2048x1152/skysports-cristiano-ronaldo-real-madrid-football_4178227.jpg?20171209155617";
    const imagem4 = "https://assets.goal.com/v3/assets/bltcc7a7ffd2fbf71f5/blt5648e027198a434f/64162a3012c1f4425a6f02e0/Cristiano_Ronaldo_2022-23.jpg?auto=webp&format=pjpg&width=3840&quality=60";
    const imagem5 = "https://cdn.record.pt/images/2023-10/img_476x268$2023_10_26_23_02_19_2184916.png";
    const imagem6 = "https://thumbs.web.sapo.io/?W=800&H=0&delay_optim=1&epic=ZDA5IuWFrmPp5lfBpyWfpPGzO5k/qFITXmoHH6BvrgWq47rGiW1YRYFGGdxh2e9QVjumS2KLLIk82kj2479sjbTijA==";
    const imagem7 = "https://s2.glbimg.com/jDqtJQnC-TFq0Hu3pfsHedqo_L0=/smart/e.glbimg.com/og/ed/f/original/2022/03/29/cristiano-ronaldo-portugal-copa-2022-catar.jpg";
    const imagem8 = "https://asset.skoiy.com/ojonxcycnuapxiqs/rdywotfhvcuz.jpg?w=1852&q=80";
    const imagem9 = "https://i.pinimg.com/564x/e8/9d/2e/e89d2e33972ec97951fd12478e806e10.jpg";
    const imagem10 = "https://historyofsoccer.info/wp-content/uploads/2022/08/cristiano-ronaldo-at-a-young-age.webp";
    const imagem11 = "https://images.sportsbrief.com/images/1200x675/3f1d3f0d168d156e.jpeg?v=1"; 
    const imagem12 = "https://www.messivsronaldo.app/static/2eb7b3c323c98e81a8e6333bf4dba90a/edb0e/fergie-ronaldo.png"; 

    return (
        <div style={{ background: '#414141', position: 'absolute', height: '170%', width: '100%' }}>
            <NavBar />
            
            <div className='flexPhotos'>
                <div className="row">
                    <div className='col-3'>
                        <a href='/photo/1' ><img className="photo" style={{ transition: 'transform 1s, width 1s, height 0.5s' }} height={300} width={300} src={ imagem1 } /></a>
                    </div>
                    <div className='col-5'>
                        <a href='/photo/2' ><img className="photo" style={{ transition: 'transform 1s, width 1s, height 1s' }} height={300} width={500} src={ imagem2 } /></a>
                    </div>
                    <div className='col-4'>
                        <a href='/photo/3' ><img className="photo" style={{ transition: 'transform 1s, width 1s, height 1s' }} height={300} width={450} src={ imagem3 } /></a>
                    </div>
                </div>
                <div className="row">
                    <div className='col-4'>
                        <a href='/photo/4' ><img className="photo" style={{ transition: 'transform 1s, width 1s, height 1s' }} height={300} width={500} src={ imagem4 } /></a>
                    </div>
                    <div className='col-4'>
                        <a href='/photo/5' ><img className="photo" style={{ transition: 'transform 1s, width 1s, height 1s' }} height={300} width={500} src={ imagem5 } /></a>
                    </div>
                    <div className='col-4'>
                        <a href='/photo/6' ><img className="photo" style={{ transition: 'transform 1s, width 1s, height 1s' }} height={300} width={500} src={ imagem6 } /></a>
                    </div>
                </div>
                <div className="row">
                    <div className='col-4'>
                        <a href='/photo/7' ><img className="photo" style={{ transition: 'transform 1s, width 1s, height 1s' }} height={300} width={450} src={ imagem7 } /></a>
                    </div>
                    <div className='col-5'>
                        <a href='/photo/8' ><img className="photo" style={{ transition: 'transform 1s, width 1s, height 1s' }} height={300} width={500} src={ imagem8 } /></a>
                    </div>
                    <div className='col-3'>
                        <a href='/photo/9' ><img className="photo" style={{ transition: 'transform 1s, width 1s, height 1s' }} height={300} width={400} src={ imagem9 } /></a>
                    </div>
                </div>
                <div className="row">
                    <div className='col-4'>
                        <a href='/photo/10' ><img className="photo" style={{ transition: 'transform 1s, width 1s, height 1s' }} height={300} width={350} src={ imagem10 } /></a>
                    </div>
                    <div className='col-5'>
                        <a href='/photo/11' ><img className="photo" style={{ transition: 'transform 1s, width 1s, height 1s' }} height={300} width={500} src={ imagem11 } /></a>
                    </div>
                    <div className='col-3'>
                        <a href='/photo/12' ><img className="photo" style={{ transition: 'transform 1s, width 1s, height 1s' }} height={300} width={400} src={ imagem12 } /></a>
                    </div>
                </div>
            </div>
            <span>  </span>
            <span>  </span>
            <span>  </span>
        
        </div>
    );
}

export default Photo;