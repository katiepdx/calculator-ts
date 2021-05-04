import './App.css';
import Calculator from './Calculator';
import MaterialUIDrawer from './MaterialUIDrawer'
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Router>
          <MaterialUIDrawer />
          <h1>Calculator TS</h1>
          <Switch>
            <Route
              exact path="/addition"
              render={() => (
                <Calculator symbol='+' buttonName='addition' />
              )}
            />
            <Route
              exact path="/subtraction"
              render={() => (
                <Calculator symbol='-' buttonName='subtraction' />
              )}
            />
            <Route
              exact path="/multiplication"
              render={() => (
                <Calculator symbol='*' buttonName='multiplication' />
              )}
            />
            <Route
              exact path="/division"
              render={() => (
                <Calculator symbol='/' buttonName='division' />
              )}
            />
          </Switch>
        </Router>
      </header>

    </div>
  );
}

export default App;
