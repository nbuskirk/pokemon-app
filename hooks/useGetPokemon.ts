import { useEffect, useState } from 'react';

const useGetPokemon = () => {
	const pokemonURL = 'https://pokeapi.co/api/v2/pokemon?offset=0&limit=100';
	const [pokemon, setPokemon] = useState([]);

	useEffect(() => {
		fetch(pokemonURL)
			.then((response) => response.json())
			.then((data) => setPokemon(data.results))
			.catch((error) => console.error(error));
	}, []);

	return pokemon?.sort((a: { name: string }, b: { name: string }) =>
		a.name < b.name ? -1 : a.name > b.name ? 1 : 0
	);
};

export default useGetPokemon;
