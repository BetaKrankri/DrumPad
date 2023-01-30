import './Controls.css';

import { useContext } from 'react';
import { DrumMachineContext } from '../DrumMachine/DrumMachine';

import Switch from './Switch';
import Display from './Display';
import Volume from './Volume';


function Controls({ children }) {
    let { power, setPower,
        display, setDisplay,
        currentBank, setCurrentBank,
        volume, setVolume,
        bankSets
    } = useContext(DrumMachineContext);



    return (
        <div className='Controls'>
            <Switch
                name='Power'
                value={power}
                onToggle={() => {
                    setPower(!power);
                    let d = '';
                    if (!power) d = 'ON';
                    setDisplay(d);
                }}
            />
            <Display
                id='display'
                input={display}
            />
            <Volume
                min={0} max={1} step={0.01}
                onChange={({ target }) => {
                    if (!power) return;
                    setVolume(target.value);
                    setDisplay(`Volume : ${(volume * 100).toFixed(0)}`)
                }}
                value={volume}
            />
            <Switch
                name='Bank'
                value={currentBank === 0 ? false : true}
                onToggle={() => {
                    if (!power) return;
                    setCurrentBank(prev => (!prev ? 1 : 0));
                    setDisplay(bankSets[currentBank].bankName);
                }}
            />
        </div>
    );
}

export default Controls;