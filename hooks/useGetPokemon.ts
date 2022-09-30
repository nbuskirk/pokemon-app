import { useEffect, useState } from 'react';

const useGetPokemon = () => {
	const pokemonURL = 'https://pokeapi.co/api/v2/pokemon';
	const [pokemon, setPokemon] = useState([]);

	useEffect(() => {
		fetch(pokemonURL)
			.then((response) => response.json())
			.then((data) => setPokemon(data.results));
	}, [pokemonURL]);

	return pokemon;
};

export default useGetPokemon;
