
// import { IoSearchSharp } from "react-icons/io5";
// import { FaRegUser } from "react-icons/fa6";
// // import { LuHeart } from "react-icons/lu";
// import { RiShoppingCartLine } from "react-icons/ri";
// import { GiChickenOven } from "react-icons/gi";
// import { IoIosCloseCircleOutline } from "react-icons/io";



// import Container from 'react-bootstrap/Container';
// import Nav from 'react-bootstrap/Nav';
// import Navbar from 'react-bootstrap/Navbar';
// import './Navbar.css'

// import Offcanvas from 'react-bootstrap/Offcanvas';
// import { useState,useEffect } from 'react';
// import { useNavigate } from "react-router-dom";







 
// // import login from '../Login/Login.jsx'
// // import Login from "../Login/Login.jsx";


// // import Button from 'react-bootstrap/Button';


// // const options = [
// //   {
// //       name: 'Enable both scrolling & backdrop',
// //       scroll: true,
// //       backdrop: true,
// //     },
// //   ];


// // function NavScrollExample({ name, ...props}) {
// function NavScrollExample(props) {

//   const {carts}=props


//   const [total,setTotal]=useState(0)

//   useEffect(()=>{
 
//     setTotal(carts.reduce((acc,curr)=>acc+parseInt(curr.price),0))
//   },[{carts}])


  





// // search
//   const [search, setSearch] = useState(false);

//   const handleCloseSearch = () => setSearch(false);

//   const toggleSearch = () => setSearch((s) => !s);



// // cart
//   const [cart, setCart] = useState(false);

//   const handleCloseCart = () => setCart(false);

//   const toggleCart= () => setCart((s) => !s);







//   // login
//   const navigate=useNavigate()

//   // const [isVisible, setisVisible] = useState(false);

//   // const toggleVisibility = () => setCart(!isVisible);



//   //delelecart

//   const delelecart=()=>{
//        alert("hi")
//   }


//   return (
//     <Navbar expand="lg" 
//     // className="bg-body-tertiary"
//     className="bg-white" id="home"
//     >
//       <Container>
   
//         <Navbar.Brand href="#" style={{color:"#93ab01",fontFamily:"cursive",fontSize:"30px" }}>Shop<span className="text-primary-emphasis">Ease</span>
//         </Navbar.Brand>

//         <Navbar.Toggle aria-controls="basic-navbar-nav" 
//         style={{outline:"none",boxShadow:"none",border:"none"}}
//         >
//         <span  ><GiChickenOven style={{height:"35px",width:"40px" ,color:"#93ab01"}}/></span>
//         </Navbar.Toggle>

//         <Navbar.Collapse id="basic-navbar-nav" className="custom-navbar-collapses">
//           <Nav 
//             className="mx-auto my-2 my-lg-0"  
//           >
//             <Nav.Link href="#home" className='text-primary-emphasis fw-semibold green' ><span className="custom-navbar-collapse ">Home</span></Nav.Link>
//             <Nav.Link href="#menu" className='text-primary-emphasis fw-semibold green'><span className="custom-navbar-collapse">Menu</span></Nav.Link>
//             <Nav.Link href="#about" className='text-primary-emphasis fw-semibold green '><span className="custom-navbar-collapse">About Us</span></Nav.Link>
//             <Nav.Link href="#contact" className='text-primary-emphasis fw-semibold green '><span className="custom-navbar-collapse">Contact Us</span></Nav.Link>
//             <Nav.Link href="#contact" className='text-primary-emphasis fw-semibold green '><span className="custom-navbar-collapse">{}</span></Nav.Link>
//           </Nav>         

//           <Nav className="d-lg-flex d-none">

//               {/* <span  className="text-primary-emphasis"><IoSearchSharp/></span>
//               <span  className="text-primary-emphasis"><FaRegUser /></span>
//               <span  className="text-primary-emphasis"><LuHeart /></span>
//               <span  className="text-primary-emphasis"><RiShoppingCartLine /></span> */}

//       {/* search */}

//             <Nav.Link href="#search" className='text-primary-emphasis ' >  <IoSearchSharp onClick={toggleSearch} className="me-2">
//             {name}
//           </IoSearchSharp>
          
//           </Nav.Link>


//     {/* login */}

//             {/* <Nav.Link href="#login" className='text-primary-emphasis '>

