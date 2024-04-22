import GameScreen from "./Screens/GameScreen.tsx";
import "./App.css";
import Header from "./Screens/Header.tsx";
import { CoordinatesProvider } from "./Contexts/CoordinatesContext.tsx";

function App() {
  return (
    <CoordinatesProvider>
      <Header />
      <GameScreen />
    </CoordinatesProvider>
  );
}

export default App;
