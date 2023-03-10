import { createContext, useState } from 'react';
import './DrumMachine.css';

export const DrumMachineContext = createContext();

function DrumMachine({ children }) {
    const bankSets = [{
        bankName: "Heater Kit",
        padBank: [{ id: "Heater-1", url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3" },
        { id: "Heater-2", url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3" },
        { id: "Heater-3", url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3" },
        { id: "Heater-4", url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3" },
        { id: "Clap", url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3" },
        { id: "Open-HH", url: "https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3" },
        { id: "Kick-n'-Hat", url: "https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3" },
        { id: "Kick", url: "https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3" },
        { id: "Closed-HH", url: "https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3" }]
    }, {
        bankName: "Smooth Piano Kit",
        padBank: [{ id: "Chord-1", url: "https://s3.amazonaws.com/freecodecamp/drums/Chord_1.mp3" },
        { id: "Chord-2", url: "https://s3.amazonaws.com/freecodecamp/drums/Chord_2.mp3" },
        { id: "Chord-3", url: "https://s3.amazonaws.com/freecodecamp/drums/Chord_3.mp3" },
        { id: "Shaker", url: "https://s3.amazonaws.com/freecodecamp/drums/Give_us_a_light.mp3" },
        { id: "Open-HH", url: "https://s3.amazonaws.com/freecodecamp/drums/Dry_Ohh.mp3" },
        { id: "Closed-HH", url: "https://s3.amazonaws.com/freecodecamp/drums/Bld_H1.mp3" },
        { id: "Punchy-Kick", url: "https://s3.amazonaws.com/freecodecamp/drums/punchy_kick_1.mp3" },
        { id: "Side-Stick", url: "https://s3.amazonaws.com/freecodecamp/drums/side_stick_1.mp3" },
        { id: "Snare", url: "https://s3.amazonaws.com/freecodecamp/drums/Brk_Snr.mp3" }]
    }];


    const [power, setPower] = useState(true);
    const [volume, setVolume] = useState(0.5);
    const [currentBank, setCurrentBank] = useState(0);
    const [display, setDisplay] = useState('8888');

    return (
        <DrumMachineContext.Provider value={{
            power, setPower,
            volume, setVolume, 
            currentBank, setCurrentBank, 
            display, setDisplay,
            bankSets
        }}>
            <div id='drum-machine'>
                {children}
            </div>
        </DrumMachineContext.Provider>
    );
}

export default DrumMachine;