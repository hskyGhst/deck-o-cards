import React from 'react';
import styles from './Spade.module.css'; // Import css modules stylesheet as styles

export const Spade = () => {
	return (
		<div className={styles.wrapper}>
			<div className={styles.square}></div>
			<div className={styles.circle1}></div>
			<div className={styles.circle2}></div>
			<div className={styles.tail}></div>
		</div>
	);
};
