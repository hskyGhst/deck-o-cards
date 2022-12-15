import React from 'react';
import styles from './Heart.module.css'; // Import css modules stylesheet as styles

export const Heart = () => {
	return (
		<div className={styles.wrapper}>
			<div className={styles.square}></div>
			<div className={styles.circle1}></div>
			<div className={styles.circle2}></div>
		</div>
	);
};
