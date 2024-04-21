import GameScreen from "./Screens/GameScreen.tsx";
import "./App.css";
import ExitAlert from "./Screens/Header.tsx";

function App() {
  return (
    <>
      <ExitAlert />
      <GameScreen />
    </>
  );
}

export default App;
