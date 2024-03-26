import './App.css';
import SayMyName from './components/SayMyName'
import Pessoa from './components/Pessoa'

function App() {
  const name = "Tainá";
  const pessoa = {
    nome: 'Rodrigo',
    idade: 28,
    profissao: 'Programador',
    foto: 'https:via.placeholder.com/150'
  }
  const url = 'https://via.placeholder.com/150';

  return (
    <div className='App'>
      <SayMyName nome="Matheus" />
      <SayMyName nome="Tai" />
      <SayMyName nome={name} />
      <Pessoa dados={pessoa}/>
    </div>
  );
}

export default App;
