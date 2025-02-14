import { defineConfig } from 'vitest/config';

// @ts-ignore
import pkg from './package.json';

export default defineConfig({
	test: {
		poolOptions: {
			threads: {
				singleThread: true,
			},
		},
		retry: 2,
		testTimeout: 60 * 1000 * 2, // 2  mins
		deps: {
			optimizer: {
				ssr: {
					enabled: true,
					// @ts-ignore
					include: Object.keys(pkg.dependencies),
					exclude: ['@holochain/client'],
				},
			},
		},
	},
});
