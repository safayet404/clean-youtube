import { useEffect } from "react"
import getPlaylist from "./api"

function App() {

  useEffect(()=>{
    getPlaylist('PL_XxuZqN0xVBj6_Sbh-EGMOPjWu-2b3ij').then(res => console.log(res))
  },[])

  return (
    <div>
      <h1>Hello</h1>
    </div>
  )
}

export default App