//             <FaRegUser onClick={toggleVisibility}>
//               {isVisible?'Hide':'Show'}
//             </FaRegUser >
//             </Nav.Link> */}

// <Nav.Link href="#login" className='text-primary-emphasis '
// onClick={()=>navigate('/login')}
// >
// <FaRegUser/>
// </Nav.Link>



// {/* 
//             <Nav.Link href="#wishlist" className='text-primary-emphasis ' ><LuHeart /></Nav.Link> */}


//       {/* cart */}

//             <Nav.Link href="#cart" className='text-primary-emphasis '>   
//               < RiShoppingCartLine onClick={toggleCart} className="me-2">
//          {name}
//             </RiShoppingCartLine>
//            </Nav.Link>


//           </Nav>

//         </Navbar.Collapse>


//       </Container>






// {/* search */}


//       <Offcanvas  className="h-50" placement="top" show={search} onHide={handleCloseSearch} {...props}>
//         <Offcanvas.Header closeButton  className='bg-body-tertiary'>
//           <Offcanvas.Title className='text-primary-emphasis'></Offcanvas.Title>
//         </Offcanvas.Header>
        
//         <Offcanvas.Body style={{
//             display:"flex",
//             flexDirection:"column",
//             justifyContent:"center",
//             alignItems:"center"

//         }}>
//           <p className='text-primary-emphasis fw-medium fs-5 text-uppercase'>What Are You Looking For?</p>
      
//          <div className='row w-50 search-container-icon'>



//         <IoSearchSharp className='searchicon'/>
//         <input type="text" required
//         className='searchinput p-2  border-black  border-opacity-25 col-12' placeholder='Search Menus' />
//          </div>
//         </Offcanvas.Body>
//       </Offcanvas>


// {/* cart */}

//       <Offcanvas  placement="end" show={cart} onHide={handleCloseCart} {...props}>
//         <Offcanvas.Header closeButton className='bg-body-tertiary'>
//           <Offcanvas.Title className='text-primary-emphasis'>Your Cart</Offcanvas.Title>
//         </Offcanvas.Header>
//         <Offcanvas.Body style={{
//             // display:"flex",
//             // flexDirection:"column",
//             // justifyContent:"center",
//             // alignItems:"center"

//         }}>

//           {/* <div>
//           <img src={Cart} alt="" className='img-fluid' />  
//           <p className='text-text-primary-emphasis opacity-75'>Your Cart is empty.</p>
//           <button className='cartbuttons text-white px-3 py-2 border-0 rounded-5 fw-medium' style={{backgroundColor:"#93ab01",fontSize:"13px"}}>GO TO SHOP
//           </button>
//           </div> */}
 


 


//            {/* {carts.map((selectcart,index)=>
//               <div 
//               key={index}
//                className="d-flex align-items-center pb-4 ">
//               <div className="">
//                 <img src={selectcart.img} alt="" className="img-fluid rounded" style={{width:"100px",height:"80px",   objectFit:"cover"}} />
//               </div>
//               <div className="ps-5">
//                  <h6 className="" style={{color:"#171f52",fontSize:'15px'}}>{selectcart.name}</h6>
//                  <p className="" style={{color:"#93ab01",fontSize:'15px'}}>{selectcart.price}</p>
                
//               </div>
            
//          </div>
// )}  */}

// {carts.map((selectcart,index)=>
//               <div 
//               key={index}
//                className="row pb-4">
//               <div className="col-4">
//                 <img src={selectcart.img} alt="" className="img-fluid rounded" style={{width:"100px",height:"80px",   objectFit:"cover"}} />
//               </div>
//               <div className="ps-5 col-6">
//                  <h6 className="" style={{color:"#171f52",fontSize:'15px'}}>{selectcart.name}</h6>
//                  <p className="" style={{color:"#93ab01",fontSize:'15px'}}>{selectcart.price}</p>
                
//               </div>
//               <div className="col-2">
//                  <p><IoIosCloseCircleOutline style={{color:"red",width:"20px",height:"20px"}}
//                   onClick={()=>delelecart()}/></p>
//               </div>
//          </div>
// )} 


