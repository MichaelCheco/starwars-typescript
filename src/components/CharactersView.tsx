import React from 'react';
import { StarWarsContext } from './App';
import { Props } from './App';
import Character from './Character';

export const CharactersView: React.FC = () => {
	const Characters = React.useContext(StarWarsContext);
	return (
		<div>
			{Characters.data.map((c, i) => (
				<Character character={c} key={i} />
			))}
		</div>
	);
};
export default CharactersView;
