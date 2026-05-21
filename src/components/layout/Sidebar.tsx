import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { 
  ElMenu,
  ElMenuItem,
  ElIcon,
  ElAvatar
} from 'element-plus';
import { 
  Dashboard, 
  List, 
  Share, 
  User, 
  Setting,
  OfficeBuilding
} from '@element-plus/icons-vue';

export const Sidebar: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  
  const menuItems = [
    { path: '/', label: '仪表盘', icon: Dashboard },
    { path: '/domains', label: '知识域管理', icon: List },
    { path: '/graph', label: '知识图谱', icon: Share },
    { path: '/collaboration', label: '协作空间', icon: User },
    { path: '/settings', label: '系统设置', icon: Setting },
  ];

  const handleMenuSelect = (index: string) => {
    navigate(index);
  };

  return (
    <div style={{
      width: '240px',
      height: '100vh',
      backgroundColor: '#fff',
      borderRight: '1px solid #e4e7ed',
      display: 'flex',
      flexDirection: 'column'
    }}>
      {/* Logo 区域 */}
      <div style={{
        padding: '20px',
        borderBottom: '1px solid #e4e7ed',
        display: 'flex',
        alignItems: 'center',
        gap: '12px'
      }}>
        <ElIcon size={32} color="#409eff">
          <OfficeBuilding />
        </ElIcon>
        <h1 style={{
          fontSize: '18px',
          fontWeight: '600',
          color: '#303133',
          margin: 0
        }}>
          企业知识库
        </h1>
      </div>

      {/* 菜单 */}
      <div style={{ flex: 1, overflow: 'auto', padding: '12px 0' }}>
        <ElMenu
          defaultActive={location.pathname}
          onSelect={handleMenuSelect}
          style={{ border: 'none' }}
        >
          {menuItems.map((item) => (
            <ElMenuItem key={item.path} index={item.path}>
              <ElIcon size={20}>
                {React.createElement(item.icon)}
              </ElIcon>
              <span>{item.label}</span>
            </ElMenuItem>
          ))}
        </ElMenu>
      </div>

      {/* 用户信息 */}
      <div style={{
        padding: '16px',
        borderTop: '1px solid #e4e7ed',
        backgroundColor: '#fafafa'
      }}>
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '12px',
          padding: '12px',
          backgroundColor: '#fff',
          borderRadius: '8px',
          boxShadow: '0 2px 8px rgba(0,0,0,0.04)'
        }}>
          <ElAvatar 
            size={40} 
            style={{ backgroundColor: '#409eff', flexShrink: 0 }}
          >
            管理员
          </ElAvatar>
          <div>
            <div style={{
              fontSize: '14px',
              fontWeight: '500',
              color: '#303133',
              marginBottom: '2px'
            }}>
              管理员
            </div>
            <div style={{
              fontSize: '12px',
              color: '#909399'
            }}>
              admin@example.com
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
