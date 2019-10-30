import React from 'react';
import './App.scss';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import HairdresserListComponent from './components/HairdresserListComponent/HairdresserListComponent';
import HairdresserComponent from './components/HairdresserComponent/HairdresserComponent';

class App extends React.Component<{}, {}> {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Switch>
            <Route path="/" exact component={HairdresserListComponent} />
            <Route path="/hairdresser/:id" component={HairdresserComponent}/>
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
