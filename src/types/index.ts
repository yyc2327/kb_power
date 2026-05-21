export interface User {
  id: string
  name: string
  email: string
  avatar?: string
  role: 'admin' | 'expert' | 'developer' | 'reviewer'
  createdAt: string
}

export interface Region {
  id: string
  name: string
  code: string
  systems: System[]
}

export interface System {
  id: string
  name: string
  code: string
  regionId: string
  modules: Module[]
}

export interface Module {
  id: string
  name: string
  code: string
  systemId: string
  applications: Application[]
}

export interface Application {
  id: string
  name: string
  code: string
  moduleId: string
  description: string
  owner: string
  repository: string
  techStack: string[]
  knowledge: Knowledge
  createdAt: string
  updatedAt: string
}

export interface Knowledge {
  id: string
  appId: string
  type: 'overview' | 'api' | 'schema' | 'component' | 'issue'
  title: string
  content: string
  status: 'draft' | 'pending' | 'approved' | 'published'
  version: number
  createdBy: string
  createdAt: string
  updatedAt: string
  reviewedBy?: string
  reviewedAt?: string
}

export interface GraphNode {
  id: string
  type: 'function' | 'module' | 'interface' | 'table' | 'service'
  label: string
  properties: Record<string, any>
  x?: number
  y?: number
}

export interface GraphEdge {
  id: string
  source: string
  target: string
  type: 'calls' | 'depends' | 'uses' | 'extends'
  label?: string
}

export interface KnowledgeGraph {
  nodes: GraphNode[]
  edges: GraphEdge[]
}

export interface PageResult<T> {
  list: T[]
  total: number
  page: number
  pageSize: number
}
