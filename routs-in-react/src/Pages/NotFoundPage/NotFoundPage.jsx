import react, { Fragment } from 'react'
import BackgroundPage from '../BacgroundPages/BackgroundPage'
import './NotFoundPage.css'

export default function NotFoundPage(){
    return (
        <Fragment>
            <BackgroundPage></BackgroundPage>
            <div className="NotFoundPage_Content">
                <div>
                <h1>Ooops! Essa página não foi encontrada.</h1>
                <h3>Tente navegar ao início utilizando /Inicio</h3>
                </div>
            </div>
        </Fragment>
    )
}