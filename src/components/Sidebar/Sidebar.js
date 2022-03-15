
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

const Sidebar = (props) => {

    let [ml5Results, setMl5] = useState(null);

    let [ref, setRef] = useState(null);

    // Because the ml5 results are constantly being generated, the Sidebar component is constantly rerendered.

    // The Pane remains consistent however

    // After the buttons render, I want the pane to attach the onclick handler

    // First, I need to find out how to get clearButtonRef to actually reference the button

    if(ref === null){

        return(
            <div className={styles.paneAndSidebar}>

                <div className={styles.sideBarContainer}>
                        <div className={styles.sideBarButtons}>
                            <Button buttonLabel="Clear" buttonRefCallback={setRef} /> 
                            <Button buttonLabel="Refresh" />
                        </div>
                        <p className={styles.judgesFlavorText}>What do the judges say...</p>
                        <Judges ml5Results={ml5Results}/>
                </div>
            
            </div>

        );
    }

    else{

        return (
            <div className={styles.paneAndSidebar}>

                <Pane ml5Results={ml5Results} setMl5={setMl5} clearButton={ref}/>

                <div className={styles.sideBarContainer}>
                        <div className={styles.sideBarButtons}>
                            <Button buttonLabel="Clear" buttonRefCallback={setRef}/> 
                            <Button buttonLabel="Refresh" refresh={true}/>
                        </div>
                        <p className={styles.judgesFlavorText}>What do the judges say...</p>
                        <Judges ml5Results={ml5Results}/>
                </div>
            
            </div>
        );
    }
}

export default Sidebar;