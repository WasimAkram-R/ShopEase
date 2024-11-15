import { useState } from 'react';

import Modal from 'react-bootstrap/Modal';

function Ordered() {
  const [smShow, setSmShow] = useState(false);


  return (
    <>
      <button onClick={() => setSmShow(true)} className="me-2">
        Small modal
      </button>
   
      <Modal
        size="sm"
        show={smShow}
        onHide={() => setSmShow(false)}
        aria-labelledby="example-modal-sizes-title-sm"
      >
        <Modal.Header closeButton>
          <Modal.Title id="example-modal-sizes-title-sm">
            Ordered
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>name added to cart</Modal.Body>
      </Modal>

      
    </>
  );
}

export default Ordered;