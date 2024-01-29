import React from 'react';
import './drawer.css'
import menubtn from '../../assets/menu button.png'
import mainLogo from '../../assets/main logo.png'
import contact from '../../assets/contact.png'
import box from '../../assets/Component 13box.svg'
import dividestar from '../../assets/dividestar.png'
import exclamation from '../../assets/exclamation.png'
import light from '../../assets/light.png'
import moon from '../../assets/moon 1dark.png'
import arrowleft from '../../assets/Iconarrowleft.png'
import settings from '../../assets/Iconsettings.png'
import arrowright from '../../assets/Iconarrowright.png'

function Drawer(props) {
    return (
        <div className='container'>
            <div className='top'>
                <a href=""><img src={mainLogo} style={{width: 30}} alt="" /></a>
                <a href=""><img src={menubtn} alt="" /></a>
                <a href=""><img src={contact} alt="" /></a>
                <a href=""><img src={box} alt="" /></a>
                <a href=""><img src={dividestar} alt="" /></a>
                <a href=""><img src={exclamation} alt="" /></a>
                <div className='ldarkcontainer'>
                    <a href=""><img src={light} className='ldark' alt="" /></a>
                    <a href=""><img src={moon} className='ldark' alt="" /></a>
                </div>
            </div>
            <div className='bottom'>
                <a href=""><img src={arrowleft} alt="" /></a>
                <a href=""><img src={settings} alt="" /></a>
                <a href=""><img src={arrowright} alt="" /></a>
            </div>
            <div></div>
        </div>
    );
}

export default Drawer;