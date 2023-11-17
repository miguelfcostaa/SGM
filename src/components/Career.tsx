import React from 'react';
import NavBar from './NavBar';

const Career = () => {
    return (
        <>
            <NavBar />
            <img className='imgCareer' src='https://cdn.discordapp.com/attachments/707687832239603863/1174739018634772540/image.png?ex=6568aff7&is=65563af7&hm=e8686f8bb42c2e636fcaa47956d673fe2739c014dc7a259471ccb65e27f1093e&' />
            <span style={{ fontSize: 2.5 }}>Transfer History</span>
            <img className='imgTranferHistory' height={400} src='https://cdn.discordapp.com/attachments/707687832239603863/1174736180227616868/image.png?ex=6568ad52&is=65563852&hm=8019b97b1ed0c63a9e0ea1cf538c40e9ed2f29cdd89c2acf1f6cef0106f00fc5&'/>

            <a href='/career/andorinha' ><img className='imgAndorinha' src='https://cdn.discordapp.com/attachments/707687832239603863/1174751638746046544/image.png?ex=6568bbb8&is=655646b8&hm=753884d5225298a7a46b3699983abce87cd67ddb7514c14fadda144a111032e0&'/></a>
            <a href='/career/nacional' ><img className='imgNacional' src='https://cdn.discordapp.com/attachments/707687832239603863/1174751857705496716/image.png?ex=6568bbec&is=655646ec&hm=c4acb50a18c85232f40bf22badc87ecf3e6c77b774321428bc89b39da1a119b1&'/></a>
            <a href='/career/sporting' ><img className='imgSporting'  src='https://cdn.discordapp.com/attachments/707687832239603863/1174751909236703354/image.png?ex=6568bbf8&is=655646f8&hm=e6f75bde1f81ff84fec9a729e2b7bccae57975afb5b57770e8011a9367ebbf0b&'/></a>
            <img className='imgManUnited' />
        
        </>
    );
}

export default Career;