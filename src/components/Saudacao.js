function Saudacao({nome}){

    function gerarSaudacao(algumNome){
        return `Olá, ${algumNome}, tudo bm?`
    }


    return( 
    <>
        {nome && <p>{gerarSaudacao(nome)}</p>}
    </>
    );
}

export default Saudacao;