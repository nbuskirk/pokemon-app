import PokemonListItem from './PokemonListItem';
import { IPokemonProps, TPokemon } from 'types';

const PokemonList = (props: IPokemonProps) => {
	const { pokemon }: IPokemonProps = props;

	return (
		<div>
			<h1>Pokemon List</h1>
			<hr />
			{pokemon.map((pokemon: TPokemon) => (
				<PokemonListItem key={pokemon.name} pokemon={pokemon} />
			))}
		</div>
	);
};

export default PokemonList;
