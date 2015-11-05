require('./styles.css')
import React from 'react';
import ReactDOM from 'react-dom';
import Router, {Route} from 'react-router';
import App from './components/App';
import About from './components/AboutView'
import Tracker from './components/Tracker'


const routes = <Route component={App}>
                 <Route path='/' component={Tracker} />
                 <Route path='/about' component={About} />
               </Route>;


ReactDOM.render(
  <Router>{routes}</Router>, document.getElementById('app')
);
