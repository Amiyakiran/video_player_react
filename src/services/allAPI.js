import { commonAPI } from "./commonAPI"
import { serverURL } from "./serverURL"


//upload a video

export const uploadVideo = async (reqBody)=>{
    //make post request to http://localhost:4000/videos to add videos to json server return response to add component
     return await commonAPI('POST',`${serverURL}/videos`,reqBody)

}

//get all videos from json server
export const getAllVideos = async ()=>{
     //make get request to http://localhost:4000/videos to get videos to json server return response to view component
     return await commonAPI('GET',`${serverURL}/videos`,"")
}

//get a videos from json server
export const getAVideos = async (id)=>{
    //make get request to http://localhost:4000/videos to get videos to json server return response to videoCard component
    return await commonAPI('GET',`${serverURL}/videos/${id}`,"")
}

//delete a videos from json server
export const deleteAVideos = async (id)=>{
    //make delete request to http://localhost:4000/videos to get videos to json server return response to videoCard component
    return await commonAPI('DELETE',`${serverURL}/videos/${id}`,{})
}