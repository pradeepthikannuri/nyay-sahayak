// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <div>
//         <a href="https://vitejs.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.jsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </>
//   )
// }

// export default App



// 

/*import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App;
*/
//App.jsx:
// import React from 'react';
// import { Routes, Route ,BrowserRouter, Form} from 'react-router-dom'
// import Home from './pages/Home';
// import Contactus from './pages/Contactus'
// import Login from './pages/Login'
// import Signup from './pages/Signup'
// import LawyerPage from './pages/LawyerHome';
// import Consult from './pages/Consult';
// import FAQ from './pages/FAQ';
// import Chatbot from './components/Chatbot';
// import Rights from './pages/Rights';
// import LegalDocument from './pages/Draft';





// function App  () {
//   return (
//    <BrowserRouter>
//    <Routes>
//     <Route path='/' element={<Home />}></Route>
//     <Route path='/aboutus' element={<Aboutus/>}></Route>
//     <Route path='/contactus' element={<Contactus/>}></Route>
//     <Route path='/login' element={<Login/>}></Route>
//     <Route path='/register' element={<Signup/>}></Route>
//     <Route path='/lawyer' element={<LawyerPage/>}></Route>
//     <Route path='/consult' element={<Consult/>}></Route>
//     <Route path='/faqs' element={<FAQ/>}></Route>
//     <Route path='/voice' element={<Chatbot/>}></Route>
//     <Route path='/rights' element={<Rights/>}></Route>
//     <Route path='/drafting' element={<LegalDocument />}></Route>
    
//     </Routes>
//     </BrowserRouter>
//   );
// };

// export default App;
//App.jsximport React from 'react';
/*import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'*/
/*function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}*/
import React from 'react';
import { Routes, Route ,BrowserRouter, Form} from 'react-router-dom'
import Home from './pages/Home';
import Navbar from './components/Navbar';
import AboutUs from './pages/Aboutus';
import Contactus from './pages/Contactus'
import Login from './pages/Login';
import Signup from './pages/Signup';
import LawyerPage from './pages/LawyerHome'
import Consult from './pages/Consult';
import FAQ from './pages/FAQ';
import Chatbot from './components/Chatbot';
import Rights from './pages/Rights';
import LegalDocument from './pages/Draft';
import LegalWritings from './pages/Legalwritings';
import LawyerHome from './pages/LawyerHome';
function App  () {
  return (
   <BrowserRouter>
   <Routes>
    <Route path='/' element={<Home />}></Route>
    <Route path='/aboutus' element={<AboutUs />}></Route>
    <Route path='/contactus' element={<Contactus />}></Route>
    <Route path='/login' element={<Login />}></Route>
    <Route path='/signup' element={<Signup />}></Route>
    <Route path='/lawyer' element={<LawyerPage />}></Route>
    <Route path='/consult' element={<Consult />}></Route>
    <Route path='/faqs' element={<FAQ />}></Route>
    <Route path='/voice' element={<Chatbot />}></Route>
    <Route path='/knowyourrights' element={<Rights />}></Route>
    <Route path='/drafting' element={<LegalDocument />}></Route>
    <Route path='/legalwritings' element={<LegalWritings />}></Route>
    <Route path='/Register' element={<LegalHome />}></Route>
    </Routes></BrowserRouter>
  );
};

export default App;
