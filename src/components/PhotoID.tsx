import React from 'react';
import NavBar from './NavBar';
import { useParams } from 'react-router-dom';
import Button from 'react-bootstrap/Button';


const PhotoID = () => {

    const params : any = useParams();

    const images : any = {
        1 : "https://64.media.tumblr.com/aa70522f93cb0dd091e70ff6277d7120/863d550f350bb3d5-bc/s1280x1920/c406e597f998877614a8be87333aef4b3d2ab4eb.jpg",
        2 : "https://pbs.twimg.com/media/E9zTn2bWEAAD8W6.jpg:large",
        3 : "https://e0.365dm.com/17/12/2048x1152/skysports-cristiano-ronaldo-real-madrid-football_4178227.jpg?20171209155617",
        4 : "https://assets.goal.com/v3/assets/bltcc7a7ffd2fbf71f5/blt5648e027198a434f/64162a3012c1f4425a6f02e0/Cristiano_Ronaldo_2022-23.jpg?auto=webp&format=pjpg&width=3840&quality=60",
        5 : "https://cdn.record.pt/images/2023-10/img_476x268$2023_10_26_23_02_19_2184916.png",
        6 : "https://thumbs.web.sapo.io/?W=800&H=0&delay_optim=1&epic=ZDA5IuWFrmPp5lfBpyWfpPGzO5k/qFITXmoHH6BvrgWq47rGiW1YRYFGGdxh2e9QVjumS2KLLIk82kj2479sjbTijA==",
        7 : "https://s2.glbimg.com/jDqtJQnC-TFq0Hu3pfsHedqo_L0=/smart/e.glbimg.com/og/ed/f/original/2022/03/29/cristiano-ronaldo-portugal-copa-2022-catar.jpg",
        8 : "https://asset.skoiy.com/ojonxcycnuapxiqs/rdywotfhvcuz.jpg?w=1852&q=80",
        9 : "https://i.pinimg.com/564x/e8/9d/2e/e89d2e33972ec97951fd12478e806e10.jpg",
        10 :  "https://historyofsoccer.info/wp-content/uploads/2022/08/cristiano-ronaldo-at-a-young-age.webp",
        11 : "https://images.sportsbrief.com/images/1200x675/3f1d3f0d168d156e.jpeg?v=1",
        12 : "https://www.messivsronaldo.app/static/2eb7b3c323c98e81a8e6333bf4dba90a/edb0e/fergie-ronaldo.png",
    };

    const selectedImage = images[params.id]; 

    return (
        <div style={{ background: '#414141', position: 'absolute', height: '100%', width: '100%' }}>
            <NavBar />

            <div className='photoIDcenter'>
                <img height={500} width={500} src={selectedImage}></img>

            </div>

            <Button variant="danger" size="lg" className='btnDownload'> Download </Button>
            <Button variant="danger" size="lg" className='btnGetLink'> Get Link </Button>

        </div>
    );
}

export default PhotoID;