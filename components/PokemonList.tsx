import PokemonListItem from './PokemonListItem';
import { IPokemonProps } from 'types';

const PokemonList = (props: IPokemonProps) => {
	const { pokemon } = props;

	return (
		<div>
			<h1>Pokemon List</h1>
			<hr />
			{pokemon.map((pokemon) => (
				<PokemonListItem key={pokemon.name} pokemon={pokemon} />
			))}
		</div>
	);
};

export default PokemonList;
