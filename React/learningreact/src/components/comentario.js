import React from 'react';
import './comentario.css'


const Comentario = props => {
    return (
        <div className="Comentario">
            <h2>{props.name}</h2>
            <p>{props.email}</p>
            <p>{props.children}</p>
            <p>{props.data.toString()}</p>
            <button onClick={props.onRemove}> X </button>
        </div>
)}

const BUTTON = props => {
    return (
        <button onClick={props.onClick} className="blueBtn redBtn">{props.children}</button>
    )
}

const LOADING = props => {
    return (
        <div className="divToda">
            <div className="ball b1"></div>
            <div className="ball b2"></div>
            <div className="ball b3"></div>
            <div className="ball b4"></div>
            <div className="ball b5"></div>
            <div className="ball b6"></div>
            <div className="ball b7"></div>
            <div className="ball b8"></div>
        </div>
    )
}

// const FORMULARIO = props => {
//     return (
//         <form className="formulario" method="POST" onSubmit={props.function}>
//             <fieldset>
//                 <legend>Inserir comentário</legend>
//                 <input 
//                     style={{color: props.clr}}
//                     required
//                     type="text" 
//                     name="name" 
//                     placeholder="Digite seu nome"
//                     value={props.name}
//                     onChange={props.change}/>

                
//                 <input 
//                     required
//                     type="email" 
//                     name="email" 
//                     placeholder="Digite seu email"
//                     value={props.email}
//                     onChange={props.change}/>
                
//                 <textarea 
//                     required
//                     name="message" 
//                     rows="4"
//                     value={props.message}
//                     onChange={props.change}/>

//                 <button type="submit">Adicionar</button>
//             </fieldset>
//         </form>
//     )
// }

export default Comentario;
export {BUTTON, LOADING};