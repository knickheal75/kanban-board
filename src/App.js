import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import MainHeader from './components/MainHeader/MainHeader';
import MainNav from './components/MainNav/MainNav';
import Board from './layouts/Board/Board';

function App() {
  return (
    <div className="App">
      <MainHeader />
      <MainNav />
      <Board />
    </div>
  );
}

export default App;
