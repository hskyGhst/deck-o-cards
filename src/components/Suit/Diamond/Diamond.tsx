import React from 'react';
import styles from './Diamond.module.css'; // Import css modules stylesheet as styles

export const Diamond = () => {
	return (
		<div className={styles.wrapper}>
			<div className={styles.square} />
		</div>
	);
};
