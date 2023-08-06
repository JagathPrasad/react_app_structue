import logo from './logo.svg';
import './App.css';
import React, { useEffect, useState } from 'react';
const Root = React.lazy(() => import('./Root'));

const App = () => {
  //alert('App')

  console.log('a', Root);
  return (
    <div className="App">
      <Root />
    </div>
  );
}

export default App;
