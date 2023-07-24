import "./AiComp.css"

export default function AiComp(){
    return(
        <div>
            <p className="firstText">Start with a <b><i>detailed description</i></b></p>
            <p className="secondText">Here are some <b>recommendations:</b></p>
            <textarea className="detailedDescrip" cols="50"></textarea>
            <button className="generateBtn">Generate</button>
            <p className="thirdText">Here are some <b>relevant images</b> pulled from the website:</p>
            <div className="reccomendations"></div>
        </div>
    )
}