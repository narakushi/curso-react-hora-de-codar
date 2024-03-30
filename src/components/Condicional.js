import {useState} from 'react';

function Condicional (){

    const [email, setEmail] = useState();
    const [userEmail, setUserEmail] = useState();


    function enviarEmail(e){
        e.preventDefault();
        console.log("Testando");
        setUserEmail(email);
    }

    function limparEmail (){
        setUserEmail('');
    }

    return (
        <div>
            <h2>Cadastre seu e-mail: </h2>
            <form>
                <input type="email" placeholder="Digite o seu e-mail..." onChange={(e) => setEmail(e.target.value)}/>
                <button type="submit" onClick={enviarEmail}>Enviar-email</button>
            </form>
            {userEmail && (
                <div>
                    <p>O email do usuário é {userEmail}</p>
                    <button onClick={limparEmail}>Limpar e-mail</button>
                </div>
            )}
        </div>
       
    )
}

export default Condicional;