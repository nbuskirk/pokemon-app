import { NextPage } from 'next';
import { useRouter } from 'next/router';
import { useState, useEffect, ReactElement } from 'react';

const PokemonPage: NextPage = (): ReactElement => {
	const [pokemon, setPokemon] = useState([]);
	const [loading, setLoading] = useState(true);
	const router = useRouter();
	useEffect(() => {
		const fetchData = async () => {
			await fetch(`https://pokeapi.co/api/v2/pokemon/${router.query.name}`)
				.then((response) => response.json())
				.then((data) => {
					setPokemon(data);
					setLoading(false);
				});
		};
		setLoading(true);
		router.query.name && fetchData();
	}, [router.query.name]);
	return !loading ? (
		<div className='container mx-auto'>
			<div>ID: {pokemon.id}</div>
			<div>Name: {pokemon.name}</div>
		</div>
	) : (
		<div className='container mx-auto'>Page Loading...</div>
	);
};

export default PokemonPage;
