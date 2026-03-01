import { useState } from 'react'
import Home from './Components/Home/Home'
import {BrowserRouter,Routes,Route} from "react-router-dom"
import Navbar from './Navbar'
import LotteryPage from './Components/LotteryPage/LotteryPage'
import CardPage from './Components/CardPage/CardPage'
import JodiPage from './Components/JodiPage/JodiPage'
import PattiPage from './Components/PattiPage/PattiPage'


function App() {
 

  return (
    <>
       <>
   <BrowserRouter>
   <Navbar></Navbar>
   <Routes>
    <Route path={"/"} element={<Home></Home>}></Route>
    <Route path='/lotteryPage' element={<LotteryPage></LotteryPage>}></Route>
    <Route path="/cardPage" element={<CardPage></CardPage>}></Route>
    <Route path="/jodiPage" element={<JodiPage></JodiPage>}></Route>
    <Route path={"/pattiPage"} element={<PattiPage></PattiPage>}></Route>
   </Routes>
   </BrowserRouter>
    </>
     
    </>
  )
}

export default App
