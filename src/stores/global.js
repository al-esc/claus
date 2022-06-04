/**
 * The Global State of the project.
 *
 * @package Theme GO
 */

import { writable } from 'svelte/store';

function createTitle() {
	const {subscribe, set, update} = writable('');
	set('Timmer');

	return {
		subscribe,
		set: (value) => {
			set(`${value} • Timmer`);
		},
		clear: () => {
			set('Timmer')
		}
	}
}

export const title = createTitle();
