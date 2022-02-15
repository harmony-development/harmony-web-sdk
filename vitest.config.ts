/// <reference types="vitest" />
import { defineConfig } from 'vite'

export default defineConfig({
	test: {
		reporters: ['verbose'],
		deps: {
			inline: [
				'@protobuf-ts/runtime-rpc',
			],
		},
	},
})
