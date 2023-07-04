import React from 'react';
import AppManager from './components/AppManager';
import AppContext from './components/context/AppContext';
import EnumViewType from './components/content/EnumViewType';

import 'bootstrap/dist/css/bootstrap.min.css';

import './App.css';
import './styles/Commons.css'

function App() {

  const [viewType, setViewType] = React.useState(EnumViewType.WELCOME);
   
  const appContext = {
      viewType: viewType,
      setViewType: setViewType
  }


  return (
      <div className="App">
        <AppContext.Provider value={appContext}>
          <AppManager />
        </AppContext.Provider>
      </div>
  );
}

export default App;