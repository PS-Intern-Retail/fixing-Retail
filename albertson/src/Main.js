import React from 'react'
import './Main.css'

export default function Main(){
    return(
        <div>
            <div className='AI_GenBox'>
                <div className='generateBox'>
                </div>
                <button className='generateBtn'>Generate</button>
            </div>
            <div className="Upload">
                <button className='viewUploadsBtn'>View All Uploads</button>
            </div>
            <div className='viewPlaylist'>  
                <button className="viewPlaylistBtn">View All Playlists</button>
            </div>
        </div>
    )
}