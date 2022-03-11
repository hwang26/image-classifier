
import {useState, useRef} from 'react';
import * as ml5 from "ml5";
import Sketch from 'react-p5';

import styles from './Pane.module.scss';

const Pane = (props) => {

    let [ml5Result, setMl5] = useState();

// p5 functionality

    let canvas; 
    let doodleClassifier;

	const setup = (p5, canvasParentRef) => {
		// use parent to render the canvas in this ref
		// (without that p5 will render the canvas outside of your component)
    	canvas = p5.createCanvas(800, 600).parent(canvasParentRef);
        p5.background(255);

        /*
        const clearCanvas = () => {
            p5.background(255);
        }

        clearButton = p5.createButton("CLEAR");
        clearButton.mousePressed(clearCanvas);
        */
        // modelReady() is called when the model is loaded
        doodleClassifier = ml5.imageClassifier('DoodleNet', modelReady);
    }

    const modelReady = () => {
        console.log('model loaded');
        doodleClassifier.classify(canvas, gotResults);

    }

    const gotResults = (error, results) => {
        if (error) {
            console.error(error);
            return;
        }
        console.log(results[0].label);

        doodleClassifier.classify(canvas, gotResults);

    }

    
    const draw = (p5) => {
        if (p5.mouseIsPressed) {
            p5.strokeWeight(10);
            p5.line(p5.mouseX, p5.mouseY, p5.pmouseX, p5.pmouseY);
        }
    }

// end of p5 functionality

    return(
        <div className={styles.pane}>
            <Sketch setup={setup} draw={draw} />
        </div>
    );
};

export default Pane;