//   <div>
// <div className="d-flex justify-content-between">
//    <h6 style={{color:"#171f52"}}>SUBTOTAL:</h6>
//    <h6 style={{color:"#171f52",fontSize:"20px"}}>&#8377;{total}.00</h6>
// </div>
//  <div className="text-center">
//  <button className="text-white border-0 px-4 py-2 w-50 rounded-5 fw-medium contactbuttons"  style={{backgroundColor:"#93ab01"}}>CHECKOUT</button>
//  </div>
//   </div>


//         </Offcanvas.Body>
//       </Offcanvas>




    

//     </Navbar>
//   );
// }

// export default NavScrollExample;









//=================

// import { IoSearchSharp } from "react-icons/io5";
// import { FaRegUser } from "react-icons/fa6";
// // import { LuHeart } from "react-icons/lu";
// import { RiShoppingCartLine } from "react-icons/ri";
// import { GiChickenOven } from "react-icons/gi";
// import { IoIosCloseCircleOutline } from "react-icons/io";



// import Container from 'react-bootstrap/Container';
// import Nav from 'react-bootstrap/Nav';
// import Navbar from 'react-bootstrap/Navbar';
// import './Navbar.css'

// import Offcanvas from 'react-bootstrap/Offcanvas';
// import { useState,useEffect } from 'react';
// import { useNavigate } from "react-router-dom";
// import Checkout from "../Checkout/Checkout";

//====================


// import Modal from 'react-bootstrap/Modal';
// import Accordion from 'react-bootstrap/Accordion';
// import { IoIosArrowRoundForward } from "react-icons/io";




 
// import login from '../Login/Login.jsx'
// import Login from "../Login/Login.jsx";


// import Button from 'react-bootstrap/Button';


// const options = [
//   {
//       name: 'Enable both scrolling & backdrop',
//       scroll: true,
//       backdrop: true,
//     },
//   ];


// function NavScrollExample({ name, ...props}) {












//------------------------
// function NavScrollExample({ carts, total }) {

   

//   const deleteCartItem = (id) => {
//     // Remove item by id
//     alert(`Item with id: ${id} deleted`);
//   };


//   console.log(total)
//   console.log(carts)





// // search
//   const [search, setSearch] = useState(false);

//   const handleCloseSearch = () => setSearch(false);

//   const toggleSearch = () => setSearch((s) => !s);



// // cart
//   const [cart, setCart] = useState(false);

//   const handleCloseCart = () => setCart(false);

//   const toggleCart= () => setCart((s) => !s);


// //increment and decrement

// const [incre,setIncre]=useState()
// const [decre,setDecre]=useState()

// function increment(){
//    setIncre((prev)=>prev+1)
// }

// function decrement(){
//   setIncre((prev)=>prev-1)
// }


//   // login
//   const navigate=useNavigate()

//   // const [isVisible, setisVisible] = useState(false);

//   // const toggleVisibility = () => setCart(!isVisible);



//   //delelecart

//   const delelecart=()=>{
//        alert("hi")
//   }



//   //modal

//   // const values = [true];
//   // const [fullscreen, setFullscreen] = useState(true);
//   // const [show, setShow] = useState(false);

//   // function handleShow(breakpoint) {
//   //   setFullscreen(breakpoint);
//   //   setShow(true);
//   // }


//   return (
//     <Navbar expand="lg" 
//     // className="bg-body-tertiary"
//     className="bg-white" id="home"
//     style={{zIndex:100}}
//     sticky="top"
//     >
//       <Container>
   
//         <Navbar.Brand href="#" style={{color:"#93ab01",fontFamily:"cursive",fontSize:"30px" }}>Shop<span className="text-primary-emphasis">Ease</span>
//         </Navbar.Brand>

//         <Navbar.Toggle aria-controls="basic-navbar-nav" 
//         style={{outline:"none",boxShadow:"none",border:"none"}}
//         >
//         <span  ><GiChickenOven style={{height:"35px",width:"40px" ,color:"#93ab01"}}/></span>
//         </Navbar.Toggle>

