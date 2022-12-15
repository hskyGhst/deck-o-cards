import React, { useMemo } from 'react';
import styles from './Suit.module.css'; // Import css modules stylesheet as styles
import 'open-props/tokens'

import { Heart } from "./Heart";
import { Diamond } from "./Diamond";
import { Spade } from "./Spade";
import { Club } from "./Club";

export enum SuitTypes {
	Heart = 'heart',
	Club = 'club',
	Diamond = 'diamond',
	Spade = 'spade',
}

export const Suits = [
	'heart',
	'club',
	'diamond',
	'spade',
] as const;

export type SuitType = typeof Suits[number];

interface SuitProps {
	type: SuitType;
}

export const getSuitColor = (suit: SuitType) => {
	const blackCards = [
		String(SuitTypes.Club),
		String(SuitTypes.Spade),
	];
	
	return blackCards.includes(suit) ? 'black' : 'red';
}

export const Suit = ({ type }: SuitProps) => {
	const render = useMemo(() => {
		switch (type) {
			case SuitTypes.Club:
				return (<Club />);
			case SuitTypes.Diamond:
				return (<Diamond />);
			case SuitTypes.Heart:
				return (<Heart />);
			case SuitTypes.Spade:
				return (<Spade />);
			default:
				return null;
		}
	}, [
		type
	])
	
	return (
		<div className={styles.wrapper}>
			{render}
		</div>
	);
}
