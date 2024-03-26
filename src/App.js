import './App.css';
import HelloWorld from './components/HelloWorld'

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
      <img src={url} alt="minha imagem" />
      <HelloWorld />
    </div>
  );
}

export default App;
