import react from 'react'
import './BackgroundPage.css'
import Image from '../Assets/Vector.svg'
import petImage from '../Assets/pet.svg'
import arrowImage from '../Assets/right-arrow 1.svg'

export default function BackgroundPage() {
    return(
        <div className="Background_Body">
            <img src={Image} alt="" className="Bobs">
            </img>
            <div className="Circle"></div>
            <div className="leftPage"></div>
        </div>
    )
}