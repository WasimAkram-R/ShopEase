import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';


import Accordion from 'react-bootstrap/Accordion';
import { IoIosArrowRoundForward } from "react-icons/io";



function Example() {
  const values = [true];
  const [fullscreen, setFullscreen] = useState(true);
  const [show, setShow] = useState(false);

  function handleShow(breakpoint) {
    setFullscreen(breakpoint);
    setShow(true);
  }

  return (
    <>
    
      {values.map((v, idx) => (
         <button key={idx}  onClick={() => handleShow(v)} className="text-white border-0 px-4 py-2 w-50 rounded-5 fw-medium contactbuttons"  style={{backgroundColor:"#93ab01"}}>CHECKOUT{typeof v === 'string' && `below ${v.split('-')[0]}`}</button>
      ))}
      <Modal show={show} fullscreen={fullscreen} onHide={() => setShow(false)}>
        <Modal.Header closeButton>
          {/* <Modal.Title>Modal</Modal.Title> */}
        </Modal.Header>
        <Modal.Body>
          
<div className="row">

<div className="col-lg-6 ">
    <h3 className='border-bottom border-black pb-2'>Billing Details</h3>
  
    <form action="#" className='forms'>


    <div className='flexibles 
    '>
        <div className='w-100'>
        <label htmlFor="fname">First Name</label>
        <input type="text" id="fname" className='p-2 w-100 mb-4'/>
        </div>

        <div className='w-100'>
        <label htmlFor="lname">Last Name</label>
        <input type="text" id="lname" className='p-2 w-100  mb-4' />
        </div>

    </div>
    

    
   <div className='flexibles'>
   <div className='w-100'>
    <label htmlFor="email">Email Address</label>
    <input type="email" id="email"placeholder='Email'className='p-2 w-100  mb-4'  />
    </div>

    <div className='w-100'>
    <label htmlFor="phone ">Phone</label>
    <input type="tel" id="phone "placeholder='Number' className='p-2 w-100  mb-4' />
    </div>
   </div>

   





    <div>
    <label htmlFor="address">Address</label>
    <input type="text" id="address"placeholder='Street address' className='p-2 w-100  mb-4'/>
    </div>

    <div>
    <input type="text" id="address"placeholder='Apartment,Flat,etc.(optional)' className='p-2 w-100  mb-4'/>
    </div>

    <div>
    <label htmlFor="towncity">Town / City</label>
    <input type="text" id="towncity"placeholder='Town / City'className='p-2 w-100  mb-4' />
    </div>

   <div className='flexibles'>
   <div className='w-100'>
    <label htmlFor="statecountry">State / Country</label>
    <input type="text" id="statecountry"placeholder='State / Country' className='p-2 w-100  mb-4'/>
    </div>

    <div className='w-100'>
    <label htmlFor="postcodezip ">Postcode / Zip</label>
    <input type="text" id="Postcodezip "placeholder='Postcode / Zip' className='p-2 w-100  mb-4' />
    </div>
   </div>



</form>


</div>
       
<div className="col-lg-6 p-4 border border-4">
<h3 className='border-bottom border-black pb-2'>Your Order</h3>

  
<div className="row border-bottom border-black-50 py-3">

     <div className="col-6 ">
       <h6>Product</h6>
     </div>

     <div className="col-6">
        <h6>Total</h6>
     </div>

</div>

 <div className="row border-bottom border-black-50 py-3">

   <div className="col-6 ">
       <h6>Name</h6>
     </div>

     <div className="col-6">
        <h6>&#8377; price</h6>
     </div>


</div>



{/* <div className="row border-bottom border-black-50">

<div className="col-6 ">
<h6>Cart Subtotal</h6>
</div>

<div className="col-6">
<h6>&#8377;price</h6>
</div>


</div> */}

<div className="row border-bottom border-black-50 py-3">

<div className="col-6 ">
<h6>Shipping</h6>
</div>

<div className="col-6">
<label htmlFor="shipping">
<input type="radio" name="" id="shipping" /> Free Shipping
</label>
</div>


</div>


<div className="row border-bottom border-black-50 py-3">

<div className="col-6 ">
<h6>Order Total</h6>
</div>

<div className="col-6">
<h6>&#8377; price</h6>
</div>


</div>


<div className="row">
<div className="col-12">


<Accordion defaultActiveKey="0">

<Accordion.Item eventKey="0" className='my-3'  style={{outline:"none",boxShadow:"none",border:"none"}} >
<Accordion.Header>Direct Bank Transfer</Accordion.Header>
<Accordion.Body>
Make your payment directly into our bank account. Please use your Order ID as the payment reference. Your order won’t be shipped until the funds have cleared in our account.
</Accordion.Body>
</Accordion.Item>

<Accordion.Item eventKey="1" className='mb-3'  style={{outline:"none",boxShadow:"none",border:"none"}} >
<Accordion.Header>Cheque Payment</Accordion.Header>
<Accordion.Body>
Please send your cheque to Store Name, Store Street, Store Town, Store State / County, Store Postcode.
</Accordion.Body>
</Accordion.Item>

<Accordion.Item eventKey="2"  style={{outline:"none",boxShadow:"none",border:"none"}}>
<Accordion.Header>PayPal</Accordion.Header>
<Accordion.Body>
Pay via PayPal; you can pay with your credit card if you don’t have a PayPal account.
</Accordion.Body>
</Accordion.Item>

</Accordion>

<div>
<button className='buttons rounded-3  border-0 p-3 w-100 fw-bold fs-6 mt-3' style={{backgroundColor: "#93ab01"}}>PLACE ORDER<IoIosArrowRoundForward style={{width:"30px",height:"30px",color:"white" }}/></button>
</div>

</div>
</div>


</div>        








</div>

        </Modal.Body>
      </Modal>

    </>
  );
}

export default Example;