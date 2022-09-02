import { useState } from 'react';
import { memberValue } from './services/data';
import Button from './components/Button';
import Settings from './components/Settings';
import './App.css';

function App() {

  const [memberData, setmemberData] = useState(memberValue);

  return (
    <div className="app">
     <Button {...memberData}/>
     <Settings memberData={memberData} setmemberData={setmemberData}/>
    </div>
  );
}

export default App;
