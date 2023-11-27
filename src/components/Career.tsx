import React from 'react';
import NavBar from './NavBar';
import { Box } from '@mui/material';

const Career = () => {
    return (
        <>
            <NavBar />
            <img className='imgCareer' src='https://cdn.discordapp.com/attachments/707687832239603863/1174739018634772540/image.png?ex=6568aff7&is=65563af7&hm=e8686f8bb42c2e636fcaa47956d673fe2739c014dc7a259471ccb65e27f1093e&' />
            <span style={{ overflow: 'hidden' , position: 'absolute', top: '15%', left: '40%', fontSize: 60, fontFamily: 'Times New Roman' }}>Transfer History</span>
            <img className='imgTranferHistory' height={400} src='https://cdn.discordapp.com/attachments/707687832239603863/1175105574040510474/image.png?ex=656a0559&is=65579059&hm=9238127684029d25ad9ae5f97059fcd0c8b8575dab7a1bcb3157448f15775e03&'/>
            
            
            <a href='/career/andorinha' ><img className='imgAndorinha' src='https://cdn.discordapp.com/attachments/707687832239603863/1174751638746046544/image.png?ex=6568bbb8&is=655646b8&hm=753884d5225298a7a46b3699983abce87cd67ddb7514c14fadda144a111032e0&'/></a>
            <a href='/career/nacional' ><img className='imgNacional' src='https://cdn.discordapp.com/attachments/707687832239603863/1174751857705496716/image.png?ex=6568bbec&is=655646ec&hm=c4acb50a18c85232f40bf22badc87ecf3e6c77b774321428bc89b39da1a119b1&'/></a>
            <a href='/career/sporting' ><img className='imgSporting'  src='https://cdn.discordapp.com/attachments/707687832239603863/1174751909236703354/image.png?ex=6568bbf8&is=655646f8&hm=e6f75bde1f81ff84fec9a729e2b7bccae57975afb5b57770e8011a9367ebbf0b&'/></a>
            <a href='/career/manUnited' ><img className='imgManUnited' src='https://cdn.discordapp.com/attachments/707687832239603863/1175102886116589568/image.png?ex=656a02d8&is=65578dd8&hm=dba795eb5269ef215f31ebb5474e1e908ca22cfe58f578d9333097c7b7c2e6be&' /></a>
            <a href='/career/realMadrid' ><img className='imgRealMadrid' src='https://cdn.discordapp.com/attachments/707687832239603863/1175103710414782494/image.png?ex=656a039c&is=65578e9c&hm=4956999a0dad65f45b4e2509cb10bc3347fbed7ccbc50db3153562065feba05b&' /></a>
            <a href='/career/juventus' ><img className='imgJuventus' src='https://cdn.discordapp.com/attachments/707687832239603863/1175109934359257148/image.png?ex=656a0968&is=65579468&hm=39a757687e71f6701188d719de4c0c62d8dea865e8b20c90f1d51190b599e792&' /></a>
            <a href='/career/manUnited2' ><img className='imgManUnited2' src='https://cdn.discordapp.com/attachments/707687832239603863/1175102886116589568/image.png?ex=656a02d8&is=65578dd8&hm=dba795eb5269ef215f31ebb5474e1e908ca22cfe58f578d9333097c7b7c2e6be&' /></a>
            <a href='/career/al-nassr' ><img className='imgAlNassr' src='https://cdn.discordapp.com/attachments/707687832239603863/1175109967846584360/image.png?ex=656a0970&is=65579470&hm=1822422ac603b25fcd87506e11e0d45b72dfcad0dd0c86895ccc54d9c6bb6454&' /></a>
        </>
    );
}

export default Career;