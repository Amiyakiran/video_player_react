import { useState } from 'react';
import React from 'react'
import Card from 'react-bootstrap/Card';
import Modal from 'react-bootstrap/Modal';

function VideoCard() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  return (
    <>
         <Card style={{ width: '18rem' }}>
      <Card.Img onClick={handleShow} variant="top" src="https://c.saavncdn.com/026/Chaleya-From-Jawan-Hindi-2023-20230814014337-500x500.jpg" />
      <Card.Body>
        <Card.Title className='d-flex justify-content-between align-items-center'>
            <h6>Video Caption</h6>
            <button className='btn btn-danger'><i class="fa-solid fa-trash-can"></i></button>
        </Card.Title>
      </Card.Body>
    </Card>

    <Modal show={show} onHide={handleClose} animation={false}>
        <Modal.Header closeButton>
          <Modal.Title>Video Caption</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <iframe width="100%" height="530" src="https://www.youtube.com/embed/8eYG5QGZAZs?autoplay=1" title="Jawan: Hayyoda (Tamil) | Shahrukh Khan | Atlee | Anirudh | Nayanthara | Vijay S | Priya Mali | Vivek" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        </Modal.Body>
      </Modal>
    </>
  )
}

export default VideoCard