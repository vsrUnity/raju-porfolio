import React from 'react'
import GitHubIcon from '@mui/icons-material/GitHub';
import NearMeSharpIcon from '@mui/icons-material/NearMeSharp';
import { Tooltip, IconButton,  } from '@mui/material';
import './Projects.css'

export default function Projects() {
  return (
    <div className='work-container'>
      <h2>Projects</h2>
      <div className='projects-container'>
        <div className='project-card'>
            <img src='https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png' alt='nxttrendz' className='website-logo'/>
            <div>
                <h4>ECommerce Clone - Amazon, Flipkart</h4>
                <p><span>Technologies used:</span> React JS, JS, Context APi, CSS, Bootstrap, Routing, REST API Calls, Local Storage,     
                    JWT Token, Authorization, Authentication </p>
            </div>
            <div className='links-icons'>
                <Tooltip title='open code'>
                    <IconButton component='a' href='https://github.com/rajupeddireddy/nxt-trenz-ecommerce' target='_blank'>
                        <GitHubIcon fontSize='large' sx={{color:'#000'}} className='git-icon' />
                    </IconButton>
                </Tooltip>
                <Tooltip title='username: praneetha,  password: praneetha@2021' href='https://raju71nxtgen.ccbp.tech/' target='_blank'>
                    <IconButton>
                    <NearMeSharpIcon fontSize='large' color='primary' className='git-icon'/>
                    </IconButton>
                </Tooltip>
                
            </div>
        </div>
        <div className='project-card'>
            <img src='https://ik.imagekit.io/e5kg8mysj/20945178.jpg?updatedAt=1712818185374' alt='nxttrendz' className='website-logo'/>
            <div>
                <h4>Weather App</h4>
                <p><span>Technologies used:</span>React JS, Redux, Typescript, Open Weather APi, Material UI, Routing, CSS</p>
            </div>
            <div className='links-icons'>
                <Tooltip title='open code'>
                        <IconButton  component='a' href='https://github.com/rajupeddireddy/weather-app' target='_blank'>
                            <GitHubIcon fontSize='large' sx={{color:'#000'}} className='git-icon' />
                        </IconButton>
                </Tooltip>
                {/* <NearMeSharpIcon fontSize='large' color='primary' className='git-icon'/> */}
            </div>  
        </div>
        <div className='project-card'>
            <img src='https://nkb-backend-otg-media-static.s3.ap-south-1.amazonaws.com/ccbp-dynamic-webapps/wiki-logo-img.png' alt='nxttrendz' className='website-logo'/>
            <div>
                <h4>Wikipedia Search Application</h4>
                <p><span>Technologies used:</span> HTML, CSS, JS, REST API Calls, Bootstrap</p>
            </div>
            <div className='links-icons'>
                {/* <GitHubIcon fontSize='large' sx={{color:'#000'}} className='git-icon' /> */}
            
                <Tooltip title='open site'>
                    <IconButton component='a' href='http://raju1wikipedia.ccbp.tech' target='_blank'>
                    <NearMeSharpIcon fontSize='large' color='primary' className='git-icon'/>
                    </IconButton>
                </Tooltip>
            </div>
        </div>
       
        <div className='project-card'>
            <img src='https://res.cloudinary.com/dh4d9iuty/image/upload/v1632986851/Tasty_Kitchen_lc3zjq.png' alt='nxttrendz' className='website-logo'/>
            <div>
                <h4>Tasty Kitchen</h4>
                <p><span>Technologies used:</span>HTML, CSS, JS, Bootstrap </p>
            </div>
            <div className='links-icons'>
                <Tooltip title='open code'>
                    <IconButton  component='a' href='https://github.com/rajupeddireddy/tasty-kitchen' target='_blank'>
                        <GitHubIcon fontSize='large' sx={{color:'#000'}} className='git-icon' />
                    </IconButton>
                </Tooltip>
                
                {/* <NearMeSharpIcon fontSize='large' color='primary' className='git-icon'/> */}
            </div>
        </div>
        
        <div className='project-card'>
            <img src='https://ik.imagekit.io/e5kg8mysj/todo-img.png?updatedAt=1713028862990' alt='nxttrendz' className='website-logo'/>
            <div>
                <h4>Todos Application </h4>
                <p><span>Technologies used:</span>HTML, CSS, JS, Bootstrap </p>
            </div>
            <div className='links-icons'>
                {/* <GitHubIcon fontSize='large' sx={{color:'#000'}} className='git-icon' /> */}
                 
                <Tooltip title='open site' components='a' href='http://raju1todosapp.ccbp.tech' target='_blank'> 
                    <IconButton>
                    <NearMeSharpIcon fontSize='large' color='primary' className='git-icon'/>
                </IconButton>
                </Tooltip>
            </div>
        </div>
      </div>
    </div>
  )
}