//         <Navbar.Collapse id="basic-navbar-nav" className="custom-navbar-collapses">
//           <Nav 
//             className="mx-auto my-2 my-lg-0"  
//           >
//             <Nav.Link href="#home" className='text-primary-emphasis fw-semibold green' ><span className="custom-navbar-collapse ">Home</span></Nav.Link>
//             <Nav.Link href="#menu" className='text-primary-emphasis fw-semibold green'><span className="custom-navbar-collapse">Menu</span></Nav.Link>
//             <Nav.Link href="#about" className='text-primary-emphasis fw-semibold green '><span className="custom-navbar-collapse">About Us</span></Nav.Link>
//             <Nav.Link href="#contact" className='text-primary-emphasis fw-semibold green '><span className="custom-navbar-collapse">Contact Us</span></Nav.Link>
//             <Nav.Link href="#contact" className='text-primary-emphasis fw-semibold green '><span className="custom-navbar-collapse">{}</span></Nav.Link>
//           </Nav>         

//           <Nav className="d-lg-flex d-none">

//               {/* <span  className="text-primary-emphasis"><IoSearchSharp/></span>
//               <span  className="text-primary-emphasis"><FaRegUser /></span>
//               <span  className="text-primary-emphasis"><LuHeart /></span>
//               <span  className="text-primary-emphasis"><RiShoppingCartLine /></span> */}

//       {/* search */}

//             <Nav.Link href="#search" className='text-primary-emphasis ' >  <IoSearchSharp onClick={toggleSearch} className="me-2">
//             {name}
//           </IoSearchSharp>
          
//           </Nav.Link>


//     {/* login */}

//             {/* <Nav.Link href="#login" className='text-primary-emphasis '>

//             <FaRegUser onClick={toggleVisibility}>
//               {isVisible?'Hide':'Show'}
//             </FaRegUser >
//             </Nav.Link> */}

// <Nav.Link href="#login" className='text-primary-emphasis '
// onClick={()=>navigate('/login')}
// >
// <FaRegUser/>
// </Nav.Link>



// {/* 
//             <Nav.Link href="#wishlist" className='text-primary-emphasis ' ><LuHeart /></Nav.Link> */}


//       {/* cart */}

//             <Nav.Link href="#cart" className='text-primary-emphasis '>   
//               < RiShoppingCartLine onClick={toggleCart} className="me-2">
//          {name}
//             </RiShoppingCartLine>
//            </Nav.Link>


//           </Nav>

//         </Navbar.Collapse>


//       </Container>






// {/* search */}


//       <Offcanvas  className="h-50" placement="top" show={search} onHide={handleCloseSearch} 
//       // {...props}
//       >
//         <Offcanvas.Header closeButton  className='bg-body-tertiary'>
//           <Offcanvas.Title className='text-primary-emphasis'></Offcanvas.Title>
//         </Offcanvas.Header>
        
//         <Offcanvas.Body style={{
//             display:"flex",
//             flexDirection:"column",
//             justifyContent:"center",
//             alignItems:"center"

//         }}>
//           <p className='text-primary-emphasis fw-medium fs-5 text-uppercase'>What Are You Looking For?</p>
      
//          <div className='row w-50 search-container-icon'>



//         <IoSearchSharp className='searchicon'/>
//         <input type="text" required
//         className='searchinput p-2  border-black  border-opacity-25 col-12' placeholder='Search Menus' />
//          </div>
//         </Offcanvas.Body>
//       </Offcanvas>


// {/* cart */}

//       <Offcanvas  placement="end" show={cart} onHide={handleCloseCart} 
//       // {...props}
//       >
//         <Offcanvas.Header closeButton className='bg-body-tertiary'>
//           <Offcanvas.Title className='text-primary-emphasis'>Your Cart</Offcanvas.Title>
//         </Offcanvas.Header>
//         <Offcanvas.Body style={{
//             // display:"flex",
//             // flexDirection:"column",
//             // justifyContent:"center",
//             // alignItems:"center"

//         }}>

//           {/* <div>
//           <img src={Cart} alt="" className='img-fluid' />  
//           <p className='text-text-primary-emphasis opacity-75'>Your Cart is empty.</p>
//           <button className='cartbuttons text-white px-3 py-2 border-0 rounded-5 fw-medium' style={{backgroundColor:"#93ab01",fontSize:"13px"}}>GO TO SHOP
//           </button>
//           </div> */}
 


 


