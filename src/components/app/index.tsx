import React from 'react';
import { Switch, Route } from 'react-router-dom';

import './App.scss';
import { routesTable } from 'routes';

import Header from '../Header';
import Footer from '../Footer';

const App = () => {
  return (
    <div className="App">
      <Header />
      <Switch>
        {routesTable.map((el, i) => {
          return (
            <Route
              key={i}
              exact={!!el.exact}
              path={`${el.route}`.replace(/\/\//g, '/')}
              component={el.component}
            />
          );
        })}
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
