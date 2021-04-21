import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import { Container, Switch, FormControlLabel, Typography } from '@material-ui/core'
import 'fontsource-quicksand';


function CardForm(props) {
        const [nome,setNome] = useState("")
        const [sobrenome,setSobrenome] = useState("")
        const [cpf,setCPF] = useState("")
        const [promocoes,setPromocoes] = useState("")
        const [novidades,setNovidades] = useState("")
        const [erros,setErros] = useState("")

    return (
        <form onSubmit={(event) => {
            event.preventDefault();
            props.submitCard({nome,sobrenome,cpf,promocoes,novidades})
        }}>
            <Container component="article" maxWidth="sm">
                <Typography variant="h5" align="center">Cadastrar um usuário</Typography>
                <TextField id="NameField" label="Nome" variant="outlined" margin="normal" onChange={(event) => {setNome(event.target.value)}} fullWidth />

                <TextField id="outlined-basic" label="Sobrenome" variant="outlined" margin="normal" onChange={(event) => {setSobrenome(event.target.value)}} fullWidth />

                <TextField id="CPFField" label="CPF" variant="outlined" margin="normal" fullWidth onChange={(event) =>{
                    if(event.target.value.length > 11){
                        document.getElementById("CPFField").value = event.target.value.substr(0,11)
                        setErros({valido:true})
                    } else{
                        setErros({valido:false})
                    }
                    setCPF(event.target.value)
                }} error={erros.valido} />
                <FormControlLabel control={
                    <Switch name="Promoções" defaultChecked onChange={(event) => {setPromocoes(event.target.value)}} />
                } label="Promoções" />

                <FormControlLabel control={
                    <Switch name="Novidades" onChange={(event) => {setNovidades(event.target.value)}} defaultChecked />
                } label="Novidades" />

                <Button type="submit" variant="contained" color="primary">
                    Hello World
            </Button>
            </Container>
        </form>
    )
}

export default CardForm;