
import * as ml5 from "ml5";
import Sketch from 'react-p5';
import styles from './Pane.module.scss';

const Pane = (props) => {

    let canvas; 
    let doodleClassifier;

	const setup = (p5, canvasParentRef) => {

    	canvas = p5.createCanvas(800, 580).parent(canvasParentRef);
        p5.background(255);

        
        const clearCanvas = () => {
            p5.background(255);
        }

        // This is rendered clientside...I wonder if that's what allows us to select the button
        let button = p5.select("button");
        button.mousePressed(clearCanvas);

        doodleClassifier = ml5.imageClassifier('DoodleNet', modelReady);
    }


    const modelReady = () => {
        doodleClassifier.classify(canvas, gotResults);
    }

    const gotResults = (error, results) => {
        if (error) {
            console.error(error);
            return;
        }
        let topResults = [results[0], results[1], results[2]];
        props.setMl5(topResults);
        doodleClassifier.classify(canvas, gotResults);

    }

    
    const draw = (p5) => {
        if (p5.mouseIsPressed) {
            p5.strokeWeight(32);
            p5.line(p5.mouseX, p5.mouseY, p5.pmouseX, p5.pmouseY);
        }
    }

    return(
        <div className={styles.pane}>
            <Sketch setup={setup} draw={draw} />
        </div>
    );
};

export default Pane;