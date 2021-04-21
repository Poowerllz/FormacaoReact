import react, { Fragment } from 'react'
import './HomePage.css'
import BackgroundPage from '../BacgroundPages/BackgroundPage'
import Image from '../Assets/Vector.svg'
import petImage from '../Assets/pet.svg'
import arrowImage from '../Assets/right-arrow 1.svg'
import { Link } from 'react-router-dom'

export default function Homepage() {
    return (
        <Fragment>
            <BackgroundPage></BackgroundPage>
            <div className="HomePage_Content">

                <h1 className="title">HappyDoggo</h1>
                <div className="SubTitle">
                    <h1>Seu cachorro está entediado? </h1>
                    <h3>Você sabe o quão importante é um brinquedo para <br /> os nossos amiguinhos de 4 patas?</h3>
                </div>
                <div className="dicas">
                    <h2>Como animar seu pet: </h2>
                    <div className="divItens">
                        <img src={petImage} alt="" className="petImage" />
                        <div className="divItensContent">
                            <section>
                                <ul className="circles"><h3>1</h3></ul>
                                <h4>Acesse o nosso site.</h4>
                            </section>
                            <section>
                                <ul className="circles"><h3>2</h3></ul>
                                <h4>Encontre o brinquedo perfeito.</h4>
                            </section>
                            <section>
                                <ul className="circles"><h3>3</h3></ul>
                                <h4>Confirme a compra!</h4>
                            </section>
                        </div>
                    </div>
                </div>

                <Link to="/Inicio">
                <footer className="footer" id="footer">
                    <h1>Começar</h1>
                    <img src={arrowImage} alt=""/>
                </footer>
                </Link>
            </div>
        </Fragment>
        
    )
}