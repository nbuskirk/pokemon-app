import { IPokemonProps } from 'types';

const PokemonListItem = (props: IPokemonProps) => {
	const { pokemon } = props;
	return <div>{pokemon.name}</div>;
};
export default PokemonListItem;
