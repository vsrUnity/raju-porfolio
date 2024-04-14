import React from 'react'
import { Box, Button } from '@mui/material'
import './Skills.css'
import { makeStyles } from '@mui/styles'

const useStyles = makeStyles({
  btnContainer:{
    gap:'12px',
    display:'flex',
    justifyContent:'space-evenly',
    flexWrap:'wrap',
    flexgrow:1,
    marginBottom:'25px'
    
  },
  button:{
      textTransform:'none !important' ,
      color:'#000 !important'
  },
    
})

export default function Skills() {
    const classes = useStyles()
  return (
    <div className='skill-container'>
      <h2 className='s-heading'>Skills</h2>
      <Box className={classes.btnContainer}>
        <Button variant="outlined"className={classes.button} >React</Button>
        <Button variant="outlined"className={classes.button} >Redux</Button>
        <Button variant="outlined"className={classes.button} >Javascript</Button>
        <Button variant="outlined"className={classes.button} >Typescript</Button>
        <Button variant="outlined"className={classes.button} >Python</Button>
        <Button variant="outlined"className={classes.button} >HTML</Button>
        <Button variant="outlined"className={classes.button} >CSS</Button>
        <Button variant="outlined"className={classes.button} >Material Ui</Button>
        <Button variant="outlined"className={classes.button} >React Storybook</Button>
        <Button variant="outlined"className={classes.button} >Gatsby</Button>
        <Button variant="outlined"className={classes.button} >Bootstrap</Button>
        <Button variant="outlined"className={classes.button} >SQLite</Button>
        <Button variant="outlined"className={classes.button} >Node js</Button>
        <Button variant="outlined"className={classes.button} >Express</Button>
        <Button variant="outlined"className={classes.button} >Axios</Button>
        <Button variant="outlined"className={classes.button} >Git</Button>
        <Button variant="outlined"className={classes.button} >VS Code</Button>
        <Button variant="outlined"className={classes.button} >Wix</Button>
        <Button variant="outlined"className={classes.button} >Responsive Design</Button>
      </Box>
    </div>
  )
}
