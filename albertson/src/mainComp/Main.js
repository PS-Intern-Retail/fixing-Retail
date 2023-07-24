import React from 'react'
import './Main.css'
import Uploader from '../uploadWidget/Uploader.js'
import Playlist from '../playlistWidget/Playlist.js'
import AiComp from '../aiWidget/AiComp.js'
import { useNavigate } from 'react-router-dom'
import Icon from './Icon.js';
import { Link, useLocation } from 'react-router-dom';



export default function Main(){
    const { state } = useLocation()

    let storeName=""
    let user = "Rashmi" 
    let storeList = []
    if (state){
        storeName= state.storeName
        user = state.user
        storeList = state.storeList
    }

    console.log(storeList)
    return(
        <div>
            <Icon storeName={storeName} user={user}/>
            <div className='AI_GenBox'>
                <AiComp storeList={storeList}></AiComp>
            </div>
            <div className="Upload">
                <Uploader></Uploader> 
            </div>

            {/* <div className='viewPlaylist'>  
                <button className="viewPlaylistBtn">View All Playlists</button>
            </div>

            <div className='viewPlaylist'>
                <button className="viewPlaylistBtn"
                onClick={navigateToPlaylist}
                >View All Playlists
                </button>
            </div> */}

        <div className='viewPlaylist'>
            <Playlist></Playlist>
        </div>
    </div>
    )
}