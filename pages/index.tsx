import * as React from 'react';
import fetch from 'isomorphic-unfetch';
import App from '../src/components/App';

const Index = (props: { data: any[] }) => <App data={props.data.results} />;

Index.getInitialProps = async function() {
	const res = await fetch('https://swapi.co/api/people');
	const data = await res.json();
	return { data };
};

export default Index;
