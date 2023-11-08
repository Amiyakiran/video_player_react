import React, { useEffect } from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { addCategory, deleteCategory, getAVideo, getAllCategory, updateCategory } from '../services/allAPI';
import { Col, Row } from 'react-bootstrap';
import VideoCard from './VideoCard';

function Category() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  //state to hold category name
  const [categoryName , setCategoryName]= useState("")
  const [allCategories , setAllCategories] = useState([])

  const handleAddCategory = async()=>{
    //application/json
    if(categoryName){
      let body = {
        categoryName,
        allVideos:[]
      }
      //make api call
      const response = await addCategory(body)
      console.log(response);
      if(response.status>=200 && response.status<300){
        toast.success('Added successfully')
        handleClose()
        setCategoryName("")
        //GET CATEGORIES
        getCategories()
      }
      else{
        toast.error('Category Addition failed . Please try after some time')
      }
    }
    else{
      toast.warning('Please fill the Category name')
    }

  }

const getCategories = async ()=>{
  const {data} = await getAllCategory()
  setAllCategories(data);

}
console.log(allCategories);

const handleDelete = async(id)=>{
   await deleteCategory(id)
   getCategories()
}
const dragOver = (e)=>{
  e.preventDefault()
  console.log("video drag over Category");
}

const videoDrop = async(e, categoryId)=>{
  console.log("video Dropped inside Category id ", categoryId);
 const videoId = e.dataTransfer.getData("videoID")
 console.log("video card id is :",videoId);
     //api call to get a video
   const {data} = await getAVideo(videoId)
   console.log(data);
   //api to get category details
   const selectedCategory = allCategories?.find(item=>item.id===categoryId)
   selectedCategory.allVideos.push(data)
   console.log(selectedCategory);
   //make api call to update category
   await updateCategory(categoryId,selectedCategory)
   getCategories()
}


useEffect(()=>{
  getCategories()
},[])


  return (
    <>
      <div className='d-grid ms-3'>
        <button onClick={handleShow} className='btn btn-warning'>Add New Category</button>
      </div>
      {
        allCategories?.length>0? allCategories?.map((item)=>(
          <div className=' mt-5 border rounded p-3 ms-4' droppable onDragOver={(e)=>dragOver(e)} onDrop={(e)=>videoDrop(e,item?.id)}>
              <div className="d-flex justify-content-between align-items-center mb-3">
                <h6>{item.categoryName}</h6>
                <button onClick={()=>handleDelete(item?.id)} className='btn btn-danger ms-3'><i className='fa-solid fa-trash text-white'></i></button>
              </div>
              <Row>
                {
                  item?.allVideos &&
                  item?.allVideos.map(card=>(
                    <Col sm={12}>
                      <VideoCard displayData={card} insideCategory={true} />
                    </Col>
                  ))
                }
              </Row>
          </div>
        )): <p className='fw-bolder fs-5 text-danger m-5'>No Category is added</p>
      }

      <Modal
          show={show}
          onHide={handleClose}
          backdrop="static"
          keyboard={false}
        >
          <Modal.Header closeButton>
            <Modal.Title><i className="fa-solid fa-pencil text-warning"></i>Add New Category </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form className='border border-secondary rounded p-3'>
              <Form.Label>Enter Category Name</Form.Label>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Control type="text" placeholder="Enter Category Name" onChange={(e)=>setCategoryName(e.target.value)} />  
              </Form.Group>
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Cancel
            </Button>
            <Button className='btn btn-warning' onClick={handleAddCategory}>Add</Button>
          </Modal.Footer>
        </Modal>
        <ToastContainer
      position='top-center'
      theme='colored'
      autoClose={2000}
      />
    </>
  )
}

export default Category