import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';

import Cart from './Cart.png'
import './Cart.css'
import { RiShoppingCartLine } from "react-icons/ri";

const options = [
//   {
//     name: 'Enable backdrop (default)',
//     scroll: false,
//     backdrop: true,
//   },
//   {
//     name: 'Disable backdrop',
//     scroll: false,
//     backdrop: false,
//   },
//   {
//     name: 'Enable body scrolling',
//     scroll: true,
//     backdrop: false,
//   },
  {
    name: 'Enable both scrolling & backdrop',
    scroll: true,
    backdrop: true,
  },
];

function OffCanvasExample({ name, ...props }) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const toggleShow = () => setShow((s) => !s);

  return (
    <>
      {/* <Button variant="primary" onClick={toggleShow} className="me-2">cart
        {name}
      </Button> */}

      < RiShoppingCartLine onClick={toggleShow} className="me-2">
         {name}
      </RiShoppingCartLine>

 


      <Offcanvas  placement="end" show={show} onHide={handleClose} {...props}>
        <Offcanvas.Header closeButton className='bg-body-tertiary'>
          <Offcanvas.Title className='text-primary-emphasis'>Your Cart</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body 
        style={{
            display:"flex",
            flexDirection:"column",
            justifyContent:"center",
            alignItems:"center"

        }}
        >
          <img src={Cart} alt="" className='img-fluid' />  
          <p className='text-text-primary-emphasis opacity-75'>Your Cart is empty.</p>
          <button className='cartbuttons text-white px-3 py-2 border-0 rounded-5 fw-medium' style={{backgroundColor:"#93ab01",fontSize:"13px"}}>GO TO SHOP</button>
        </Offcanvas.Body>


      </Offcanvas>
    </>
  );
}

export default OffCanvasExample;

// function Example() {
//   return (
//     <>
//       {options.map((props, idx) => (
//         <OffCanvasExample key={idx} {...props} />
//       ))}
//     </>
//   );
// }

// render(<Example />);