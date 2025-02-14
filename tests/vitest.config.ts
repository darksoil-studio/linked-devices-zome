import { defineConfig } from 'vitest/config';

export default defineConfig({
	test: {
		poolOptions: {
			threads: {
				singleThread: true,
			},
		},
		retry: 4,
		testTimeout: 60 * 1000 * 3, // 2  mins
	},
});
