import { Suspense, lazy } from 'react'
import { Routes, Route } from 'react-router-dom'
import { Layout } from './components/layout'

// 懒加载页面组件
const Dashboard = lazy(() => import('./pages/Dashboard').then(m => ({ default: m.Dashboard })))
const Domain = lazy(() => import('./pages/Domain').then(m => ({ default: m.Domain })))
const Graph = lazy(() => import('./pages/Graph').then(m => ({ default: m.Graph })))
const Collaboration = lazy(() => import('./pages/Collaboration').then(m => ({ default: m.Collaboration })))
const Settings = lazy(() => import('./pages/Settings').then(m => ({ default: m.Settings })))

function App() {
  return (
    <div className="min-h-screen bg-slate-50">
      <Layout>
        <Suspense fallback={
          <div className="flex items-center justify-center h-64">
            <div className="text-slate-500">加载中...</div>
          </div>
        }>
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/domains" element={<Domain />} />
            <Route path="/graph" element={<Graph />} />
            <Route path="/graph/:type" element={<div className="p-6"><h1 className="text-2xl font-bold text-slate-900">图谱详情页 - 开发中</h1></div>} />
            <Route path="/collaboration" element={<Collaboration />} />
            <Route path="/settings" element={<Settings />} />
          </Routes>
        </Suspense>
      </Layout>
    </div>
  )
}

export default App
