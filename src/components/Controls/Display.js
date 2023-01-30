import './Display.css';

function Display({ input, id = '' }) {
    return (
        <div className='display' id={id}>
            <h6>{input}</h6>
        </div>
    );
}

export default Display;