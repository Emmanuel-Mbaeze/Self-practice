import React from "react"
import {BrowserRouter, Routes, Route} from "react-router-dom"
// import Signup from "../src/components/Resgister/Signup"
import Signup from "./components/RegistrationPage/Signup"
import Signin from "./components/RegistrationPage/Signin"

const App = ()=>{
  return(
 


<BrowserRouter>

<Routes>
  <Route />
  <Route path="/" element={<Signup/>} />

  <Route path="/sign" element={<Signin />} />

</Routes>
</BrowserRouter>

  )
}
export default App