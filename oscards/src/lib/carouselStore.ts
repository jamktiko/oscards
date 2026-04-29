import { writable } from 'svelte/store';
const carouselState = writable<number>(0);

export default carouselState;
