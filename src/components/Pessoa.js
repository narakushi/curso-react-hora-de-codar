function Pessoa({dados}){
    return (
        <div>
            <img src={dados.foto} alt={dados.nome}/>
            <h2>Nome: {dados.nome}</h2>
            <p>Idade: {dados.idade}</p>
            <p>Profissão: {dados.profissao}</p>
        </div>
    )
}

export default Pessoa;