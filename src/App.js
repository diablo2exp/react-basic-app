import React from 'react';
import './css/App.css';
import Header from './templates/Header';

{/*}
   for error {error:0308010C:digital envelope routines::unsupported}
   run commad {export NODE_OPTIONS=--openssl-legacy-provider} to resolve the issue
{*/}


const App = () => {
  return (
    <div className="app-container">
      <Header />
      <div className="content">
      </div>
    </div>
  );
};
export default App;
