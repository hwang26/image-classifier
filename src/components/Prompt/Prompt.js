
import styles from './Prompt.module.scss';
import refreshIcon from '/public/refresh-icon.svg';

const Prompt = () => {

	return(
			<div className={styles.prompt}>
				<h1>Sketch It!</h1>
				<h2>Rain</h2>
				{/*
					<a href="https://www.google.com">
						<img src={refreshIcon} alt="Refresh Button for Prompt"/>
					</a>
				*/}
			</div>

	);

}

export default Prompt;