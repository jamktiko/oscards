const favorites: string[] = $state([]);

export const favorite = {
	get fav(): string[] {
		return favorites;
	},
	set fav(tunnus: string) {
		favorites.push(tunnus);
	},
	set unfav(tunnus: string) {
		favorites.splice(favorites.indexOf(tunnus), 1);
	}
};
