import Link from 'next/link';
import { FC } from 'react';
import { PokemonListItemProps } from 'types';

const PokemonListItem: FC<PokemonListItemProps> = ({ pokemon }) => {
	return (
		<div>
			<Link href={`/pokemon/${pokemon.name}`}>{pokemon.name}</Link>
		</div>
	);
};
export default PokemonListItem;
