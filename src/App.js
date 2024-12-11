import React from 'react';
import './App.css';
import SB from './Components/Sidebar Section/SB';
import Top from './Components/Body Section/TopSec/Top'
import List from './Components/Body Section/ListSec/List'
import Activity from './Components/Body Section/ActivitySec/Activity'
function App() {
  return (
    <div className='container'>
       <div className='content'>
            <SB/>
        <div className='upper'>
            <Top/>
            <div className='bottom'>
            <List/>
            <Activity/>
            </div>
        </div>
        </div>
    </div>
  );
}

export default App;
