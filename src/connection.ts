import type { HrpcOptions } from '@harmony-dev/transport-hrpc'
import { HrpcTransport } from '@harmony-dev/transport-hrpc'
import { AuthServiceClient } from '../gen/auth/v1/auth.client'
import { BatchServiceClient } from '../gen/batch/v1/batch.client'
import { ChatServiceClient } from '../gen/chat/v1/chat.client'
import { EmoteServiceClient } from '../gen/emote/v1/emote.client'
import { MediaProxyServiceClient } from '../gen/mediaproxy/v1/mediaproxy.client'
import { ProfileServiceClient } from '../gen/profile/v1/profile.client'

export interface UploadedFile {
	name: string
	contentType: string
	id: string
	size: number
}

export class Connection {
	host: string
	auth: AuthServiceClient
	chat: ChatServiceClient
	batch: BatchServiceClient
	profile: ProfileServiceClient
	emote: EmoteServiceClient
	mediaProxy: MediaProxyServiceClient

	private session?: string
	private transport: HrpcTransport

	constructor(host: string, options?: Partial<HrpcOptions>) {
		this.host = host
		this.transport = new HrpcTransport({
			...options,
			baseUrl: host,
		})
		this.auth = new AuthServiceClient(this.transport)
		this.chat = new ChatServiceClient(this.transport)
		this.profile = new ProfileServiceClient(this.transport)
		this.emote = new EmoteServiceClient(this.transport)
		this.batch = new BatchServiceClient(this.transport)
		this.mediaProxy = new MediaProxyServiceClient(this.transport)
	}

	setSession(session: string) {
		this.session = session
		this.transport.setSession(session)
	}

	getSession() {
		return this.session
	}

	async uploadFile(f: File) {
		const url = new URL(`${this.host}/_harmony/media/upload`)
		url.searchParams.set('filename', f.name)
		url.searchParams.set('contentType', f.type || 'text/plain')
		const data = new FormData()
		data.set('file', f)
		const headers = new Headers()
		headers.set('Authorization', this.session || '')
		const resp = await fetch(url.toString(), {
			body: data,
			method: 'POST',
			headers,
		})
		const asJSON = await resp.json()
		return {
			name: f.name,
			contentType: f.type,
			id: asJSON.id,
			size: f.size,
		} as UploadedFile
	}
}
