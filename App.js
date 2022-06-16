// import React from "react"
// import Home from "./Components/Homescreen/Home"
// import { BrowserRouter, Route, Routes } from "react-router-dom"
// import Discover from "./Components/Pages/Discover"
// import Community from "./Components/Pages/Community"
// import Services from "./Components/Pages/Services"
// import Tryfree from "./Components/Pages/Tryfree"
// const App =()=>{
//   return(
//     <BrowserRouter>
//     <Routes>
//     <Route path="/" element={<Home/>}/>
//     <Route path="/Discover" element={<Discover/>}/>
//     <Route path="/Community" element={<Community/>}/>
//     <Route path="/Services" element={<Services/>}/>
//     <Route path="/Tryfree" element={<Tryfree/>}/>

//     </Routes>
//     </BrowserRouter>
//   )
// }
// export default App

// import React from 'react'
// import Home from './Component/Home/Home'

// const App = () => {
//   return (
//     <div>
//       <Home/>
//     </div>
//   )
// }

// export default App

// import React from 'react'
// import Header from './Componentes/Header/Header'
// import Signup from './Componentes/Pages/Signup'

// const App = () => {
//   return (
//     <div>
//       {/* <Header/> */}
//       <Signup/>
//     </div>
//   )
// }

// export default App

// import React from 'react'
// import Signup from './Compnent/Pages/Signup'

// const App = () => {
//   return (
//     <div>
//       <Signup/>
//     </div>
//   )
// }

// export default App
// import React from "react";
// import Header from "./AssgComp/Header/Header";
// import Hero from "./AssgComp/Hero/Hero";
// import Body from "./AssgComp/Homescreen/Body";
// import SIgnUp from "./BluComponent/SIgnUp";
// import Signup from "./GradComponents/Signup";
// import SIgnup from "./MarbleComponent/SIgnup";
// import Hero1 from "./NelComp/Nel";
// import Home from "./Romancomponent/Home/Home";

// const App = () => {
//   return (
//     <div>
//       {/* <SIgnup /> */}
//       {/* <SIgnUp /> */}
//       <Signup />
//       {/* <Hero1 /> */}
//       {/* <Home /> */}
//       <Header />
//       {/* <Hero /> */}
//     </div>
//   );
// };

// export default App;

// import React from "react";
// import { BrowserRouter, Route, Routes } from "react-router-dom";
// import Header from "./EcommComp/Header/Header";
// import Home from "./EcommComp/Homescreen/Home";

// const App = () => {
//   return (
//     <BrowserRouter>
//       <Header />
//       <Routes>
//         <Route path="/" element={<Home />} />
//       </Routes>
//     </BrowserRouter>
//   );
// };

// export default App;

import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Booking from "./RentalComp/Booking/Booking";
import Detail from "./RentalComp/Detail/Detail";
import Header from "./RentalComp/Header/Header";
import Home from "./RentalComp/Homescreen/Home";
import Signin from "./RentalComp/Pages/Signin";
import SIgnUp from "./RentalComp/Pages/SIgnUp";

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Booking" element={<Booking />} />
        <Route path="/signup" element={<SIgnUp />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/Detail" element={<Detail />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;

// import React from "react";
// import Hero from "./CommerceComp/Hero";
// import Header from "./RentalComp/Header/Header";
// const App = () => {
//   return (
//     <div>
//       <Header />
//       <Hero />
//     </div>
//   );
// };

// export default App;
