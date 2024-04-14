import React from 'react'
import './Experience.css'
import { Box, Grid } from '@mui/material'
import { makeStyles } from '@mui/styles'


const useStyles = makeStyles({
  divContainer:{
    display:'flex',
    justifyContent:'space-around'
  }
})

export default function Experience() {
  const classes = useStyles()
  return (
    <div className='e-container'>
      <h2>Experience</h2>
      <div  className='companies-contanier'>
        <div className='ex-1'>
          <img src='https://media.licdn.com/dms/image/C510BAQF4FdaNM1rtRQ/company-logo_100_100/0/1630616078161/unifo_solutions_private_limited_logo?e=1721260800&v=beta&t=Kr9eQ_kuRSfFOZf7zgkLtiscOpR6J4w8YknuJTA9O5w' alt='unifo'/>
          <div className='designation'>
            <h3 >SDE 1</h3>
            <p>Unifo Solutions Pvt.Ltd</p>
            <p>Apr 2023 - Jan 2024</p>
            <p>Chennai (On-site)</p>
          </div>
        </div>
        <div className='ex-1'>
        <img src='https://media.licdn.com/dms/image/C560BAQGRiRjglutASA/company-logo_100_100/0/1630659149151?e=1721260800&v=beta&t=oyuawEax5Uqs-3BssMSHpnjbMNFlhvRkUQypKhe_W0o' alt='sgrs'/>
          <div className='designation'>
            <h3 >Frontend Engineer Intern</h3>
            <p>SGRS Acadamic Pvt.Ltd</p>
            <p>Mar 2024 - Ongoing</p>
            <p>Banglore (Work from home)</p>
          </div>
        </div>
      </div>
    </div>
  )
}
