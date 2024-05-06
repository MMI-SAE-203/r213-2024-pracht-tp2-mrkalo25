/**
* This file was @generated using pocketbase-typegen
*/

import type PocketBase from 'pocketbase'
import type { RecordService } from 'pocketbase'

export enum Collections {
	Agent = "Agent",
	Maison = "Maison",
	Users = "users",
}

// Alias types for improved usability
export type IsoDateString = string
export type RecordIdString = string
export type HTMLString = string

// System fields
export type BaseSystemFields<T = never> = {
	id: RecordIdString
	created: IsoDateString
	updated: IsoDateString
	collectionId: string
	collectionName: Collections
	expand?: T
}

export type AuthSystemFields<T = never> = {
	email: string
	emailVisibility: boolean
	username: string
	verified: boolean
} & BaseSystemFields<T>

// Record types for each collection

export type AgentRecord = {
	Mail?: string
	Nom?: string
	Numero_de_telephone?: number
	Prenom?: string
}

export type MaisonRecord = {
	Prix?: number
	adresse?: string
	favori?: boolean
	image?: string
	nbChambres?: number
	nbSdb?: number
	nomMaison?: string
	surface?: number
}

export type UsersRecord = {
	avatar?: string
	name?: string
}

// Response types include system fields and match responses from the PocketBase API
export type AgentResponse<Texpand = unknown> = Required<AgentRecord> & BaseSystemFields<Texpand>
export type MaisonResponse<Texpand = unknown> = Required<MaisonRecord> & BaseSystemFields<Texpand>
export type UsersResponse<Texpand = unknown> = Required<UsersRecord> & AuthSystemFields<Texpand>

// Types containing all Records and Responses, useful for creating typing helper functions

export type CollectionRecords = {
	Agent: AgentRecord
	Maison: MaisonRecord
	users: UsersRecord
}

export type CollectionResponses = {
	Agent: AgentResponse
	Maison: MaisonResponse
	users: UsersResponse
}

// Type for usage with type asserted PocketBase instance
// https://github.com/pocketbase/js-sdk#specify-typescript-definitions

export type TypedPocketBase = PocketBase & {
	collection(idOrName: 'Agent'): RecordService<AgentResponse>
	collection(idOrName: 'Maison'): RecordService<MaisonResponse>
	collection(idOrName: 'users'): RecordService<UsersResponse>
}
