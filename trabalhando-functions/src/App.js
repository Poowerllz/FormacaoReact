import React, {Component, Fragment} from 'react';
import './App.css';
import CardForm from './Components/Cad_Form/CardForm';

class App extends Component{
  render(){
    return (
      <Fragment>
        <CardForm submitCard={submitCard}/>
      </Fragment>
    );
  }
}

function submitCard(dados) {
    console.log(dados)
}

export default App;
