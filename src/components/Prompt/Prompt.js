
import styles from './Prompt.module.scss';

const Prompt = ({categories}) => {

	let prompt = "";

	if(categories !== null){
		// Get random number between 0 and the length of categories (exclusive)
		let randomNum = Math.floor(Math.random() * categories.length);
		prompt = categories[randomNum];
		prompt = prompt.toUpperCase().replaceAll("_", " ");
	}


	return(
			<div className={styles.prompt}>
				<h1>Sketch It!</h1>
				<h2>{prompt}</h2>
			</div>

	);

}

export default Prompt;