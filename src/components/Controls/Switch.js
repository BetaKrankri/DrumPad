import './Switch.css';

function Switch({ name, value, onToggle}) {
    return (
        <fieldset>
            <legend>{name}</legend>
            <label className="switch">
                <input type="checkbox" name={name} checked={value} onChange={onToggle}/>
                <span className="slider round"></span>
            </label>
        </fieldset>
    );
}

export default Switch;