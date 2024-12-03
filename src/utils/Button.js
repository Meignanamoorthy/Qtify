import "./Button.css";

const Button = ({type}) => {  
    if(type === "feedback") {
        return (
            <button type="button" className="button feedback-button">
               Give Feedback
            </button>
        )
    } else if(type === "collapse") {
        return (
            <button type="button" className="button collapse-button">
                Collapse
            </button>
        )

    }
    
}

export default Button;