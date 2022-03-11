
import styles from './Sidebar.module.scss';
import Button from '../Button';
import Judges from '../Judges';

const Sidebar = (props) => {
    return (
       <div className={styles.sideBarContainer}>
            <div className={styles.sideBarButtons}>
                <Button buttonLabel="Refresh" buttonLink={undefined}/> 
                <Button buttonLabel="Save" buttonLink={undefined}/>
            </div>
            <p className={styles.judgesFlavorText}>What do the judges say...</p>
            <Judges />
       </div>
    );
}

export default Sidebar;