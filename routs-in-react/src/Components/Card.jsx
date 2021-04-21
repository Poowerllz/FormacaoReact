import react from 'react'
import Produtos from './warningCard'

export default function Card(Props){

return(
<Produtos>
<section style={{display:'flex'}}>
<h5 >Produto:</h5>
<h5 style={{marginLeft:'5px', opacity:'90%'}}>{Props.Produto}</h5>
</section>
<section style={{display:'flex',marginTop:'10px'}}>
<h5>Valor:</h5>
<h5 style={{marginLeft:'5px', opacity:'90%'}}>{Props.Valor}</h5>
</section>
</Produtos>
)
}
