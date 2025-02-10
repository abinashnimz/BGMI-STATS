import {BrowserRouter, Routes, Route} from "react-router-dom";
import { Home } from "./pages/Home";
import { SignIn } from "./pages/SignIn";
import { SignUp } from "./pages/SignUp";



export const App = ()=>{
  return(
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/SignIn" element={<SignIn/>} />
        <Route path="/SignUp" element={<SignUp/>} />
      </Routes>
    </BrowserRouter>
  )
}