import react, { Fragment, useState } from 'react'
import Card from '../../Components/Card'
import Produtos from '../../Components/warningCard'
import BackgroundPage from '../BacgroundPages/BackgroundPage'
import './InitialPage.css'

export default function InitialPage() {
    const [Produtos, setProdutos] = useState([{ Produto: "ExProduto", Valor: "ExValor" }])

    return (
        <Fragment>
            <BackgroundPage></BackgroundPage>
            <div className="InitialPage_Content">
                <div className="Menu">
                </div>
                <div className="MenuItens">
                    <h1 className="title">HappyDoggo</h1>
                </div>

                <h1>Nossos produtos</h1>
                <div style={{ display: 'flex' }}>
                    {
                        Produtos.map((value, index) => {
                            return (
                                <Card Produto={Produtos[index].Produto} Valor={Produtos[index].Valor}></Card>
                            )
                        })
                    }

                </div>
            </div>
        </Fragment>
    )
}