import React, { Component } from 'react';
import {Modal, Button} from 'react-bootstrap';

const ModalComponent = (props) => {
  return (
    <div>
        <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Account Setting
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
          
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal> 
      </div>
  );
}

export default ModalComponent;
