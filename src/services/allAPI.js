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


//delete a videos from json server
export const deleteAVideos = async (id)=>{
    //make delete request to http://localhost:4000/videos to get videos to json server return response to videoCard component
    return await commonAPI('DELETE',`${serverURL}/videos/${id}`,{})
}

//store watching video history to json server
 export const addToHistory = async(videoDetails)=>{
    //make post request to  http://localhost:4000/history to add video history in json server and return response to videoCard component 
    return await commonAPI('POST',`${serverURL}/history`,videoDetails)
 }


 //get all watching video history to json server
 export const getAllHistory = async()=>{
    //make get request to  http://localhost:4000/history to get video history in json server and return response to watch history component 
    return await commonAPI('GET',`${serverURL}/history`,"")
 }
 //api to delete history from json
 export const deleteHistory = async (id)=>{
    //make delete request to http://localhost:4000/history to  delete video from watch history from json server return response to watch history  component
    return await commonAPI('DELETE',`${serverURL}/history/${id}`,{})
}


 //upload a category

export const addCategory = async (reqBody)=>{
    //make post request to http://localhost:4000/categories to add category to json server return response to category component
     return await commonAPI('POST',`${serverURL}/categories`,reqBody)

}

//get a category

export const getAllCategory = async ()=>{
    //make get request to http://localhost:4000/categories to get category from json server return response to category component
     return await commonAPI('GET',`${serverURL}/categories`,"")

}

//delete a category

export const deleteCategory = async (id)=>{
    //make delete request to http://localhost:4000/categories/id to get category from json server return response to category component
     return await commonAPI('DELETE',`${serverURL}/categories/${id}`,{})

}


//get a videos from json server
 export const getAVideo = async (id)=>{
    //make get request to http://localhost:4000/videos to get videos to json server return response to videoCard component
    return await commonAPI('GET',`${serverURL}/videos/${id}`,"")
}


//update a category from json-server
export const updateCategory = async (id,body)=>{
    //make put request to http://localhost:4000/categories/id to update particular category from json server return response to category component
    return await commonAPI('PUT',`${serverURL}/categories/${id}`,body)
}
