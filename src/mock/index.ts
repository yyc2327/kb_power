import type { User, Region, System, Module, Application, Knowledge } from '@/types'
import { generateId } from '@/utils'

export const mockUsers: User[] = [
  {
    id: generateId(),
    name: '张三',
    email: 'zhangsan@example.com',
    role: 'admin',
    createdAt: '2024-01-01T00:00:00Z',
  },
  {
    id: generateId(),
    name: '李四',
    email: 'lisi@example.com',
    role: 'expert',
    createdAt: '2024-01-05T00:00:00Z',
  },
  {
    id: generateId(),
    name: '王五',
    email: 'wangwu@example.com',
    role: 'developer',
    createdAt: '2024-01-10T00:00:00Z',
  },
]

export const mockKnowledge: Knowledge = {
  id: generateId(),
  appId: '',
  type: 'overview',
  title: '系统概览',
  content: '# 系统概述\n\n这是一个示例知识条目...',
  status: 'published',
  version: 1,
  createdBy: mockUsers[0]!.id,
  createdAt: '2024-01-15T00:00:00Z',
  updatedAt: '2024-01-15T00:00:00Z',
}

export const mockApplications: Application[] = [
  {
    id: generateId(),
    name: '用户服务',
    code: 'user-service',
    moduleId: '',
    description: '处理用户认证、授权和用户信息管理的核心服务',
    owner: mockUsers[0]!.id,
    repository: 'https://git.example.com/user-service',
    techStack: ['Node.js', 'Express', 'PostgreSQL', 'Redis'],
    knowledge: mockKnowledge,
    createdAt: '2024-01-01T00:00:00Z',
    updatedAt: '2024-01-01T00:00:00Z',
  },
  {
    id: generateId(),
    name: '订单服务',
    code: 'order-service',
    moduleId: '',
    description: '管理订单创建、处理和支付的核心服务',
    owner: mockUsers[1]!.id,
    repository: 'https://git.example.com/order-service',
    techStack: ['Spring Boot', 'MySQL', 'RabbitMQ'],
    knowledge: mockKnowledge,
    createdAt: '2024-01-05T00:00:00Z',
    updatedAt: '2024-01-05T00:00:00Z',
  },
]

const mockModule1: Module = {
  id: generateId(),
  name: '核心业务模块',
  code: 'core-business',
  systemId: '',
  applications: mockApplications,
}

const mockModule2: Module = {
  id: generateId(),
  name: '基础设施模块',
  code: 'infra',
  systemId: '',
  applications: [],
}

const mockSystem1: System = {
  id: generateId(),
  name: '电商系统',
  code: 'ecommerce-system',
  regionId: '',
  modules: [mockModule1, mockModule2],
}

const mockSystem2: System = {
  id: generateId(),
  name: 'ERP系统',
  code: 'erp-system',
  regionId: '',
  modules: [],
}

export const mockRegions: Region[] = [
  {
    id: generateId(),
    name: '华北区',
    code: 'north-china',
    systems: [mockSystem1],
  },
  {
    id: generateId(),
    name: '华东区',
    code: 'east-china',
    systems: [mockSystem2],
  },
]

mockSystem1.regionId = mockRegions[0]!.id
mockSystem2.regionId = mockRegions[1]!.id
mockModule1.systemId = mockSystem1.id
mockModule2.systemId = mockSystem1.id
mockApplications[0]!.moduleId = mockModule1.id
mockApplications[1]!.moduleId = mockModule1.id
