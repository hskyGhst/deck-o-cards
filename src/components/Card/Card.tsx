import React from 'react';
import styles from './Card.module.css'; // Import css modules stylesheet as styles
import 'open-props/tokens'

import type { RankType } from '../Rank';
import type { SuitType } from '../Suit';

import { Suit } from '../Suit';

import { Corner } from "../Corner";

interface CardProps {
	rank: RankType;
	suit: SuitType;
}

export const Card = ({ rank, suit }: CardProps) => {
	return (
		<div className={styles.wrapper}>
			<div className={`${styles.corner} ${styles.cornerTop}`}>
				<Corner rank={rank} suit={suit} />
			</div>
			<div className={styles.suit}>
				<div>
					<Suit type={suit} />
				</div>
			</div>
			<div className={`${styles.corner} ${styles.cornerBottom}`}>
				<Corner rank={rank} suit={suit} inverted />
			</div>
		</div>
	);
}
