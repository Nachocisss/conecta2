import GameScreen from "./Screens/GameScreen.tsx";
import "./App.css";
import HeaderScreen from "./Screens/HeaderScreen/HeaderScreen.tsx";
import { CoordinatesProvider } from "./Contexts/CoordinatesContext.tsx";

function App() {
  return (
    <CoordinatesProvider>
      <HeaderScreen />
      <GameScreen />
    </CoordinatesProvider>
  );
}

export default App;
