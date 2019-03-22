import React from 'react';

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
	console.log({ character });
	return <div>{character.birth_year}</div>;
};

export default Character;
