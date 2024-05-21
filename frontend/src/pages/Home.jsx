// // //Home.jsx:
// // import React from 'react';
// // import Navbar from '../components/Navbar';

// // const Home = () => {
// //   return (
// //     <>
// //       <Navbar></Navbar>
// //     </>
// //   );
// // };

// // export default Home;


// import React from 'react';
// import Navbar from '../components/Navbar';
// import Carousel from '../components/Carousel';
// import Chatbot from '../components/Chatbot';

// const Home = () => {
//   return (
//     <>
//       <Navbar></Navbar>
//       <Carousel></Carousel>
//       <Chatbot></Chatbot>
//     </>
//   );
// };

// export default Home;

// import React from 'react';
// import { Link } from 'react-router-dom';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import styles from './Home.module.scss'; 
// import Chatbot from '../components/Chatbot';
// import Navbar from '../components/Navbar';
// import Carousel from '../components/Carousel';


// const Home = () => {
//   return (
//     <>
//       <div style={{ margin: '0' }}>
//         <Navbar />
//       </div>
//       <Carousel />
//       <hr></hr>

//       <div>
        {/* <div style={{ flex: '1', marginRight: '10px' }}>
          <h1 style={{ marginLeft: '300px' }}>CHATBOT</h1>
          <Chatbot />
        </div> */}
//         <hr></hr>
//         <h2 style={{ color: 'rgb(189, 141, 9)' }}>Other Features:</h2>

//         <Link to={"/voice"}>
//           <button style={{ padding: '10px', marginBottom: '10px', marginLeft: '400px' }}>
//             <i style={{ color: 'rgb(196, 146, 8)', fontSize: '50px' }} className="fa-sharp fa-solid fa-microphone"></i><br /><br />VOICE-ASSISTANT
//             <p>ask your query through voice</p>
//           </button>
//           </Link>
        
//         <Link to={"/consult"}>
//           <button style={{ padding: '30px', marginBottom: '10px' }}>
//             <i style={{ color: 'rgb(196, 146, 8)', fontSize: '50px' }} className="fa-sharp fa-solid fa-user"></i><br /><br />CONSULTATION
//             <p>consult a professional legal-aid provider</p>
//           </button>
//         </Link>
//         <Link to={"/faqs"}>
//           <button style={{ padding: '30px' }}>
//             <i style={{ color: 'rgb(196, 146, 8)', fontSize: '50px' }} className="fa-solid fa-message"></i><br /><br />FAQ's
//             <p>do check out the faq's</p>
//           </button>
//         </Link>
//       </div>

      
//     </>
//   );
// };

// export default Home;


//Home.jsximport React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
//import styles from './Home.module.css'; 
import Chatbot from '../components/Chatbot';
import Navbar from '../components/Navbar';
import Carousel from '../components/Carousel';



const Home = () => {
  return (
    <>
      <div style={{ margin: '0' }}>
        <Navbar />
      </div>
      <Carousel />
      <hr></hr>

      <div>
        {/* <div style={{ flex: '1', marginRight: '10px' }}> 
          <h1 style={{ marginLeft: '300px' }}>CHATBOT</h1>
          <Chatbot />
        </div>*/}
        <hr></hr>
        <h2 style={{ color: 'rgb(189, 141, 9)' }}>Other Features:</h2>

        <Link to={"/voice"}>
          <button style={{ padding: '30px', marginBottom: '10px', marginLeft: '400px' }}>
            <i style={{ color: 'rgb(196, 146, 8)', fontSize: '50px' }} className="fa-sharp fa-solid fa-microphone"></i><br /><br />CHATBOT WITH VOICE-ASSISTANT
            <p>ask your query through voice</p>
          </button>
          </Link>
        
        <Link to={"/consult"}>
          <button style={{ padding: '30px', marginBottom: '10px' }}>
            <i style={{ color: 'rgb(196, 146, 8)', fontSize: '50px' }} className="fa-sharp fa-solid fa-user"></i><br /><br />CONSULTATION
            <p>consult a professional legal-aid provider</p>
          </button>
        </Link>
        <Link to={"/faqs"}>
          <button style={{ padding: '30px' }}>
            <i style={{ color: 'rgb(196, 146, 8)', fontSize: '50px' }} className="fa-solid fa-message"></i><br /><br />FAQ's
            <p>do check out the faq's</p>
          </button>
        </Link>
      </div>

      
    </>
  );
};

export default Home;