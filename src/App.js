import logo from './logo.svg';
import './App.css';
import Counter from './components/Counter';
import { CounterProvider } from './context/CounterContext';
import Counters from './components/Counters';
import { Navbar } from 'react-bootstrap';
import NavComponent from './components/NavComponent';

function App() {
  return (
    <CounterProvider>
      <NavComponent />
      <Counters />

    </CounterProvider>
  );
}

export default App;
