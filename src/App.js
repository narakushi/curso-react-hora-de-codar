import './App.css';
import HelloWorld from './components/HelloWorld'
import Titulo from './components/Titulo'

function App() {
  const name = "Tainá";
  const newName = name.toUpperCase();

  const url = 'https://via.placeholder.com/150';

  function sum(a, b) {
    return a + b;
  }

  return (
    <div className='App'>
      <h2>Alteração no jsx</h2>
      <p>Olá, {newName}</p>
      <p>Soma: {sum(1, 2)}</p>
      <img src={url} alt="minha imagem" /> {/**trabalhando com jsx */} 
      <HelloWorld /> {/**trabalhando com componentes */}
      <Titulo/>
    </div>
  );
}

export default App;
