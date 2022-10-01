import { IPokemonProps } from 'types';
import Link from 'next/link';

const PokemonListItem = (props: IPokemonProps) => {
	const { pokemon } = props;
	return (
		<div>
			<Link href={`/pokemon/${pokemon.name}`}>{pokemon.name}</Link>
		</div>
	);
};
export default PokemonListItem;
