import "./Button.css";

const Button = ({type, handleClick}) => {  
    if(type === "feedback") {
        return (
            <button type="button" className="button feedback-button">
               Give Feedback
            </button>
        )
    } else if(type === "collapse") {
        return (
            <button type="button" className="button collapse-button active" onClick={handleClick}>
                Collapse
            </button>
        )
    } else if(type === "showAll") {
        return (
            <button type="button" className="button collapse-button active" onClick={handleClick}>
                Show All
            </button>
        )
    }
    
}

export default Button;