import infoIcon from "/public/info-icon.svg";
import styles from "./Info.module.scss";

const Info = () => {

    return (
        <div className={styles.info}>
            <img src={infoIcon.src} />
            <p>Sketch It! uses the DoodleNet classifier. The doodles are crowdsourced from visitor contributions as they play Google&#39;s Quick, Draw! Game, and are publicly available to download.</p>
        </div>
    );

};

export default Info;