import './PadBoard.css'

import { useContext, useEffect } from 'react';
import { DrumMachineContext } from '../DrumMachine/DrumMachine';


function Pad({ audioId, audioURL, keyCode, keyTrigger }) {
    const { setDisplay, power, volume } = useContext(DrumMachineContext);

    function playPad() {
        if (!power) return;
        let audio = document.querySelector(`.drum-pad>audio#${keyTrigger}`);
        audio.volume = volume;
        audio.pause();
        audio.currentTime = 0;
        audio.play();
        setDisplay(audioId)
    }

    return (
        <button
            className='drum-pad'
            id={audioId}
            onClick={() => {
                playPad();
            }} 
            >
            <audio src={audioURL} className='clip' id={keyTrigger}>
            </audio>
            {keyTrigger}
        </button>
    );
}


function PadBoard() {

    const Pads = [
        { keyCode: 81, keyTrigger: 'Q' },
        { keyCode: 87, keyTrigger: 'W' },
        { keyCode: 69, keyTrigger: 'E' },
        { keyCode: 65, keyTrigger: 'A' },
        { keyCode: 83, keyTrigger: 'S' },
        { keyCode: 68, keyTrigger: 'D' },
        { keyCode: 90, keyTrigger: 'Z' },
        { keyCode: 88, keyTrigger: 'X' },
        { keyCode: 67, keyTrigger: 'C' }
    ];

    const { currentBank, bankSets, power } = useContext(DrumMachineContext);

    useEffect(() => {
        document.addEventListener('keydown', (e) => {
            if(!power) return;
            let padC = Pads.filter(p => p.keyCode === e.keyCode);
            if (padC.length === 0) return;
            let pad = document.querySelector(`button:has(#${padC[0].keyTrigger})`);
            pad.click();
        })
        return () => { }
    }, [])

    return (
        <div className='PadBoard'>
            {Pads.map((p, i) => {
                let audioId = bankSets[currentBank].padBank[i].id;
                let audioURL = bankSets[currentBank].padBank[i].url;
                return (<Pad key={`${audioId}`}
                    {...{ audioId, audioURL }} {...p}
                
                />)
            })}
        </div>
    );
}

export default PadBoard;