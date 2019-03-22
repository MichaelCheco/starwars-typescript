import React from 'react';
import { StarWarsContext } from './App';
import Character from './Character';
const CharactersView = () => {
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
