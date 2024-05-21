import React from 'react';
import Navbar from '../components/Navbar';
import { Link } from 'react-router-dom';

const AboutUs = () => {
  return (
    <>
    <Navbar/>
    <div style={{backgroundColor:'rgb(148, 139, 123)'}}>
      <h1 style={{color:'black',marginLeft:'50%'}}>About Us</h1>
      <hr style={{borderColor:'white'}}></hr>
      <h2 style={{color:'rgb(7, 69, 44)',marginLeft:'500px'}}>Why Nyaay-Sahayak?</h2>
     <div style={{ display: 'flex', alignItems: 'center' }}>
      <img src='aboutus.webp' alt='Welcome Image' style={{ height: '450px' ,marginRight:'50px',borderRadius:'18px'}} />
      
      <p style={{color:'white'}}>
        Welcome to NYAAY-SAHAAYAK, your trusted platform for legal assistance. Our mission is to provide accessible and reliable legal information to individuals seeking guidance. Whether you have questions about criminal law, civil disputes, or any legal matter, we are here to help. Our team of legal experts is dedicated to simplifying complex legal concepts and providing you with the information you need. Feel free to explore our services, consult with our professionals, and make the legal process more transparent and understandable. If you have any inquiries or suggestions, please don't hesitate to reach out. We value your feedback and are committed to improving our platform to better serve your legal needs.
      </p>
    </div>
    <hr style={{borderColor:'white'}}></hr>
    <h2 style={{color:'black',marginLeft:'50%'}}>Features:</h2>
    <hr style={{borderColor:'white'}}></hr>
    <Link to={"/chatbot"}><h2 style={{color:'rgb(7, 69, 44)',marginLeft:'50px'}}>Chatbot</h2></Link>
    <div style={{ display: 'flex', alignItems: 'center' }}>
        
    <p style={{color:'white'}}>
        A working chatbot that will answer any of your queries based on indian laws.It is done using the openai platform . it will answer all your queries and it is integrated into the project.
      </p>
      <img src='chatbot.jpg' alt='Welcome Image' style={{ height: '450px' ,marginRight:'0px',borderRadius:'18px'}} />
     
    </div>
    <hr style={{borderColor:'white'}}></hr>
    <h2 style={{color:'rgb(7, 69, 44)',marginLeft:'1000px'}}>Voice-assistant</h2>
    <div style={{ display: 'flex', alignItems: 'center' }}>
      <img src='voiceass.avif' alt='Welcome Image' style={{ height: '450px' ,marginRight:'50px',borderRadius:'18px'}} />
      <p style={{color:'white'}}>
        A voice assistant to help you ask your query in your language . It will answer your query through voice!This was done using the react-speech-recognition. It is easily accessible and also has a charecter attached to it to make it more interactive! 
      </p>
    </div>
    <hr style={{borderColor:'white'}}></hr>
    
    <Link to={"/chatbot"}><h2 style={{color:'rgb(7, 69, 44)',marginLeft:'50px'}}>CONSULTATION</h2></Link>
    <div style={{ display: 'flex', alignItems: 'center' }}>
        
    <p style={{color:'white'}}>
        Consult lawyers and legalaid providers through our platform and make your work easier.We provide verfied information ofthe legal advisors . You can consult them and move ahead !
      </p>
      <img src='consult.jpg' alt='Welcome Image' style={{ height: '450px' ,marginRight:'0px',borderRadius:'18px'}} />
     
    </div>
    </div>

    </>
  );
};

export default AboutUs;
