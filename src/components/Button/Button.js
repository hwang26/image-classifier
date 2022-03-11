
import styles from './Button.module.scss';

const Button = (props) => {
    
    let linkVal = ".";

    if(props.buttonLink !== undefined){
        linkVal = props.buttonLink
    }

    return (
       <div className={styles.button}>
            <a href={linkVal}>
                <p>
                    {props.buttonLabel}
                </p> 
            </a>
       </div>
    );
};

export default Button;