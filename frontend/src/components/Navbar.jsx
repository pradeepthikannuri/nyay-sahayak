// import React from 'react';
// import { Link } from 'react-router-dom';
// import './Navbar.css'; // Importing external CSS file for styling

// const Navbar = () => {
//   return (
//     <nav className="navbar">
//       <div className="navbar-container">
//         <div className="logo">
//           <Link to="/" className="logo-link">Your Logo</Link>
//         </div>
//         <ul className="nav-links">
//           <li><Link to="/" className="nav-link">Home</Link></li>
//           <li><Link to="/aboutus" className="nav-link">About</Link></li>
//           <li><Link to="/services" className="nav-link">Services</Link></li>
//           <li><Link to="/contact" className="nav-link">Contact</Link></li>
//         </ul>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;

import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';


const Navbar = () => {

  const handleLoginClick = () => {
    const isLawyer = window.confirm("Login only if you are a professional legal-aid provider");

    if (isLawyer) {
      // Navigate to the /login route
      window.location.href = '/login';
    } else {
      // Do nothing or show another message
      alert("You need to be a lawyer to access this feature.");
    }
  };

  return (
    <>

      <nav style={{ marginTop: '0px', backgroundColor: 'black' }} className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" >NYAAY-SAHAAYAK</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <Link to={"/"}><a style={{ marginLeft: '700px', marginRight: '25px' }} className="nav-item nav-link active" >Home <span className="sr-only">(current)</span></a></Link>
            <Link to={"/aboutus"} style={{ marginLeft: '25px', marginRight: '25px' }} className="nav-item nav-link" >About Us</Link>
            <Link to={"/contactus"} style={{ marginLeft: '25px', marginRight: '25px' }} className="nav-item nav-link" >Contact Us</Link>
            <Link to={"/consult"} style={{ marginLeft: '25px', marginRight: '25px' }} className="nav-item nav-link d" >Consult</Link>
            <Link to={"/login"} style={{ marginLeft: '25px', marginRight: '25px' }} className="nav-item nav-link d" onClick={handleLoginClick}>
              Lawyer-Login
            </Link>
          </div>
        </div>
      </nav>

    </>
  )
}

export default Navbar;
