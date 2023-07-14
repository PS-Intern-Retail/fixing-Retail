import React from 'react'
import './Main.css'
import Uploader from '../uploadWidget/Uploader.js'
import { useLocation } from 'react-router-dom'

export default function Main(){
    //const { state } = useLocation()
    // console.log(state)
    // console.log(state.user)
    return(
        <div>
            <img className="icon" src="https://th.bing.com/th/id/R.ea0d38e91f172b985c948f989e98c39f?rik=NR0pbQNo1c8XMw&riu=http%3a%2f%2fcdn.onlinewebfonts.com%2fsvg%2fimg_357118.png&ehk=cUAdriibLw7xEDkfIXfwIR3GAAijwWJWZIpc7ctVbmo%3d&risl=&pid=ImgRaw&r=0"/>
            <h2>Welcome!</h2>
            
            <div className='AI_GenBox'>
                <p className="firstText">Start with a <b><i>detailed description</i></b></p>
                <p className="secondText">Here are some <b>recommendations:</b></p>
                <textarea className="detailedDescrip" cols="50"></textarea>
                <button className="generateBtn">Generate</button>
                <p className="thirdText">Here are some <b>relevant ads</b> pulled from the website:</p>
                <div className="reccomendations"></div>

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