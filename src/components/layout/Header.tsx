import React from 'react';
import { 
  ElInput,
  ElButton,
  ElIcon,
  ElBadge,
  ElAvatar,
  ElDropdown,
  ElDropdownMenu,
  ElDropdownItem
} from 'element-plus';
import { Search, Bell, Setting, User as UserIcon, SwitchButton } from '@element-plus/icons-vue';

interface HeaderProps {
  onMenuToggle?: () => void;
  showMenuToggle?: boolean;
}

export const Header: React.FC<HeaderProps> = ({ onMenuToggle, showMenuToggle = true }) => {
  return (
    <div style={{
      height: '64px',
      backgroundColor: '#fff',
      borderBottom: '1px solid #e4e7ed',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '0 24px',
      gap: '16px'
    }}>
      {/* 左侧区域 */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '16px', flex: 1 }}>
        {showMenuToggle && (
          <ElButton
            text
            onClick={onMenuToggle}
            style={{ fontSize: '20px' }}
          >
            <span style={{ fontSize: '20px' }}>☰</span>
          </ElButton>
        )}
        
        <ElInput
          placeholder="搜索知识..."
          prefixIcon={<Search />}
          style={{ maxWidth: '400px', width: '100%' }}
        />
      </div>

      {/* 右侧区域 */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
        {/* 通知 */}
        <ElBadge value={3} :max="99" style={{ cursor: 'pointer' }}>
          <ElButton text>
            <ElIcon size={20} color="#606266">
              <Bell />
            </ElIcon>
          </ElButton>
        </ElBadge>

        {/* 用户下拉菜单 */}
        <ElDropdown trigger="click">
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            cursor: 'pointer',
            padding: '4px 8px',
            borderRadius: '8px',
            transition: 'background-color 0.3s'
          }}>
            <ElAvatar 
              size={36}
              style={{ backgroundColor: '#409eff', flexShrink: 0 }}
            >
              管理员
            </ElAvatar>
            <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
              <span style={{ fontSize: '14px', color: '#303133' }}>管理员</span>
              <span style={{ fontSize: '12px', color: '#909399' }}>▼</span>
            </div>
          </div>
          
          <template #dropdown>
            <ElDropdownMenu>
              <ElDropdownItem>
                <ElIcon style={{ marginRight: '8px' }}><UserIcon /></ElIcon>
                个人中心
              </ElDropdownItem>
              <ElDropdownItem>
                <ElIcon style={{ marginRight: '8px' }}><Setting /></ElIcon>
                账户设置
              </ElDropdownItem>
              <ElDropdownItem divided>
                <ElIcon style={{ marginRight: '8px' }}><SwitchButton /></ElIcon>
                退出登录
              </ElDropdownItem>
            </ElDropdownMenu>
          </template>
        </ElDropdown>
      </div>
    </div>
  );
};
