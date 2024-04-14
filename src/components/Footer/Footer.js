import React from 'react'
import NavigationOutlinedIcon from '@mui/icons-material/NavigationOutlined';
import { IconButton } from '@mui/material';
import './Footer.css'

export default function Footer(props) {
    const {scrollToTop} = props
  return (
    <div className='footer'>
        <IconButton sx={{marginBottom:'20px'}}onClick={() =>  scrollToTop()}>
            <NavigationOutlinedIcon fontSize='large' sx={{color:'#f58d42'}}/>
        </IconButton>
        <div className="copyright">
            <p>&copy; All rights reserved - <span>Raju Peddireddy</span> | Privacy Policy | rajupeddireddy9493@gmail.com |</p>
        </div>
    </div>
  )
}
