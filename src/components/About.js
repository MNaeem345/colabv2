import React from 'react';
import '../components/About.css';
import { Container, Card } from '@material-ui/core';

export default function About() {
  return (
    <section id='about'>
    <div className='all-about'>
    <h1 className="heading">Experiences</h1>
    <Container maxWidth="sm" >
        
        <Card className='experiences-cards'>
            <h1>Data Analyst</h1>
            <p className='company-name'>Sunfield Advisors | <p className='date'>November 2022 - Present</p></p>
            <div className='experience-description'>
            <p >● Worked with a team of 3-4 senior partners to help close Mergers and Acquisition deals between companies.</p>
                <p>● Utilized tools like Factset, and ZoomInfo to help look for potential buyers and sellers for each individual project
                    where the client wanted a suitable investor.</p>
                <p>● Assisted with the contact us form on the company website with a freelance engineer and was able to properly
                    send forms to the head partner from potential clients.</p>
            </div>

        </Card>
        <Card className='experiences-cards'>
            <h1>Software Engineer</h1>
            <p className='company-name'>Coding Temple | <p className='date'>November 2021 - May 2022</p></p> 
            <div className='experience-description'>
            <p >● Created database tables using PostgreSQL and insomnia to test the users' updates to the database.</p>
                <p>● Built and implemented data tables using ElephantSQL and created functional ERDs for specific projects</p>
                <p>● Developed a web application that implements Flask as both a Front-End and a Back-End and React as a Front-End
                    and Flask as the Back-End.</p>
                <p>● Managed a team to help create design focused static HTML and CSS pages for clients.</p>
                <p>● Established a great understanding of Object Oriented Programming (OOP) and implemented the concept in
            various projects.</p>
                <p>● Managed 3 REST APIs using ReactJS and Flask in combination with PostgreSQL Databases.</p>
            </div>
            
            
        </Card>

    </Container>
    </div>
    </section>
  )
}