//            {/* {carts.map((selectcart,index)=>
//               <div 
//               key={index}
//                className="d-flex align-items-center pb-4 ">
//               <div className="">
//                 <img src={selectcart.img} alt="" className="img-fluid rounded" style={{width:"100px",height:"80px",   objectFit:"cover"}} />
//               </div>
//               <div className="ps-5">
//                  <h6 className="" style={{color:"#171f52",fontSize:'15px'}}>{selectcart.name}</h6>
//                  <p className="" style={{color:"#93ab01",fontSize:'15px'}}>{selectcart.price}</p>
                
//               </div>
            
//          </div>
// )}  */}

// {carts.map((selectcart,index)=>
//               <div 
//               key={index}
//                className="row pb-4">
//               <div className="col-4">
//                 <img src={selectcart.img} alt="" className="img-fluid rounded" style={{width:"100px",height:"80px",   objectFit:"cover"}} />
//               </div>
//               <div className="ps-5 col-6">
//                  <h6 className="" style={{color:"#171f52",fontSize:'15px'}}>{selectcart.name}</h6>
//                  <p className="" style={{color:"#93ab01",fontSize:'15px'}}>{selectcart.price}</p>
                
//               </div>

//             {/* increment and decrement */}
//             <div>
//               <button onClick={increment}>+{incre} z</button>
//               <button onClick={decrement}>-{decre}</button>
//             </div>

            

//               <div className="col-2">
//                  {/* <p><IoIosCloseCircleOutline style={{color:"red",width:"20px",height:"20px"}}
//                   onClick={()=>delelecart()}/></p>
//                    <p> */}<p>
//                   <IoIosCloseCircleOutline style={{ color: "red", width: "20px", height: "20px" }} onClick={() => deleteCartItem(selectcart.id)} />
//                   {/* (item.id)} /> */}
//                 </p>
//               </div>
//          </div>
// )} 


//   <div>
// <div className="d-flex justify-content-between">
//    <h6 style={{color:"#171f52"}}>SUBTOTAL:</h6>
//    <h6 style={{color:"#171f52",fontSize:"20px"}}>&#8377;{total}.00</h6>
// </div>
//  <div className="text-center">



//  {/* <button className="text-white border-0 px-4 py-2 w-50 rounded-5 fw-medium contactbuttons"  style={{backgroundColor:"#93ab01"}}>CHECKOUT</button> */}



// {/* modal */}

//  <Checkout carts={carts} total={total}/>

//  {/* {values.map((v, idx) => (
//          <button key={idx}  onClick={() => handleShow(v)} className="text-white border-0 px-4 py-2 w-50 rounded-5 fw-medium contactbuttons"  style={{backgroundColor:"#93ab01"}}>CHECKOUT{typeof v === 'string' && `below ${v.split('-')[0]}`}</button>
//       ))}
//       <Modal show={show} fullscreen={fullscreen} onHide={() => setShow(false)}>
//         <Modal.Header closeButton>
      
//         </Modal.Header>
//         <Modal.Body>
          
// <div className="row">

// <div className="col-lg-6 ">
//     <h3 className='border-bottom border-black pb-2'>Billing Details</h3>
  
//     <form action="#" className='forms'>


//     <div className='flexibles 
//     '>
//         <div className='w-100'>
//         <label htmlFor="fname">First Name</label>
//         <input type="text" id="fname" className='p-2 w-100 mb-4'/>
//         </div>

//         <div className='w-100'>
//         <label htmlFor="lname">Last Name</label>
//         <input type="text" id="lname" className='p-2 w-100  mb-4' />
//         </div>

//     </div>
    

    
//    <div className='flexibles'>
//    <div className='w-100'>
//     <label htmlFor="email">Email Address</label>
//     <input type="email" id="email"placeholder='Email'className='p-2 w-100  mb-4'  />
//     </div>

//     <div className='w-100'>
//     <label htmlFor="phone ">Phone</label>
//     <input type="tel" id="phone "placeholder='Number' className='p-2 w-100  mb-4' />
//     </div>
//    </div>

   





//     <div>
//     <label htmlFor="address">Address</label>
//     <input type="text" id="address"placeholder='Street address' className='p-2 w-100  mb-4'/>
//     </div>

//     <div>
//     <input type="text" id="address"placeholder='Apartment,Flat,etc.(optional)' className='p-2 w-100  mb-4'/>
//     </div>

//     <div>
//     <label htmlFor="towncity">Town / City</label>
//     <input type="text" id="towncity"placeholder='Town / City'className='p-2 w-100  mb-4' />
//     </div>

