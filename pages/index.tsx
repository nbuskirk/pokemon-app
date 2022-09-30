import type { NextPage } from 'next';
import Head from 'next/head';
// import styles from '../styles/Home.module.css';
import PokemonList from '@components/PokemonList';
import useGetPokemon from 'hooks/useGetPokemon';

const Home: NextPage = () => {
	const pokemon = useGetPokemon();

	return (
		<div className='container mx-auto'>
			<Head>
				<title>Pokemon API App</title>
				<meta name='description' content='Pokemon API App' />
				<link rel='icon' href='/favicon.ico' />
			</Head>

			<div className='container mx-auto'>
				<PokemonList pokemon={pokemon} />
			</div>
		</div>
	);
};

export default Home;
