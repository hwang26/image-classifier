
import styles from './Button.module.scss';

const Button = (props) => {

    if(props.refresh === true){
        return(
            <a href=".">
                <button ref={props.buttonRefCallback} className={styles.button} onClick={props.onClick}>
                    <p>
                        {props.buttonLabel}
                    </p> 
                </button>
            </a>
        );
    }
    else{
        return (
            <button ref={props.buttonRefCallback} className={styles.button} onClick={props.onClick}>
                <p>
                    {props.buttonLabel}
                </p> 
            </button>
        );
    }

};

export default Button;