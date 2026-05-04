import { writable } from 'svelte/store';

const stores = new Map<string, ReturnType<typeof writable<number>>>();

export function getCarouselStore(key: string) {
	if (!stores.has(key)) {
		stores.set(key, writable(0));
	}
	return stores.get(key)!;
}
