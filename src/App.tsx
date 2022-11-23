import React from 'react';
import Main from './components/Main';
import Navbar from './components/Navbar';

const App: React.FC = () => {
  return (
    <>
      <Navbar />
      <div className="container">
        <Main />
      </div>
    </>
  )
}

export default App;
