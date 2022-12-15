import React from 'react';
import styles from './Rank.module.css'; // Import css modules stylesheet as styles
import 'open-props/tokens'

export const Ranks = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'] as const;

export type RankType = typeof Ranks[number];

interface RankProps {
	rank: RankType;
	color?: 'red' | 'black';
}

export const Rank = ({ rank, color = 'red' }: RankProps) => {
	return (
		<div className={`${styles.wrapper} ${styles[color]}`}>
			{rank}
		</div>
	);
}
