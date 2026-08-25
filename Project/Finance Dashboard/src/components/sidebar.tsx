import { NavLink } from "react-router-dom";
import { LayoutDashboard, ArrowLeftRight, Lightbulb } from "lucide-react";
import useStore from '../store/useStore'
import type { Role } from '../types'
import './sidebar.css'

const navItems = [
  { to: '/overview',     icon: LayoutDashboard, label: 'Overview' },
  { to: '/transactions', icon: ArrowLeftRight,  label: 'Transactions' },
  { to: '/insights',     icon: Lightbulb,       label: 'Insights' },
]

export default function Sidebar(){
    const{ role, setRole }= useStore();

    return(
      <>
        <aside className = "sidebar">
            {/* logo */}
        <div className="sidebar-logo">
            <div className="logo-text">
                FinTrack</div>
            </div>
        {/* nav */}
        <nav className="sidebar-nav">
            <p className="nav-section-label">Main</p>
            {navItems.map(({ to, icon: Icon, label }) => (
          <NavLink
            key={to}
            to={to}
            className={({ isActive }) =>
              `nav-item ${isActive ? 'nav-item--active' : ''}`
            }
          >
            <Icon size={17} />
            {label}
          </NavLink>
        ))}
      </nav>

      {/* Role Switcher */}
      <div className="sidebar-footer">
        <div className="role-box">
          <p className="role-label">Active Role</p>
          <select
            className="role-select"
            value={role}
            onChange={(e) => setRole(e.target.value as Role)}
          >
            <option value="admin">👑 Admin</option>
            <option value="viewer">👁 Viewer</option>
          </select>
          <div className={`role-badge role-badge--${role}`}>
            <span className="role-dot" />
            {role === 'admin' ? 'Admin — Full access' : 'Viewer — Read only'}
          </div>
        </div>
      </div>
    </aside>
    </>
  )
}