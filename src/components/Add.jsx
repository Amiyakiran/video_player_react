import React, { useState } from 'react'  
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import { uploadVideo } from '../services/allAPI';

function Add() {
    const [video,setVideo]=useState({
      id:"",
      caption:"",
      url:"",
      embedLink:""
    })
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
 
    const getEmbedLink = (e)=>{
      const {value} = e.target
      console.log(value.slice(-11));
      const link = `https://www.youtube.com/embed/${value.slice(-11)}`
      setVideo({...video,embedLink:link})
    }
    console.log(video);

    const handleUpload = async ()=>{
      const {id,caption,url,embedLink} = video
      if(!id || !caption || !url || !embedLink){
        alert("Please Fill the form Completely")
      }
      else{
           //make api call uploadVideo
           const response = await uploadVideo(video)
           console.log(response);
           if(response.status>=200 && response.status<300){
            alert(`${response.data.caption} video uploaded sucessfully !`)
            handleClose()
           }else{
            console.log(response);
            alert("Cannot perform the operation. Please try after sometime....")
           }
      }
     
    }

  return (
   <>
        <div className='d-flex align-items-center'>
            <h5>Upload New Video</h5>
            <button onClick={handleShow} className='btn'><i class="fa-solid fa-cloud-arrow-up fs-5"></i></button>
        </div>
        <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title><i className="fa-solid fa-film text-warning"></i> Upload Video</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>Please fill the following details</p>
          <Form className='border border-secondary rounded p-3'>
          <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Control type="text" placeholder="Enter Video ID" onChange={(e)=>setVideo({...video,id:e.target.value})} />  
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Control type="text" placeholder="Enter Video Caption" onChange={(e)=>setVideo({...video,caption:e.target.value})} />  
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Control type="text" placeholder="Enter Video Image Url" onChange={(e)=>setVideo({...video,url:e.target.value})} />  
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Control type="text" placeholder="Enter Youtube Video Link" onChange={getEmbedLink}  />  
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button onClick={handleUpload} className='btn btn-warning'>Upload</Button>
        </Modal.Footer>
      </Modal>
   </>
  )
}

export default Add


//https://www.youtube.com/watch?v=WWr9086eWtY

//https://www.youtube.com/embed/WWr9086eWtY
//https://www.youtube.com/embed/xSTmTWKBtt0
//<iframe width="942" height="530" src="https://www.youtube.com/embed/xSTmTWKBtt0" title="Leo | Ordinary person song | Leo songs | Thalapathy 67 song..." frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>