import React from 'react'
import './Uploader.css'
import { useState } from 'react'
import {MdCloudUpload, MdDelete} from 'react-icons/md'
import { AiFillFileImage } from 'react-icons/ai'

export default function Uploader(){
    const [image, setImage] = useState(null)
    return (
        <main>
            <form action=""
            onClick={() => document.querySelector(".picture-input").click()}>
                <input type="file" accept="image/*" className="picture-input" hidden/>

                {image ?
                    <img src={image} width={60} height={60}/>
                :
                <>
                    <MdCloudUpload color='#FFFFFF' border="#1475CF" size={60} />
                    <p className='uploadText'>Select or Drag an Image to Upload</p>
                </>
                }
            </form>
        </main>
    )
}