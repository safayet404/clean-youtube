import axios from "axios"

const key = 'AIzaSyBP2IMMLE8Q6aEc7CZwzpqpCRwrZVVn8MA'
const getPlaylist = async (playlistId,pageToken='',result=[]) =>{

  

    const URL = `https://youtube.googleapis.com/youtube/v3/playlistItems?part=id%2CcontentDetails%2Csnippet&maxResults=20&playlistId=${playlistId}&key=${key}&pageToken=${pageToken}`

    const {data} = await axios.get(URL)
    result = [...result,...data.items]
    if(data.nextPageToken) 
    {
        result =  getPlaylist(playlistId,data.nextPageToken,result)
    }

    return result
}



export default getPlaylist

