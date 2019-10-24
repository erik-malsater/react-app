import React from 'react';
import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import HairdresserListComponent from './components/HairdresserListComponent/HairdresserListComponent';

class App extends React.Component<{}, {}> {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Switch>
            <Route path="/" exact component={HairdresserListComponent} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
