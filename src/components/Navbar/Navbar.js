import React from 'react'
import CallIcon from '@mui/icons-material/Call';
import EmailIcon from '@mui/icons-material/Email';
import ArticleIcon from '@mui/icons-material/Article';
import './Navbar.css'

export default function Navbar() {
  return (
    <div className='nav-container'>
      <a href='tel:+919493613197' target='_blank'>
        <CallIcon color='success' fontSize='small'/>
        <p>+91 9493613197</p>
      </a>
      <a href='https://drive.google.com/file/d/1EobQxczchCRWMro-dHqxOanRURopOMG4/view?usp=sharing' target='_blank'>
        <ArticleIcon color='primary' fontSize='small'/>
        <p>resume</p>
      </a>
      <a href='mailto:rajupeddireddy9493@gmail.com' targe='_blank'>
        <EmailIcon fontSize='small'/>
       <p>rajupeddireddy9493@gmail.com</p>
      </a>
    </div>
  )
}
