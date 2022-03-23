
import {useState} from 'react';
import styles from './Sidebar.module.scss';
import Button from '../Button';
import Judges from '../Judges';

import dynamic from 'next/dynamic';
// Import Pane without SSR because the "Window" is defined by the client browser
const Pane = dynamic(
  () => import("../Pane"),
  { ssr: false }
);

const Sidebar = () => {

    let [ml5Results, setMl5] = useState(null);

    // Because the ml5 results are constantly being generated, the Sidebar component is constantly rerendered.

    return (
        <div className={styles.paneAndSidebar}>

            <Pane ml5Results={ml5Results} setMl5={setMl5} />

            <div className={styles.sideBarContainer}>
                    <div className={styles.sideBarButtons}>
                        <Button buttonLabel="Clear" /> 
                        <Button buttonLabel="Refresh" refresh={true}/>
                    </div>
                    <p className={styles.judgesFlavorText}>What do the judges say...</p>
                    <Judges ml5Results={ml5Results}/>
            </div>
        
        </div>
    );
}

export default Sidebar;