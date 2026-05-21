import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

const menuItems = [
  { path: '/', label: '仪表盘' },
  { path: '/domains', label: '知识域管理' },
  { path: '/graph', label: '知识图谱' },
  { path: '/collaboration', label: '协作空间' },
  { path: '/settings', label: '系统设置' },
];

export const Sidebar: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <div style={{
      width: '240px',
      height: '100vh',
      backgroundColor: '#fff',
      borderRight: '1px solid #e4e7ed',
      display: 'flex',
      flexDirection: 'column'
    }}>
      <div style={{
        padding: '20px',
        borderBottom: '1px solid #e4e7ed'
      }}>
        <h1 style={{
          fontSize: '18px',
          fontWeight: '600',
          color: '#303133',
          margin: 0
        }}>
          企业知识库
        </h1>
      </div>

      <div style={{ flex: 1, overflow: 'auto', padding: '12px 0' }}>
        {menuItems.map((item) => {
          const isActive = location.pathname === item.path;
          return (
            <div
              key={item.path}
              onClick={() => navigate(item.path)}
              style={{
                padding: '12px 20px',
                margin: '4px 8px',
                borderRadius: '8px',
                cursor: 'pointer',
                backgroundColor: isActive ? '#ecf5ff' : 'transparent',
                color: isActive ? '#409eff' : '#606266',
                fontWeight: isActive ? '500' : '400',
                fontSize: '14px',
                transition: 'all 0.3s'
              }}
            >
              {item.label}
            </div>
          );
        })}
      </div>
    </div>
  );
};
