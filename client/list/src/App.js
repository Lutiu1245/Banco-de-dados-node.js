import "./App.css";

function App (){

  return (
    <div className="app-container">
      <div className="register-container">
        <h1>Lista de Produtos</h1>
        <input type={text} name="name" placeholder="Nome" className="register-input"></input>
        <input type={text} name="name" placeholder="Preço" className="register-input"></input>
        <input type={text} name="name" placeholder="Tipo" className="register-input"></input>
      </div>
    </div>
  )

}