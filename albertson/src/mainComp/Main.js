import React from 'react'
import './Main.css'
import Uploader from '../uploadWidget/Uploader.js'
import Playlist from '../playlistWidget/Playlist.js'
import { useNavigate } from 'react-router-dom'
import Icon from './Icon.js';
import { Link, useLocation } from 'react-router-dom';



export default function Main(){
    const { state } = useLocation()
    // const storeName = state.storeName
    //console.log(state.user.stores)
    // console.log(state.user)

    // const navigateToPlaylist = () => {
    //     const navigateToPlaylist = () => {
    //         history.push("/playlist");
    //       };


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