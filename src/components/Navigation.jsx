import React, { useState } from 'react'
import './css/navigation.css'
import Profile from './images/profile.webp'
import HomeIcon from '@material-ui/icons/Home'
import PersonIcon from '@material-ui/icons/Person'
import BookIcon from '@material-ui/icons/Book'
import BuildIcon from '@material-ui/icons/Build'
import DescriptionIcon from '@material-ui/icons/Description'
import ListAltIcon from '@material-ui/icons/ListAlt'
import MailIcon from '@material-ui/icons/Mail'
import TwitterIcon from '@material-ui/icons/Twitter'
import FacebookIcon from '@material-ui/icons/Facebook'
import InstagramIcon from '@material-ui/icons/Instagram'
import LinkedInIcon from '@material-ui/icons/LinkedIn'
import GitHubIcon from '@material-ui/icons/GitHub'
import { NavHashLink } from 'react-router-hash-link'
import { Link } from 'react-router-dom'

const Navigation = ({ openStatus, closeFunc }) => {
  const sections = [
    {
      title: 'Home',
      path: '#home',
      icon: <HomeIcon />,
    },
    {
      title: 'About',
      path: '#about',
      icon: <PersonIcon />,
    },
    {
      title: 'Coursework',
      path: '#coursework',
      icon: <BookIcon />,
    },
    {
      title: 'Skills',
      path: '#skills',
      icon: <BuildIcon />,
    },
    {
      title: 'Experiences',
      path: '#experiences',
      icon: <DescriptionIcon />,
    },
    {
      title: 'Projects',
      path: '#projects',
      icon: <ListAltIcon />,
    },
    {
      title: 'Contact',
      path: '#contact',
      icon: <MailIcon />,
    },
  ]

  const [pageSection, setPageSection] = useState('#home')

  return (
    <div
      className="navigation"
      id={openStatus ? 'open' : ''}
      onClick={closeFunc}
    >
      <div className="profile">
        <img src={Profile} alt="loading fail" id="profile" />
        <h1>Pawan Kumar</h1>
      </div>
      <div className="social">
        <div className="icon">
          <a href="https://twitter.com/pawan_kr_007" target="blank">
            <TwitterIcon />
          </a>
        </div>
        <div className="icon">
          <a
            href="https://www.facebook.com/profile.php?id=100015148148011"
            target="blank"
          >
            <FacebookIcon />
          </a>
        </div>
        <div className="icon">
          <a href="https://www.instagram.com/pawan.kr_007/" target="blank">
            <InstagramIcon />
          </a>
        </div>
        <div className="icon">
          <a href="https://www.linkedin.com/in/pawankr007/" target="blank">
            <LinkedInIcon />
          </a>
        </div>
        <div className="icon">
          <a href="https://github.com/pawankumar2002" target="blank">
            <GitHubIcon />
          </a>
        </div>
      </div>

      <div className="navBox">
        {sections.map((menu) => (
          <NavHashLink smooth to={menu.path} key={menu.path}>
            <div
              className="menu"
              id={menu.path === pageSection ? 'active' : ''}
              onClick={() => setPageSection(menu.path)}
            >
              {menu.icon}
              <p>{menu.title}</p>
            </div>
          </NavHashLink>
        ))}
      </div>
    </div>
  )
}

export default Navigation
