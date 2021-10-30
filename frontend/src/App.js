import React, {Component} from 'react';
import './App.css';
import RegisterStore from './stores/auth/RegisterStore';
import AuthStore from './stores/auth/AuthStore';
import DucksFactoryStore from './stores/ducks/DucksFactoryStore';
import {Provider} from 'mobx-react';
import SignIn from './components/auth/SignIn';
import SignUp from './components/auth/SignUp';
import DucksFactory from './components/ducks/DucksFactory';
import {Router, Route} from 'react-router-dom';
import {RouterStore, syncHistoryWithStore} from 'mobx-react-router';
import ReactNotification from 'react-notifications-component';
import 'react-notifications-component/dist/theme.css';
import Navbar from "./components/navbar/Navbar";

const createHistory = require('history').createBrowserHistory;
const browserHistory = createHistory();
const RoutingStore = new RouterStore();
const history = syncHistoryWithStore(browserHistory, RoutingStore);

class App extends Component {
  constructor(props) {
    super(props);
    this.AuthStore;
    this.RegisterStore;
    this.DucksFactoryStore;

    if (!this.AuthStore) {
      this.AuthStore = new AuthStore({RoutingStore});
    }
    if (!this.RegisterStore) {
      this.RegisterStore = new RegisterStore();
    }
    if (!this.DucksFactoryStore) {
      this.DucksFactoryStore = new DucksFactoryStore({AuthStore: this.AuthStore});
    }

  }

  render() {
    return (
      <React.Fragment>
        <Navbar />
        <Router history={history}>
          <Route path='/register'>
            <Provider RegisterStore={this.RegisterStore}>
              <SignUp />
            </Provider>
          </Route>
          <Route exact={true} path='/'>
            <Provider AuthStore={this.AuthStore}>
              <SignIn />
            </Provider>
          </Route>
          <Route path='/ducksFactory'>
            <Provider DucksFactoryStore={this.DucksFactoryStore}>
              <DucksFactory />
            </Provider>
          </Route>
          <Route path='/asd'>
            {/*<Provider RegisterStore={this.RegisterStore}>*/}
            {'asdasdas'}
            {/*</Provider>*/}
          </Route>
        </Router>
        <ReactNotification />
      </React.Fragment>
    );
  }
}

export default App;
