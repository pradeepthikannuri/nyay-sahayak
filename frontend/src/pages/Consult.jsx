import React, { useEffect, useState } from 'react';
//import Navbar from '../NAvbar';
import Navbar from '../components/Navbar';

const Consult = () => {
  const [lawyers, setLawyers] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3001/get-lawyers')
      .then((response) => response.json())
      .then((data) => setLawyers(data))
      .catch((error) => console.error('Error fetching lawyers:', error));
  }, []);

  return (
    <>
    <Navbar></Navbar>
    <br></br>
    <h3 style={{backgroundColor:'grey'}}>Consult lawyers through Nyaay-sahayak and get your legal doubts clarified through experts!</h3>
    
    <hr></hr>
      <h2>Lawyers</h2>
      <br></br>
      <br></br>
      <div className="row">
        {lawyers.map((lawyer, index) => (
          <div
            key={lawyer._id}
            className="col-md-6"
            style={{
              marginBottom: '10px',
            }}
          >
            <div
              className="card"
              style={{
                border: '2px solid black',
                borderRadius: '15px',
              }}
            >
              <img
                src="..."
                className="card-img-top"
                alt="Lawyer Thumbnail"
                style={{ borderRadius: '15px 15px 0 0' }}
              />
              <div className="card-body" style={{ backgroundColor: 'black', color: 'white' }}>
                <h5 className="card-title">Name: {lawyer.name}</h5>
                <p className="card-text">Email: {lawyer.email}</p>
                <p className="card-text">Experience: {lawyer.experience}</p>
                <p className="card-text">Area of expertise: {lawyer.areaOfExpertise}</p>
                <button className="btn btn-primary">Consult</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Consult;
