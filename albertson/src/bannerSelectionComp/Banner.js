import './Banner.css'
import Database from '../data/database';
import { useNavigate } from 'react-router-dom'
import { useLocation } from 'react-router-dom'
import { useState } from 'react'

export default function Banner(){
    const navigate = useNavigate()
    const { state } = useLocation()
    // const curUser = state.user

    const [choice, setChoice]= useState(
        new Array(3).fill(false)
    )
    const [index, setIndex] = useState(0)
    const storeList = ["Acme", "Safeway", "Pavilions"]
    
    
    function handleBack(){
        navigate('/')
    }
    function handleNext(){
        navigate('/sl'
        , {state: {storeName: storeList[index]
        }})
    }
    function choiceClick(index){
        let newChoice = new Array(3).fill(false)
        newChoice[index] = true

        setIndex(index)
        setChoice(newChoice)
    }
    // function clickBtn(){
    //     console.log(index)
    //     console.log(choice)
    //     console.log(storeList[index])
    // }

    return(
        <div className="split-container">
        <div className="left-side">
        </div>
        <div className="right-side">
            {(!state) ? <h1 className="welcome">Welcome!</h1> : <h1 className="welcome">Welcome {state.user.firstName}!</h1>}
            <h1 className="header">Banner Selection</h1>
            <p className="subHeader">Select ONE banner from the list below.</p>
            <ul className="storeList">
                {storeList.map((store, index) =>
                    <li className="storeNames">
                        <label class="container">
                            <input type="radio" checked={choice[index]} name="radio"  onChange={() => choiceClick(index)}/>
                            <span class="checkmark"></span>
                            {store}
                        </label>
                    </li>
                )}
            </ul>
            {/* <button onClick={clickBtn}>Test</button> */}
            <div className="button-container">
                <button className="back-button" onClick={handleBack}>Back</button>
                <button className="next-button" onClick={handleNext}>Next</button>
            </div>
        </div>
      </div>
    )
}