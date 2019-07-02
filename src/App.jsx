import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import Router from './router';

function App() {
  function renderNoChildren(children) {
    return (
      <Route
        key={children.path}
        path={children.path}
        component={children.component}
      />
    );
  }

  function renderHasChildren(children) {
    // eslint-disable-next-line no-use-before-define
    return renderRoutes(children.children);
  }

  function renderRoutes(children) {
    if (!children) {
      return null;
    }
    return children.map((val) => {
      if (val.children && val.children.length) {
        return renderHasChildren(val);
      }

      return renderNoChildren(val);
    });
  }


  return (
    <BrowserRouter>
      <Switch>
        {renderRoutes(Router)}
      </Switch>
    </BrowserRouter>
  );
}

export default App;
