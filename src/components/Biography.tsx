import React from 'react';
import NavBar from './NavBar';
import { Box } from '@mui/material';

const Biography = () => {
    return (
        <div style={{ background: '#E6E6E6', position: 'absolute', height: '200%', width: '100%' }}>
            <NavBar />

            <span className="bioTitle">
                Biography
            </span>
            <img className='imgBio' height={355} width={240} src='https://cdn.discordapp.com/attachments/707687832239603863/1178771992082653244/image.png?ex=65775bf7&is=6564e6f7&hm=d12904b94d11da7adc667808ad4cc6dabf5b177205a7a1cd9cf7fe8d503be942&' />
            
            
            <div className='whiteBoxTitleAbout'>
                <span style={{ fontSize: '2.2rem', fontFamily:'serif'}}>About</span>
            </div>
            <div className='whiteBoxAbout'> 
                <span style={{ fontSize: 22, fontWeight: 'bold'}}> NAME </span>
                <span style={{ fontSize: 22, paddingLeft: 250 }}> Cristiano Ronaldo dos Santos Aveiro </span>
                <p></p>
                <span style={{ fontSize: 22, fontWeight: 'bold'}}> AGE </span>
                <span style={{ fontSize: 22, paddingLeft: 320 }}> 38 years old (5/02/1985) </span>
                <p></p>
                <span style={{ fontSize: 22, fontWeight: 'bold'}}> LOCATION </span>
                <span style={{ fontSize: 22, paddingLeft: 260 }}> Funchal, Madeira Island </span>
                <p></p>
                <span style={{ fontSize: 22, fontWeight: 'bold'}}> HEIGHT </span>
                <span style={{ fontSize: 22, paddingLeft: 380 }}> 189cm </span>
                <p></p>
                <span style={{ fontSize: 22, fontWeight: 'bold'}}> NATIONALITY </span>
                <span style={{ fontSize: 22, paddingLeft: 290 }}> Portuguese <img height={20} width={28} src='https://www.countryflags.com/wp-content/uploads/portugal-flag-400.png'/> </span>
            </div>


            <div className='flexCarrerStatsAndTransfer'>
                <div className='row'>
                    <div className='col-6'>
                        <div className='whiteBoxTitleCareerStats'>
                            <span style={{ fontSize: '2.2rem', fontFamily:'serif'}}> Career Stats </span>
                        </div>
                        <div className='whiteBoxCareerStats'>
                            <span style={{ fontSize: 22, fontWeight: 'bold'}}> GAMES PLAYED </span>
                            <span style={{ fontSize: 22, paddingLeft: 250 }}> 1187 </span>
                            <p></p>
                            <span style={{ fontSize: 22, fontWeight: 'bold'}}> GOALS </span>
                            <span style={{ fontSize: 22, paddingLeft: 350 }}> 837 </span>
                            <p></p>
                            <span style={{ fontSize: 22, fontWeight: 'bold'}}> ASSISTS </span>
                            <span style={{ fontSize: 22, paddingLeft: 335 }}> 279 </span>
                            <p></p>
                            <span style={{ fontSize: 22, fontWeight: 'bold'}}> MINUTES PLAYED </span>
                            <span style={{ fontSize: 22, paddingLeft: 220 }}> 96537 </span>
                            <p></p>
                            <span style={{ fontSize: 22, fontWeight: 'bold'}}> TROPHIES </span>
                            <span style={{ fontSize: 22, paddingLeft: 320 }}> 35 </span>
                            <p></p>
                        </div>
                    </div>

                    <div className='col-6'>
                        <div className='whiteBoxTitleTransferHist'>
                            <span style={{ fontSize: '2.2rem', fontFamily:'serif'}}> Transfer History <a href='/career' ><img height={29} width={29} src='https://cdn.discordapp.com/attachments/707687832239603863/1183456013748293803/resize-64.png?ex=6588664d&is=6575f14d&hm=7871078fb612aef161c566b88928fdb7ac8c804c47c734039ced793338f7618b&' /></a> </span>
                        </div>
                        <div className='whiteBoxTransferHist'>
                            <img height={30} width={25} src='https://cdn.discordapp.com/attachments/707687832239603863/1174751638746046544/image.png?ex=6568bbb8&is=655646b8&hm=753884d5225298a7a46b3699983abce87cd67ddb7514c14fadda144a111032e0&'/><span style={{ fontSize: 22, paddingLeft: 15 }}> Andorinha </span>
                            <p></p>
                            <img height={26} width={26} src='https://cdn.discordapp.com/attachments/707687832239603863/1174751857705496716/image.png?ex=6568bbec&is=655646ec&hm=c4acb50a18c85232f40bf22badc87ecf3e6c77b774321428bc89b39da1a119b1&'/><span style={{ fontSize: 22, paddingLeft: 15 }}> Nacional </span>
                            <p></p>
                            <img height={28} width={26} src='https://cdn.discordapp.com/attachments/707687832239603863/1174751909236703354/image.png?ex=6568bbf8&is=655646f8&hm=e6f75bde1f81ff84fec9a729e2b7bccae57975afb5b57770e8011a9367ebbf0b&'/><span style={{ fontSize: 22, paddingLeft: 15 }}> Sporting </span>
                            <p></p>
                            <img height={30} width={28} src='https://cdn.discordapp.com/attachments/707687832239603863/1175102886116589568/image.png?ex=656a02d8&is=65578dd8&hm=dba795eb5269ef215f31ebb5474e1e908ca22cfe58f578d9333097c7b7c2e6be&'/><span style={{ fontSize: 22, paddingLeft: 15 }}> Manchester United </span>
                            <p></p>
                            <img height={30} width={28} src='https://cdn.discordapp.com/attachments/707687832239603863/1175103710414782494/image.png?ex=656a039c&is=65578e9c&hm=4956999a0dad65f45b4e2509cb10bc3347fbed7ccbc50db3153562065feba05b&'/><span style={{ fontSize: 22, paddingLeft: 15 }}> Real Madrid </span>
                            <p></p>
                            <img height={25} width={20} src='https://cdn.discordapp.com/attachments/707687832239603863/1175109934359257148/image.png?ex=656a0968&is=65579468&hm=39a757687e71f6701188d719de4c0c62d8dea865e8b20c90f1d51190b599e792&'/><span style={{ fontSize: 22, paddingLeft: 15 }}> Juventus </span>
                            <p></p>
                            <img height={28} width={25} src='https://cdn.discordapp.com/attachments/707687832239603863/1175109967846584360/image.png?ex=656a0970&is=65579470&hm=1822422ac603b25fcd87506e11e0d45b72dfcad0dd0c86895ccc54d9c6bb6454&'/><span style={{ fontSize: 22, paddingLeft: 15 }}> Al-Nassr </span>
                            <p></p>
                        </div>
                    </div>
                </div>
                    <div className='whiteBoxTitleEarlyLife'>
                        <span style={{ fontSize: '2.2rem', fontFamily:'serif'}}> Early life and career </span>
                    </div>
                    <div className='whiteBoxEarlyLife'>
                        <span style={{ fontSize: 22 }}>
                            <p style={{ textIndent: 50 }}> Ronaldo’s father, José Dinis Aveiro, was the equipment manager for the local club Andorinha. (The name Ronaldo was added to Cristiano’s name in honour of his father’s favourite movie actor, Ronald Reagan, who was U.S. president at the time of Cristiano’s birth.) At age 15 Ronaldo was diagnosed with a heart condition that necessitated surgery, but he was sidelined only briefly and made a full recovery. He first played for Clube Desportivo Nacional of Madeira and then transferred to Sporting Clube de Portugal (known as Sporting Lisbon), where he played for that club’s various youth teams before making his debut on Sporting’s first team in 2002.</p>
                            <p style={{ textIndent: 50 }}> A tall player at 6 feet 1 inch (1.85 metres), Ronaldo was a formidable athlete on the pitch. Originally a right-winger, he developed into a forward with a free-reined attacking style. He was able to mesmerize opponents with a sleight of foot that made sufficient space for openings in opposing defenses.</p>
                        </span>
                    </div>
                    <div className='whiteBoxCheckTimeline'>
                        <span style={{ fontSize: '2.2rem', fontFamily:'serif'}}> Check Timeline <a href='/timeline1' ><img height={29} width={29} src='https://cdn.discordapp.com/attachments/707687832239603863/1183456013748293803/resize-64.png?ex=6588664d&is=6575f14d&hm=7871078fb612aef161c566b88928fdb7ac8c804c47c734039ced793338f7618b&' className='hyperlink' /></a> </span>
                    </div>
            </div>
        </div>
    );
}

export default Biography;