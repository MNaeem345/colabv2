import React from 'react';
import '../components/Title.css';
import Container from '@material-ui/core/Container';
import pdf from "../img/MohammedNaeemResume.pdf";



export default function Title() {
  return (
    <div className='title-full' >
      
    <Container maxWidth='md' className='title-component'>
    
      <h1 className='intro'>Enthusiastic and meticulous  </h1>
   
    </Container>
    <Container maxWidth='md'>
    
      <h1 className='intro2'>developer with a passion for coding and a flair for creativity. </h1>
   
    </Container>
    <Container maxWidth='sm' >
      <div className='resume'>
        <a href={pdf} target="_blank"><button className='res-button2'> View Resume</button></a>
      </div>
    </Container>
    
    </div>
  )
}
