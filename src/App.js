import './App.scss';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Fragment } from 'react'

import Home from './containers/Home/Home.jsx';
import Header from './components/Header/Header';

function App() {
  return (
    <Fragment>
      <BrowserRouter>
        <Header />

        <Switch>
          <Route path="/" exact component={Home}/>
        </Switch>

      </BrowserRouter>
    </Fragment>
  );
}

export default App;
