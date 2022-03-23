
import styles from './Judges.module.scss';

const Judges = (props) => {

    if(props.ml5Results === null){
        
        return(
            <ul className={styles.judges}>
                    <li><p><b>Alice: </b>I like it! Looks % like X</p></li>
                    <li><p><b>Bob: </b>I don't know...its really giving me Y vibes. % Y is my guess.</p></li>
                    <li><p><b>Eve: </b>What the...% Z for me.</p></li>
            </ul>       
        );
    }
    else{
        
        return (
            <ul className={styles.judges}>
                <li><p><b>Alice: </b>I like it! Looks {Math.round(props.ml5Results[0].confidence*100)}% like {props.ml5Results[0].label.replaceAll("_", " ")}</p></li>
                <li><p><b>Bob: </b>I don't know...its really giving me {props.ml5Results[1].label.replaceAll("_", " ")} vibes. {Math.round(props.ml5Results[1].confidence*100)}%  {props.ml5Results[1].label.replaceAll("_", " ")} is my guess.</p></li>
                <li><p><b>Eve: </b>What the...{Math.round(props.ml5Results[2].confidence*100)}%  {props.ml5Results[2].label.replaceAll("_", " ")} for me.</p></li>
            </ul>       
        );

    }

};

export default Judges;