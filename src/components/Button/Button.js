
import styles from './Button.module.scss';

const Button = (props) => {

    if(props.refresh === true){
        return(
            <a href=".">
                <button className={styles.button}>
                    <p>
                        {props.buttonLabel}
                    </p> 
                </button>
            </a>
        );
    }
    else{
        return (
            <button className={styles.button}>
                <p>
                    {props.buttonLabel}
                </p> 
            </button>
        );
    }

};

export default Button;