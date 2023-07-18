import React from 'react'
import './Main.css'
import Uploader from './Uploader.js'
import { useLocation } from 'react-router-dom'
import Icon from './Icon.js';


export default function Main(){
    const { state } = useLocation()
    //console.log(state.user.stores)
    // console.log(state.user)
    return(
        <div>
            <Icon />
            
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