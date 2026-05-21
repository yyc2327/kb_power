import { Suspense } from 'react'
import { Routes, Route } from 'react-router-dom'

function App() {
  return (
    <div className="min-h-screen">
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<div>仪表盘</div>} />
        </Routes>
      </Suspense>
    </div>
  )
}

export default App
