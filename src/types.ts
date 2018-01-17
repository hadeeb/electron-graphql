import { GraphQLSchema, DocumentNode } from "graphql"

// Fetch types

export interface GraphQLRequest {
  query?: string | DocumentNode
  variables?: { [key: string]: any }
  operationName?: string
}

export interface FetchResult {
  data: any
  errors?: any
  extensions?: any
}

export interface FetchOptions {
  channel?: string
}

// Provider types

export interface ProviderOptions {
  channel?: string
  schema: GraphQLSchema
  rootValue?: any
  contextValue?: any
}