//    <div className='flexibles'>
//    <div className='w-100'>
//     <label htmlFor="statecountry">State / Country</label>
//     <input type="text" id="statecountry"placeholder='State / Country' className='p-2 w-100  mb-4'/>
//     </div>

//     <div className='w-100'>
//     <label htmlFor="postcodezip ">Postcode / Zip</label>
//     <input type="text" id="Postcodezip "placeholder='Postcode / Zip' className='p-2 w-100  mb-4' />
//     </div>
//    </div>



// </form>


// </div>
       
// <div className="col-lg-6 p-4 border border-4">
// <h3 className='border-bottom border-black pb-2'>Your Order</h3>

  
// <div className="row border-bottom border-black-50 py-3">

//      <div className="col-6 ">
//        <h6>Product</h6>
//      </div>

//      <div className="col-6">
//         <h6>Total</h6>
//      </div>

// </div>

//  <div className="row border-bottom border-black-50 py-3">

//    <div className="col-6 ">
//        <h6>Name</h6>
//      </div>

//      <div className="col-6">
//         <h6>&#8377; price</h6>
//      </div>


// </div>


// <div className="row border-bottom border-black-50 py-3">

// <div className="col-6 ">
// <h6>Shipping</h6>
// </div>

// <div className="col-6">
// <label htmlFor="shipping">
// <input type="radio" name="" id="shipping" /> Free Shipping
// </label>
// </div>


// </div>


// <div className="row border-bottom border-black-50 py-3">

// <div className="col-6 ">
// <h6>Order Total</h6>
// </div>

// <div className="col-6">
// <h6>&#8377; price</h6>
// </div>


// </div>


// <div className="row">
// <div className="col-12">


// <Accordion defaultActiveKey="0">

// <Accordion.Item eventKey="0" className='my-3'  style={{outline:"none",boxShadow:"none",border:"none"}} >
// <Accordion.Header>Direct Bank Transfer</Accordion.Header>
// <Accordion.Body>
// Make your payment directly into our bank account. Please use your Order ID as the payment reference. Your order won’t be shipped until the funds have cleared in our account.
// </Accordion.Body>
// </Accordion.Item>

// <Accordion.Item eventKey="1" className='mb-3'  style={{outline:"none",boxShadow:"none",border:"none"}} >
// <Accordion.Header>Cheque Payment</Accordion.Header>
// <Accordion.Body>
// Please send your cheque to Store Name, Store Street, Store Town, Store State / County, Store Postcode.
// </Accordion.Body>
// </Accordion.Item>

// <Accordion.Item eventKey="2"  style={{outline:"none",boxShadow:"none",border:"none"}}>
// <Accordion.Header>PayPal</Accordion.Header>
// <Accordion.Body>
// Pay via PayPal; you can pay with your credit card if you don’t have a PayPal account.
// </Accordion.Body>
// </Accordion.Item>

// </Accordion>

// <div>
// <button className='buttons rounded-3  border-0 p-3 w-100 fw-bold fs-6 mt-3' style={{backgroundColor: "#93ab01"}}>PLACE ORDER<IoIosArrowRoundForward style={{width:"30px",height:"30px",color:"white" }}/></button>
// </div>

// </div>
// </div>


// </div>        








// </div>

//         </Modal.Body>
//       </Modal> */}






//  </div>
//   </div>


//         </Offcanvas.Body>
//       </Offcanvas>




    

//     </Navbar>
//   );
// }

// export default NavScrollExample;
//=============


















//-2222222222222

import React, { useState } from 'react';
import { Navbar, Container, Nav, Offcanvas } from 'react-bootstrap';
import { IoSearchSharp } from 'react-icons/io5';
import { RiShoppingCartLine } from 'react-icons/ri';
import { FaRegUser } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
// import { IoIosCloseCircleOutline } from 'react-icons/io';
// import { AiFillDelete } from "react-icons/ai";
import { RiDeleteBin6Line } from "react-icons/ri";



import Cart from './Cart.png'
import Checkout from '../Checkout/Checkout';

