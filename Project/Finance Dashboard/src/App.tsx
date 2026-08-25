import Sidebar from './components/sidebar';
import './App.css'
import  useStore  from './store/useStore';
import { useEffect } from 'react';
import { BrowserRouter , Route, Routes, Navigate } from 'react-router-dom';
import Topbar from './components/Topbar';
import Overview from './pages/Overview';
import Insights from './pages/Insights';
import Transactions from './pages/Transaction';

export default function App() {
   const theme = useStore((s) => s.theme)

  useEffect (() => {
    document.documentElement.setAttribute('data-theme',theme)
  }, [theme])
  return (
    <>
    <BrowserRouter>
    <div className="app-shell">
    <Sidebar />
    <div className="app-body">
      <Topbar />
       <main className="app-main">
            <Routes>
              <Route path="/" element={<Navigate to="/overview" replace />} />
              <Route path="/overview"     element={<Overview />} />
              <Route path="/transactions" element={<Transactions />} />
              <Route path="/insights"     element={<Insights />} />
            </Routes>
          </main>
    </div>
    </div>
    </BrowserRouter>
    </>
  )
}

