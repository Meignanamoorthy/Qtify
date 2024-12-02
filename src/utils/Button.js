import "./Button.css";

const Button = ({type}) => {  
    if(type === "feedback") {
        return (
            <button type="button" className="button feedback-button">
               Give Feedback
            </button>
        )
    }
    
}

export default Button;