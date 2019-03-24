import React, { createContext } from 'react';
import CharactersView from './CharactersView';
export type Props = {
	objArr: {
		birth_year: string;
		created: string;
		edited: string;
		eye_color: string;
		gender: boolean;
		name: string;
	}[];
};
export const StarWarsContext = createContext({});
const App: React.FC<{ data: Props }> = ({ data }) => {
	return (
		<StarWarsContext.Provider value={{ data }}>
			<CharactersView />
		</StarWarsContext.Provider>
	);
};

export default App;
