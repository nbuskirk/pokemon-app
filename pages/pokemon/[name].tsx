import { NextPage } from 'next';
import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';

const PokemonPage: NextPage = (props) => {
	const [pokemon, setPokemon] = useState([]);
	const router = useRouter();
	useEffect(() => {
		fetch(`https://pokeapi.co/api/v2/pokemon/${router.query.name}`)
			.then((response) => response.json())
			.then((data) => setPokemon(data))
			.catch((error) => console.log(error));
	}, [router.query.name]);
	return (
		<div className='container mx-auto'>
			<div>ID: {pokemon.id}</div>
			<div>Name: {pokemon.name}</div>
		</div>
	);
};

export default PokemonPage;
