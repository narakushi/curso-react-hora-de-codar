import './App.css';
import Eventos from './components/Eventos'
import Form from './components/Forms'


function App() {
  return (
    <div className='App'>
     <h1>Testando eventos</h1>
     <Eventos numero="1"/>
     <Eventos numero="2"/>
     <Form />
    </div>
  );
}

export default App;
