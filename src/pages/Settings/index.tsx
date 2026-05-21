import React from 'react';

export const Settings: React.FC = () => {
  return (
    <div style={{ padding: '24px', maxWidth: '800px' }}>
      <div style={{ marginBottom: '24px' }}>
        <h1 style={{ fontSize: '24px', fontWeight: '600', color: '#303133', margin: 0 }}>
          系统设置
        </h1>
        <p style={{ fontSize: '14px', color: '#909399', marginTop: '8px' }}>
          管理你的账户和系统偏好设置
        </p>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
        <div style={{
          backgroundColor: '#fff',
          borderRadius: '8px',
          padding: '24px',
          border: '1px solid #ebeef5',
          boxShadow: '0 2px 12px 0 rgba(0, 0, 0, 0.03)'
        }}>
          <h2 style={{ fontSize: '16px', fontWeight: '600', color: '#303133', margin: '0 0 16px 0' }}>
            个人信息
          </h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <div>
              <label style={{ display: 'block', fontSize: '14px', fontWeight: '500', color: '#606266', marginBottom: '8px' }}>
                用户名
              </label>
              <input 
                type="text" 
                defaultValue="管理员"
                style={{
                  width: '100%',
                  padding: '10px 12px',
                  border: '1px solid #dcdfe6',
                  borderRadius: '8px',
                  fontSize: '14px',
                  outline: 'none'
                }}
              />
            </div>
            <div>
              <label style={{ display: 'block', fontSize: '14px', fontWeight: '500', color: '#606266', marginBottom: '8px' }}>
                邮箱
              </label>
              <input 
                type="email" 
                defaultValue="admin@example.com"
                style={{
                  width: '100%',
                  padding: '10px 12px',
                  border: '1px solid #dcdfe6',
                  borderRadius: '8px',
                  fontSize: '14px',
                  outline: 'none'
                }}
              />
            </div>
          </div>
        </div>

        <div style={{
          backgroundColor: '#fff',
          borderRadius: '8px',
          padding: '24px',
          border: '1px solid #ebeef5',
          boxShadow: '0 2px 12px 0 rgba(0, 0, 0, 0.03)'
        }}>
          <h2 style={{ fontSize: '16px', fontWeight: '600', color: '#303133', margin: '0 0 16px 0' }}>
            通知设置
          </h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            {[
              { label: '邮件通知', desc: '接收重要更新的邮件通知' },
              { label: '推送通知', desc: '浏览器推送通知' },
              { label: '审核提醒', desc: '有待审核内容时提醒' },
            ].map((item, index) => (
              <div 
                key={index}
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  padding: '12px 0',
                  borderBottom: index < 2 ? '1px solid #f5f7fa' : 'none'
                }}
              >
                <div>
                  <div style={{ fontSize: '14px', fontWeight: '500', color: '#303133' }}>
                    {item.label}
                  </div>
                  <div style={{ fontSize: '12px', color: '#909399', marginTop: '4px' }}>
                    {item.desc}
                  </div>
                </div>
                <input 
                  type="checkbox" 
                  defaultChecked 
                  style={{ width: '20px', height: '20px', cursor: 'pointer' }}
                />
              </div>
            ))}
          </div>
        </div>

        <button style={{
          backgroundColor: '#409eff',
          color: '#fff',
          padding: '12px 24px',
          borderRadius: '8px',
          border: 'none',
          fontSize: '14px',
          cursor: 'pointer',
          fontWeight: '500',
          alignSelf: 'flex-start'
        }}>
          保存更改
        </button>
      </div>
    </div>
  );
};
