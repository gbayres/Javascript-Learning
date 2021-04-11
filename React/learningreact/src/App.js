import React, { Component } from 'react';
import './App.css';
import Comentario from './components/comentario';

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
    ],
    novoComentario: {
      name: '',
      email: '',
      message: ''
    }
  }
  

  digitacao = e => {
    const {name, value} = e.target;
    this.setState({novoComentario: {...this.state.novoComentario, [name]: value}})
  }

  adicionarComentario = (event) =>{
    event.preventDefault();
    console.log("Adicionando comentário");

    const NOVO_COMENTARIO = {...this.state.novoComentario, data: new Date()};

    this.setState({
      comentarios: [...this.state.comentarios, NOVO_COMENTARIO],
      novoComentario: {name: '', email: '', message: ''}
    })
  }

  removerComentario = comentario =>{
    let lista = this.state.comentarios;
    lista = lista.filter(c => c !== comentario);
    this.setState({ novoComentario: { comentarios: lista}});
  }


  render() {
    return(
      <div className="App">
        <h1>Meu projeto</h1>
        {this.state.comentarios.map(comentario => (
        
          <Comentario 
          name={comentario.name}
          email={comentario.email}
          data={comentario.data}
          onRemove={this.removerComentario.bind(this, comentario)}>
            {comentario.message}
          </Comentario>  
        ))}

        <form className="formulario" method="POST" onSubmit={this.adicionarComentario}>
            <fieldset>
                <legend>Inserir comentário</legend>
                <input 
                    required
                    type="text" 
                    name="name" 
                    placeholder="Digite seu nome"
                    value={this.state.novoComentario.name}
                    onChange={this.digitacao}/>

                <input 
                    required
                    type="email" 
                    name="email" 
                    placeholder="Digite seu email"
                    value={this.state.novoComentario.email}
                    onChange={this.digitacao}/>
                
                <textarea 
                    required
                    name="message" 
                    rows="4"
                    value={this.state.novoComentario.message}
                    onChange={this.digitacao}/>

                <button type="submit">Adicionar</button>
            </fieldset>
        </form>

        {/* <FORMULARIO 
          function={this.adicionarComentario}
          name={this.state.novoComentario.name}
          email={this.state.novoComentario.email}
          message={this.state.novoComentario.message}
          change = {this.digitacao}
          clr={this.state.novoComentario.name}
        /> */}
        
      </div>
    );
  }
}


export default App;
