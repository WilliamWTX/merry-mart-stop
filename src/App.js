import React from 'react';
import { BrowserRouter, Switch } from 'react-router-dom';
import './App.css';

function App() {
  function renderRoutes(children) {
    if (!children) {
      return;
    }
    return children.map((val) => {
      if (val.children && val.children.length) {
        return renderHasChildren(val);
      }

      return renderNoChildren(val);
    })
  }

  function renderNoChildren (children) {
    return children.name;
  }

  function renderHasChildren (children) {
    return renderRoutes(children.children)
  }


  return (
    <BrowserRouter>
      <Switch>
        {renderRoutes()}
      </Switch>
    </BrowserRouter>
  );
}

export default App;
