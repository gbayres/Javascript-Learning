import React, { Component } from 'react';
import './App.css';
import Comentario, {BUTTON, LOADING, FORMULARIO} from './components/comentario';

class App extends Component{
  state = {
    comentarios: [
      {
        name: "João",
        email: "joao@gmail.com",
        data: new Date(2020, 3, 19),
        message: "Olá, tudo bem?"
      },
      {
        name: "Pedro",
        email: "pedrim@gmail.com",
        data: new Date(2020, 3, 22),
        message: "Tudo bem sim, meu caro"
      }
    ]
  }
  
  adicionarComentario = () =>{
    console.log("Adicionando comentário");

    const NOVO_COMENTARIO = {
      name: "Maria",
      email: "maria@gmail.com",
      data: new Date(),
      message: "Olá pessoal!!!!"
    }

    this.setState({
      comentarios: [...this.state.comentarios, NOVO_COMENTARIO]
    })
  }

  removerComentario = () =>{
    this.setState({
      comentarios: [...this.state.comentarios].slice(0,-1),
    })
  }

  render() {
    return(
      <div className="App">
        <h1>Meu projeto</h1>
        {this.state.comentarios.map(comentario => {
          return(
          <Comentario 
          name={comentario.name}
          email={comentario.email}
          data={comentario.data}>
            {comentario.message}
          </Comentario>
          )
        })}

        <BUTTON onClick={this.adicionarComentario}>Adicionar um comentário</BUTTON>
        <BUTTON onClick={this.removerComentario}>Remover um comentário</BUTTON>
        <FORMULARIO></FORMULARIO>
        
      </div>
    );
  }
}


export default App;
