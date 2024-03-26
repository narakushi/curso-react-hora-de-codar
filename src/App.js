import './App.css';
import SayMyName from './components/SayMyName'
import Pessoa from './components/Pessoa'
import Frase from './components/Frase'


function App() {
  const name = "Tainá";
  return (
    <div className='App'>
      <Frase />
      <Frase />
      <h1>Testando css</h1>
      <SayMyName nome="Matheus" />
      <SayMyName nome="Tai" />
      <SayMyName nome={name} />
      <Pessoa  nome = 'Rodrigo' idade='28' profissao = 'Programador' foto= 'https:via.placeholder.com/150'/>
    </div>
  );
}

export default App;
