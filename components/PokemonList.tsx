interface IPokemonProps {
	pokemon: { name: string; url: string }[];
}

const PokemonList = (props: IPokemonProps) => {
	const { pokemon } = props;

	return (
		<div>
			{pokemon.map((pokemon) => (
				<div key={pokemon.name}>
					{pokemon.name} - {pokemon.url}
				</div>
			))}
		</div>
	);
};

export default PokemonList;
