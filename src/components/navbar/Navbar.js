import React from 'react'
import './Navbar.scss'
import {ArrowDropDown, Notifications, Search} from '@material-ui/icons'
import { useState } from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false)

    window.onscroll = () =>{
        setIsScrolled(window.pageYOffset === 0 ? false : true);
        return() => (window.onscroll = null)
    }

  return (
    <div className={isScrolled ? "navbar scrolled" : "navbar"}>
        <div className='container'>
            <div className='left'>
                <img src='https://www.edigitalagency.com.au/wp-content/uploads/netflix-logo-png-large.png'
                alt='Home'
                />
                <span>Homepage</span>
                <Link to={"/series"}>
                <span>Series</span>
                </Link>
                <Link to={"/movies"}>
                <span>Movies</span>
                </Link>
                <span>New and Popular</span>
                <span>My List</span>
            </div>
            <div className='right'>
                <Search className='icon'/>
                <span>KIDS</span>
                <Notifications  className='icon'/>
                <img src='https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png?20201013161117'
                alt='Your Profile'/>
                <div className='profile'>
                <ArrowDropDown className='icon'/>
                <div className='options'>
                    <span>Settings</span>
                    <span>Logout</span>
                </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Navbar