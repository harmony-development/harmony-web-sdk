// Tests if the thing can import successfully :tr:

import { test } from 'vitest'
import { Connection } from '../src/connection'

test('can import connection', () => {
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	const _conn = new Connection('https://chat.harmonyapp.io')
})
