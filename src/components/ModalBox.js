import React from 'react'
import { Modal, Button } from 'react-bootstrap'

function ModelBox(props) {
    return (
      <Modal
        {...props}
        size="md"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        {/* <div>
        <Button onClick={props.onHide}>Close</Button>
        </div> */}
        <Modal.Body className="p-0 m-0">
        <iframe className="p-0 m-0" width="100%" height="315" src="https://www.youtube.com/embed/RvRMFXela7E" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </Modal.Body>        
      </Modal>
    );
  }

  export default ModelBox