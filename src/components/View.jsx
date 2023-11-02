 import React, { useEffect, useState } from 'react'
import { Col, Row } from 'react-bootstrap'
import VideoCard from './VideoCard'
import { getAllVideos } from '../services/allAPI'
function View() {
        const [allVideo, setAllVideo] = useState([])
  const getAllUploadedVideo = async()=>{
        const {data} = await getAllVideos()
        setAllVideo(data);
  }
  console.log(allVideo);
  useEffect(()=>{
    getAllUploadedVideo()
  },[])

  return (
    <>
        <Row>
            { allVideo.length>0?
              allVideo.map((video)=>(
                <Col sm={12} md={6} lg={4} xl={3}>
                <VideoCard displayData ={video}/>
               </Col>
              )):
            <p>Nothing to display</p>
            }
          
        </Row>
    </>
   
  )
}

export default View