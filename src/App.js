import './App.css';

import DrumMachine from './components/DrumMachine/DrumMachine';
import PadBoard from './components/PadBoard/PadBoard'
import Controls from './components/Controls/Controls';

function App() {



  return (
    <div className="App" style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh'

    }}>
      <DrumMachine>
        <PadBoard />
        <Controls />
      </DrumMachine>
    </div>
  );
}

export default App;
