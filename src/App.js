import './App.css';

import DrumMachine from './components/DrumMachine/DrumMachine';
import PadBoard from './components/PadBoard/PadBoard'
import Controls from './components/Controls/Controls';

function App() {



  return (
    <div className="App" style={{
      display: 'flex',
      flexFlow: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh'

    }}>
      <DrumMachine>
        <PadBoard />
        <Controls />
      </DrumMachine>
      <span>by <a href='https://github.com/BetaKrankri/DrumPad' style={{ color: 'white', textDecoration: 'none', fontWeight: 'bold' }}>BetaKrankri</a></span>
    </div>
  );
}

export default App;
