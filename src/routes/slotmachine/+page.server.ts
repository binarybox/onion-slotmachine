import { base_food, preparations, protein, sauces, vegtables } from './foods';
import type { PageServerLoad, Actions } from './$types';

export const load = (() => {
    const random_base_food_idx = Math.floor(Math.random() * base_food.length);
    const protein_index = Math.floor(Math.random() * protein.length)
    const vegtable_index = Math.floor(Math.random() * vegtables.length)
    const sauce_index = Math.floor(Math.random() * sauces.length)
    const preparation_index = Math.floor(Math.random() * preparations.length)
    return {
        base_food: base_food[random_base_food_idx].name,
        protein: protein[protein_index].name,
        vegetable: vegtables[vegtable_index].name,
        sauce: sauces[sauce_index].name,
        spice: sauces[sauce_index].random_spice().name,
        preparation: preparations[preparation_index].name,
    };
}) satisfies PageServerLoad;

export const actions = {
    /**
     * Modify game state in reaction to a keypress. If client-side JavaScript
     * is available, this will happen in the browser instead of here
     */
    update: async ({ request, cookies }) => {
        // const game = new Game(cookies.get('sverdle'));

        // const data = await request.formData();
        // const key = data.get('key');

        // const i = game.answers.length;

        // if (key === 'backspace') {
        // 	game.guesses[i] = game.guesses[i].slice(0, -1);
        // } else {
        // 	game.guesses[i] += key;
        // }

        // cookies.set('sverdle', game.toString(), { path: '/' });
    },

    /**
     * Modify game state in reaction to a guessed word. This logic always runs on
     * the server, so that people can't cheat by peeking at the JavaScript
     */
    enter: async ({ request, cookies }) => {
        // const game = new Game(cookies.get('sverdle'));

        // const data = await request.formData();
        // const guess = data.getAll('guess') as string[];

        // if (!game.enter(guess)) {
        // 	return fail(400, { badGuess: true });
        // }

        // cookies.set('sverdle', game.toString(), { path: '/' });
    },

    restart: async ({ cookies }) => {
        // cookies.delete('sverdle', { path: '/' });
    }
} satisfies Actions;
