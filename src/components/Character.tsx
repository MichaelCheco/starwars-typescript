import React from 'react';
import { Heading } from '../elements';
import { Header } from '../layouts';

export type CharacterProps = {
	character: {
		birth_year: string;
		created: string;
		edited: string;
		eye_color: string;
		gender: boolean;
		name: string;
	};
};
export const Character: React.FC<CharacterProps> = ({ character }) => {
	return (
		<>
			<Header />
			<Heading>{character.name}</Heading>
		</>
	);
};

export default Character;
