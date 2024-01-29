import React, { useState } from 'react';
import './header.css'
import calendar from '../../assets/solar_calendar-linear.svg'
import bell from '../../assets/solar_bell-outline.svg'
import person from '../../assets/Profile.png'
import arrow from '../../assets/Arrow---Down-2.png'

function Header(props) { 
    const [userModal, setuserModal] = useState(false);
    const [showSearchBar, setshowSearchBar] = useState(false);

    return (
        <div className='headercontainer'>
            <h3 style={{paddingLeft: '1em'}}>Dashhboard</h3>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div style={{display:'flex', alignItems:'center'}}>
            <svg onClick={()=>{setshowSearchBar(!showSearchBar)}} className='searchbtn' width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M8.68945 1C12.9293 1 16.3781 4.3727 16.3781 8.51907C16.3781 10.4753 15.6104 12.2595 14.3542 13.5986L16.8261 16.0109C17.0574 16.2371 17.0582 16.6031 16.8269 16.8294C16.7116 16.9436 16.5592 17 16.4076 17C16.2568 17 16.1052 16.9436 15.9892 16.8309L13.4874 14.3912C12.1714 15.4219 10.5028 16.0389 8.68945 16.0389C4.44955 16.0389 1 12.6655 1 8.51907C1 4.3727 4.44955 1 8.68945 1ZM8.68945 2.15821C5.10251 2.15821 2.18433 5.01125 2.18433 8.51907C2.18433 12.0269 5.10251 14.8807 8.68945 14.8807C12.2756 14.8807 15.1938 12.0269 15.1938 8.51907C15.1938 5.01125 12.2756 2.15821 8.68945 2.15821Z" fill="#78828A"/>
            </svg>
            {showSearchBar?
            <input name='search' type='search' className='searchPopUp' 
                placeholder='search'
            />
            :
            <input name='search' type='search' className='search disappear' placeholder='search'/>}
            </div>
            <div style={{display:'flex', flexDirection:'row'}}>
                <div className='calender disappear'>
                    <img src={calendar} alt=""/>
                    <p>November 15, 2023</p>
                    <div className='bell'>
                    <img src={bell} alt="" />
                    </div>
                </div>
            </div>
            <div>
                <div className='person'>
                    <img src={person} alt=""  className='mainPicture'/>
                    <div style={{paddingLeft:5}}>
                        <span className='name disappear'>Rick Sanches</span>
                        <span className='email disappear'>Ripkitty@spacemail.com</span>
                    </div>
                    <div style={{display: 'flex', justifyContent: 'center'}}>
                    <a href="#" onClick={() => {setuserModal(!userModal)}}><img src={arrow} alt="" /></a>
                <div
                className='logoutpopup'
                style={{
                  display: userModal ? "block" : "none",}}
                >
                  <a href="" style={{ color: "black", display: "block" }}>
                    Change user
                  </a>
                  <a href="" style={{ color: "black", display: "block" }}>
                    Logout
                  </a>
                </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Header;