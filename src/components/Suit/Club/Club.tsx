import React from 'react';
import styles from './Club.module.css'; // Import css modules stylesheet as styles

export const Club = () => {
	return (
		<div className={styles.wrapper}>
			<div className={styles.square}></div>
			<div className={styles.circle1}></div>
			<div className={styles.circle2}></div>
			<div className={styles.circle3}></div>
			<div className={styles.tail}></div>
		</div>
	);
};
