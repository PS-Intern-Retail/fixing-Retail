import React from 'react'
import './Main.css'
import Uploader from './Uploader.js'

export default function Main(){
    return(
        <div>
            <img className="icon" src="https://th.bing.com/th/id/R.ea0d38e91f172b985c948f989e98c39f?rik=NR0pbQNo1c8XMw&riu=http%3a%2f%2fcdn.onlinewebfonts.com%2fsvg%2fimg_357118.png&ehk=cUAdriibLw7xEDkfIXfwIR3GAAijwWJWZIpc7ctVbmo%3d&risl=&pid=ImgRaw&r=0"/>
            
            <div className='AI_GenBox'>
                <input className="chatBoxInput"></input>            
            </div>
            <div className="Upload">
                <Uploader></Uploader>
                <button className='viewUploadsBtn'>View All Uploads</button>
            </div>
            <div className='viewPlaylist'>  
                <button className="viewPlaylistBtn">View All Playlists</button>
            </div>
        </div>
    )
}