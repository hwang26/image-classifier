
import styles from './Judges.module.scss';

const Judges = (props) => {
    return (
        <div className={styles.judges}>
            <p><b>Alice: </b>I like it! Looks % like a X</p>
            <p><b>Bob: </b>I don't know...its really giving me Y vibes. % Y is my guess.</p>
            <p><b>Eve: </b>What the...% Z for me.</p>
        </div>       
    );
};

export default Judges;