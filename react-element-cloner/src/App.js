import "./App.css";
import Breakfast from "./components/Breakfast";
import Food from "./components/Food";

function App() {
  return (
    <div className="App">
      <Breakfast>
        <Food />
        <Food />
      </Breakfast>
    </div>
  );
}

export default App;
