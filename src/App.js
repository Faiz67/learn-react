import './App.css';
import { Header } from './My Components/Header'
import { Footer } from './My Components/Footer';
import { Todos } from './My Components/Todos';

function App() {
  return (
    <>
    <Header title="Welcome to My App"/>
    <Todos/>
    <Footer/>
    
    </>
  );
}

export default App;
