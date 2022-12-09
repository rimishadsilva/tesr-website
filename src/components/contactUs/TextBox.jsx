import './contactUs.css';

const TextBox = (props) => {

    return (
        <>
        <input 
        type={props.type}
        className="contact-us-textbox" 
        placeholder={props.placeholder}
        value={props.value}
        onChange={(e)=>{props.valueSetter(e.target.value)}}
        required />
        </>
    )
}

export default TextBox;
