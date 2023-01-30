import './Volume.css';

function Volume(props) {
    return (
        <fieldset>
            <legend>Volume</legend>
            <input type='range' {...props}/>
        </fieldset>
    );
}

export default Volume;