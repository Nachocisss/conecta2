import BoardScreen from './Screens/BoardScreen.tsx'
import CardScreen from './Screens/CardScreen.tsx'
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className='AppScreen'>
        <BoardScreen/>   
        <CardScreen/>
        </div>
      </header>
    </div>
  );
}

export default App;
