import React from 'react';

export const Header: React.FC = () => {
  return (
    <div style={{
      height: '64px',
      backgroundColor: '#fff',
      borderBottom: '1px solid #e4e7ed',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '0 24px'
    }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '16px', flex: 1 }}>
        <input
          type="text"
          placeholder="搜索知识..."
          style={{
            maxWidth: '400px',
            width: '100%',
            padding: '8px 12px',
            border: '1px solid #dcdfe6',
            borderRadius: '4px',
            outline: 'none'
          }}
        />
      </div>

      <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
        <div style={{
          width: '36px',
          height: '36px',
          borderRadius: '50%',
          backgroundColor: '#409eff',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: '#fff',
          fontSize: '14px'
        }}>
          管理员
        </div>
      </div>
    </div>
  );
};
