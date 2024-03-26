import './App.css';
import Titulo from './components/Titulo'
import SayMyName from './components/SayMyName'
import Pessoa from './components/Pessoa'

function App() {
  const name = "Tainá";

  const url = 'https://via.placeholder.com/150';

  return (
    <div className='App'>
      <SayMyName nome="Matheus" />
      <SayMyName nome="Tai" />
      <SayMyName nome={name} />
      <Pessoa nome="Rodrigo" idade="28" profissao="Programador" foto="https:via.placeholder.com/150"/>
    </div>
  );
}

export default App;
