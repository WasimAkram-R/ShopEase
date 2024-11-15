import './App.css'
// import Navbar from './components/Navbar/Navbar'
// import Hero_section from './components/Hero_section/Hero_section'
// import Menubar from './components/Menu/Menubar'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import All from './components/Menu/All'

import About from './components/About/About'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'
// import Checkout from './components/Checkout/Checkout'
// import Example from './components/Modal/Modal'
// import Ordered from './components/Ordered/Ordered'

// import Login from './components/Login/Login'

// import Props1 from './components/Props/Props1'

// import allmenus from './components/Menu/dish.json'
// import { useState } from 'react'

// console.log(menus)

function App() {

  // const [menus,setMenus]=useState(allmenus)
  // console.log("App:",menus)

  return (
    <>

    
      {/* <Navbar/> */}
    {/* <BrowserRouter>
     <Navbar/>
     <Routes>
      <Route path='/login' element={<Login/> }/>
     </Routes>
    </BrowserRouter>

      <Hero_section/> */}
      
      
      <div className='container-fluid bg-body-tertiary pt-2 pb-5'>
         {/* <div className='container '> */}
           <BrowserRouter>
           {/* <Menubar/> */}
           <Routes>
           <Route path='/' element={<All/>}/>
           {/* <Route path='/veg' element={<Veg/>}/>
           <Route path='/nonveg' element={<Nonveg/>}/> */}
           {/* <Route path='/nonveg' element={<Nonveg/>}/> */}

  
            </Routes>
           </BrowserRouter>
         {/* </div> */}
      </div>

      <About/>

      <Contact/>

      <Footer/>

      {/* <Props1/> */}

      {/* <Login/>  */}
        
  
     {/* <Checkout/> */}

     {/* <Example/> */}

     {/* <Ordered/> */}
    </>
  )
}

export default App