const NavScrollExample = ({ carts, total, updateCart }) => {
  const [cart, setCart] = useState(false);
  const handleCloseCart = () => setCart(false);
  const toggleCart = () => setCart((s) => !s);

  const handleIncreaseQuantity = (id) => {
    updateCart(id, 'increase');
  };

  const handleDecreaseQuantity = (id) => {
    updateCart(id, 'decrease');
  };

  const handleDeleteItem = (id) => {
    updateCart(id, 'delete');
  };

  const navigate = useNavigate();


  return (
    <Navbar expand="lg" className="bg-white" sticky="top">
      <Container>
        <Navbar.Brand href="#" style={{ color: "#93ab01", fontFamily: "cursive", fontSize: "30px" }}>
          Shop<span className="text-primary-emphasis">Ease</span>
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav">
          <span> {/* Icon */} </span>
        </Navbar.Toggle>

        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mx-auto">
            <Nav.Link href="#home" className="text-primary-emphasis fw-semibold green">
              Home
            </Nav.Link>
            <Nav.Link href="#menu" className="text-primary-emphasis fw-semibold green">
              Menu
            </Nav.Link>
            <Nav.Link href="#about" className="text-primary-emphasis fw-semibold green">
              About Us
            </Nav.Link>
            <Nav.Link href="#contact" className="text-primary-emphasis fw-semibold green">
              Contact Us
            </Nav.Link>
          </Nav>

          <Nav className="d-lg-flex d-none">
            <Nav.Link href="#search" className="text-primary-emphasis">
              <IoSearchSharp />
            </Nav.Link>

            <Nav.Link href="#login" className="text-primary-emphasis" onClick={() => navigate('/login')}>
              <FaRegUser />
            </Nav.Link>

            <Nav.Link href="#cart" className="text-primary-emphasis" onClick={toggleCart}>
              <RiShoppingCartLine />
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>

      {/* Cart Offcanvas */}
      <Offcanvas placement="end" show={cart} onHide={handleCloseCart}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Your Cart</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          {carts.length === 0 ? (
            <>
          
            {/* <p>Your cart is empty.</p> */}

          <div className='' style={{
 display:"flex", flexDirection:"column", height:"85%",justifyContent:"center", alignItems:"center"
}} >
          <img src={Cart} alt="" className='img-fluid' />  
           <p className='text-text-primary-emphasis opacity-75'>Your Cart is empty.</p>
           <button id="cart" className='cartbuttons text-white px-3 py-2 border-0 rounded-5 fw-medium' style={{backgroundColor:"#93ab01",fontSize:"13px"}}>GO TO SHOP
           </button>
           </div> 
           </>
      
          ) : (
            carts.map((cartItem) => (
              <div className="row pb-4" key={cartItem.id}>
                <div className="col-4">
                  <img
                    src={cartItem.img}
                    alt={cartItem.name}
                    className="img-fluid rounded"
                    style={{ width: "100px", height: "80px", objectFit: "cover" }}
                  />
                </div>
                <div className="ps-5 col-8">
                  <h6>{cartItem.name}</h6>
                  <p>{cartItem.price} x {cartItem.quantity}</p>

                  <button
                    className="btn btn-sm btn-outline-primary mx-1"
                    onClick={() => handleDecreaseQuantity(cartItem.id)}
                    disabled={cartItem.quantity === 1}
                  >
                    -
                  </button>
                  <button
                    className="btn btn-sm btn-outline-success mx-1"
                    onClick={() => handleIncreaseQuantity(cartItem.id)}
                  >
                    +
                  </button>
                  
                   <button className='btn btn-sm btn-outline-danger'  onClick={() => handleDeleteItem(cartItem.id)}>
                   <RiDeleteBin6Line 
                    style={{ width: "20px", height: "20px", cursor: "pointer" }}
                  >
                  </RiDeleteBin6Line >
                   </button>

                </div>
  
              </div>
            ))
          )}

          <div className="d-flex justify-content-between">
            <h6>SUBTOTAL:</h6>
            <h6>&#8377;{total}</h6>
          </div>

          {/* <div className="text-center">
            <button className="text-white border-0 px-4 py-2 w-50 rounded-5" style={{ backgroundColor: "#93ab01" }}>
              CHECKOUT
            </button>
          </div> */}




          
 {/* { modal } */}
  <Checkout carts={carts} total={total}/>




        </Offcanvas.Body>
      </Offcanvas>
    </Navbar>
  );
};

export default NavScrollExample;
//---------------------2










