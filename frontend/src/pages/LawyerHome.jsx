// import React, { useState } from 'react';
// import Navbar from '../components/Navbar';

// const LawyerPage = () => {
//   const [name, setName] = useState('');
//   const [experience, setExperience] = useState('');
//   const [areaOfExpertise, setAreaOfExpertise] = useState('');
//   const [email, setEmail] = useState('');
//   const[image, setImage]=useState(null);
//   const navigate=useNavigate();

//   const handleSubmit = () => {
//     fetch('http://localhost:3001/register-lawyer', {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify({ name, experience, areaOfExpertise, email }),
//     })
//       .then((response) => response.json())
//       .then((data) => {
//         console.log('Lawyer registration successful:', data);
//         navigate('/consult')
//         // Handle success as needed
//       })
//       .catch((error) => {
//         console.error('Error during lawyer registration:', error);
//         // Handle error as needed
//       });
//   };

  
//   return (
//     <>
//       <Navbar />
//       <div style={{ backgroundColor: '#f4e2d8', padding: '20px', borderRadius: '8px', maxWidth: '400px', margin: 'auto' }}>
//         <h1 style={{ color: '#503b2c' }}>Lawyer Registration</h1>
//         <label style={{ color: '#503b2c' }}>Name:</label>
//         <input
//           type='text'
//           value={name}
//           onChange={(e) => setName(e.target.value)}
//           style={{ width: '100%', padding: '8px', margin: '5px 0', borderRadius: '4px', border: '1px solid #503b2c' }}
//         />

//         <label style={{ color: '#503b2c' }}>Experience:</label>
//         <input
//           type='text'
//           value={experience}
//           onChange={(e) => setExperience(e.target.value)}
//           style={{ width: '100%', padding: '8px', margin: '5px 0', borderRadius: '4px', border: '1px solid #503b2c' }}
//         />

//         <label style={{ color: '#503b2c' }}>Area of Expertise:</label>
//         <input
//           type='text'
//           value={areaOfExpertise}
//           onChange={(e) => setAreaOfExpertise(e.target.value)}
//           style={{ width: '100%', padding: '8px', margin: '5px 0', borderRadius: '4px', border: '1px solid #503b2c' }}
//         />

//         <label style={{ color: '#503b2c' }}>Email:</label>
//         <input
//           type='text'
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//           style={{ width: '100%', padding: '8px', margin: '5px 0', borderRadius: '4px', border: '1px solid #503b2c' }}
//         />

//         <label style={{ color: '#503b2c' }}>Profile Picture:</label>
//         <input type='file' accept='image/*' onChange={(e) => setImage(e.target.files[0])} style={{ margin: '5px 0' }} />

//         <button
//           onClick={handleSubmit}
//           style={{
//             backgroundColor: '#503b2c',
//             color: '#ffffff',
//             padding: '10px 15px',
//             border: 'none',
//             borderRadius: '4px',
//             cursor: 'pointer',
//           }}
//         >
//           Register
//         </button>
//       </div>
//     </>
//   );
// };

// export default LawyerPage;


import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate from React Router v6
import Navbar from '../components/Navbar';

const LawyerPage = () => {
  const [name, setName] = useState('');
  const [experience, setExperience] = useState('');
  const [areaOfExpertise, setAreaOfExpertise] = useState('');
  const [email, setEmail] = useState('');
  const [image, setImage] = useState(null);
  const navigate = useNavigate(); // Initialize useNavigate

  const handleSubmit = () => {
    fetch('http://localhost:3001/register-lawyer', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name, experience, areaOfExpertise, email }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log('Lawyer registration successful:', data);
        navigate('/consult'); // Navigate to '/consult' route after successful registration
        // Handle success as needed
      })
      .catch((error) => {
        console.error('Error during lawyer registration:', error);
        // Handle error as needed
      });
  };

  
  return (
    <>
      <Navbar />
      <div style={{ backgroundColor: '#f4e2d8', padding: '20px', borderRadius: '8px', maxWidth: '400px', margin: 'auto' }}>
        <h1 style={{ color: '#503b2c' }}>Lawyer Registration</h1>
        <label style={{ color: '#503b2c' }}>Name:</label>
        <input
          type='text'
          value={name}
          onChange={(e) => setName(e.target.value)}
          style={{ width: '100%', padding: '8px', margin: '5px 0', borderRadius: '4px', border: '1px solid #503b2c' }}
        />

        <label style={{ color: '#503b2c' }}>Experience:</label>
        <input
          type='text'
          value={experience}
          onChange={(e) => setExperience(e.target.value)}
          style={{ width: '100%', padding: '8px', margin: '5px 0', borderRadius: '4px', border: '1px solid #503b2c' }}
        />

        <label style={{ color: '#503b2c' }}>Area of Expertise:</label>
        <input
          type='text'
          value={areaOfExpertise}
          onChange={(e) => setAreaOfExpertise(e.target.value)}
          style={{ width: '100%', padding: '8px', margin: '5px 0', borderRadius: '4px', border: '1px solid #503b2c' }}
        />

        <label style={{ color: '#503b2c' }}>Email:</label>
        <input
          type='text'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={{ width: '100%', padding: '8px', margin: '5px 0', borderRadius: '4px', border: '1px solid #503b2c' }}
        />

        <label style={{ color: '#503b2c' }}>Profile Picture:</label>
        <input type='file' accept='image/*' onChange={(e) => setImage(e.target.files[0])} style={{ margin: '5px 0' }} />

        <button
          onClick={handleSubmit}
          style={{
            backgroundColor: '#503b2c',
            color: '#ffffff',
            padding: '10px 15px',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer',
          }}
        >
          Register
        </button>
      </div>
    </>
  );
};

export default LawyerPage;