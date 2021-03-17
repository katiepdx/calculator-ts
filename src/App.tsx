import './App.css';
import Calculator from './Calculator';
import MaterialUIDrawer from './MaterialUIDrawer'

function App() {
  return (
    <div className="App">
      <MaterialUIDrawer />
      <header className="App-header">
        <h1>Calculator TS</h1>
        <Calculator symbol="+" buttonName="add" />
        <Calculator symbol="-" buttonName="subtract" />
        <Calculator symbol="*" buttonName="multiply" />
        <Calculator symbol="/" buttonName="divide" />
      </header>
    </div>
  );
}

export default App;
