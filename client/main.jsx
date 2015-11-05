import React from 'react';
import ReactDOM from 'react-dom';
import Router, {Route} from 'react-router';
import App from './components/App.jsx';
import About from './components/AboutView.jsx'

const routes = <Route component={App}>
                 <Route path='/' component={About} />
               </Route>;
               

ReactDOM.render(
  <Router>{routes}</Router>, document.getElementById('app')
);
