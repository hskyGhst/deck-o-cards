import React from 'react';
import styles from './Corner.module.css'; // Import css modules stylesheet as styles
import 'open-props/tokens'

import type { RankType } from '../Rank';
import { Rank } from '../Rank';
import type { SuitType } from '../Suit';
import { Suit, getSuitColor } from '../Suit';

interface CornerProps {
	rank: RankType;
	suit: SuitType;
	inverted?: boolean;
}

export const Corner = ({ rank, suit, inverted }: CornerProps) => {
	
	return (
		<div className={`${styles.wrapper} ${inverted ? styles.inverted : ''}`}>
			<Rank rank={rank} color={getSuitColor(suit)} />
			<Suit type={suit} />
		</div>
	);
}
