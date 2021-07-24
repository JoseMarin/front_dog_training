import './App.scss';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Fragment } from 'react'

import Home from './containers/Home/Home.jsx';
import Header from './components/Header/Header.jsx';
import Register from './containers/Register/Register';
import Login from './containers/Login/Login.jsx'


function App() {
  return (
    <Fragment>
      <BrowserRouter>
        <Header />

        <Switch>
          <Route path="/" exact component={Home}/>
          <Route path="/register" exact component={Register}/>
          <Route path="/login" exact component={Login}/>
        </Switch>

      </BrowserRouter>
    </Fragment>
  );
}

export default App;
