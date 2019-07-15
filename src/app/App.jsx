import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import Router from '../router';

let renderRoutes = null;
let renderHasChildren = null;

function App() {
  const renderNoChildren = children => (
    <Route
      key={children.path}
      path={children.path}
      exact
      component={children.component}
    />
  );

  renderHasChildren = children => renderRoutes(children.children);

  renderRoutes = (children) => {
    if (!children) {
      return null;
    }
    return children.map((val) => {
      if (val.children && val.children.length) {
        return renderHasChildren(val);
      }

      return renderNoChildren(val);
    });
  };

  const Main = () => renderRoutes(Router);

  const renderBrowserRouter = () => (
    <BrowserRouter>
      <Switch>
        <Route
          path="/"
          component={Main}
        />
      </Switch>
    </BrowserRouter>
  );

  return (
    <React.Fragment>
      {renderBrowserRouter()}
    </React.Fragment>
  );
}

export default App;
