import React from 'react'
import './Search.css'

import { IoSearchSharp } from "react-icons/io5";

import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';

// import { IoSearchSharp } from "react-icons/io5";


const options = [
{
    name: 'Enable both scrolling & backdrop',
    scroll: true,
    backdrop: true,
  },
];


const Search = ({ name, ...props }) => {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const toggleShow = () => setShow((s) => !s);

  return (
    <> 

{/* <Nav.Link href="#search" className='text-primary-emphasis ' > */}
    <IoSearchSharp onClick={toggleShow} className="me-2">
        {name}
    </IoSearchSharp>


    {/* </Nav.Link> */}  


        {/* <Button variant="primary" onClick={toggleShow} className="me-2">cart
        {name}
      </Button> */}
 
      <Offcanvas  className="h-50" placement="top" show={show} onHide={handleClose} {...props}>
        <Offcanvas.Header closeButton  className='bg-body-tertiary'>
          <Offcanvas.Title className='text-primary-emphasis'></Offcanvas.Title>
        </Offcanvas.Header>
        
        <Offcanvas.Body style={{
            display:"flex",
            flexDirection:"column",
            justifyContent:"center",
            alignItems:"center"

        }}>
          <p className='text-primary-emphasis fw-medium fs-5 text-uppercase'>What Are You Looking For?</p>
      
         <div className='row w-50 search-container-icon'>

        <IoSearchSharp className='searchicon'/>
        <input type="text" required
        className='searchinput p-2  border-black  border-opacity-25 col-12' placeholder='Search Menus' />
         </div>
        </Offcanvas.Body>
      </Offcanvas>
    
    
    </>
  )
}

export default Search