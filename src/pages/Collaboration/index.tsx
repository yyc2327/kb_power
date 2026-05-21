import React from 'react';
import { mockUsers } from '@/mock';

const activities = [
  { user: '张三', action: '更新了', target: '用户服务文档', time: '2分钟前' },
  { user: '李四', action: '评论了', target: '订单系统API', time: '15分钟前' },
  { user: '王五', action: '审核通过', target: '支付系统架构', time: '1小时前' },
];

export const Collaboration: React.FC = () => {
  return (
    <div style={{ padding: '24px', maxWidth: '1400px' }}>
      <div style={{ marginBottom: '24px', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
        <div>
          <h1 style={{ fontSize: '24px', fontWeight: '600', color: '#303133', margin: 0 }}>
            协作空间
          </h1>
          <p style={{ fontSize: '14px', color: '#909399', marginTop: '8px' }}>
            团队协作、知识审核和讨论
          </p>
        </div>
        <button style={{
          backgroundColor: '#409eff',
          color: '#fff',
          padding: '10px 20px',
          borderRadius: '8px',
          border: 'none',
          fontSize: '14px',
          cursor: 'pointer',
          fontWeight: '500'
        }}>
          发起讨论
        </button>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '16px' }}>
        <div style={{ gridColumn: 'span 2' }}>
          <div style={{
            backgroundColor: '#fff',
            borderRadius: '8px',
            padding: '24px',
            border: '1px solid #ebeef5',
            boxShadow: '0 2px 12px 0 rgba(0, 0, 0, 0.03)',
            marginBottom: '16px'
          }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
              <h2 style={{ fontSize: '16px', fontWeight: '600', color: '#303133', margin: 0 }}>
                活动动态
              </h2>
              <button style={{
                background: 'none',
                border: 'none',
                color: '#409eff',
                cursor: 'pointer',
                fontSize: '14px'
              }}>
                查看全部
              </button>
            </div>
            
            {activities.map((activity, index) => (
              <div 
                key={index} 
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '12px',
                  padding: '12px 0',
                  borderBottom: index < activities.length - 1 ? '1px solid #f5f7fa' : 'none'
                }}
              >
                <div style={{
                  width: '40px',
                  height: '40px',
                  borderRadius: '50%',
                  backgroundColor: '#409eff',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#fff',
                  fontSize: '14px',
                  fontWeight: '500',
                  flexShrink: 0
                }}>
                  {activity.user.charAt(0)}
                </div>
                <div style={{ flex: 1 }}>
                  <div style={{ fontSize: '14px', color: '#303133' }}>
                    <span style={{ fontWeight: '600' }}>{activity.user}</span>
                    <span style={{ color: '#606266', marginLeft: '8px' }}>{activity.action}</span>
                    <span style={{ color: '#409eff', marginLeft: '8px' }}>{activity.target}</span>
                  </div>
                  <div style={{ fontSize: '12px', color: '#909399', marginTop: '4px' }}>
                    {activity.time}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div>
          <div style={{
            backgroundColor: '#fff',
            borderRadius: '8px',
            padding: '24px',
            border: '1px solid #ebeef5',
            boxShadow: '0 2px 12px 0 rgba(0, 0, 0, 0.03)'
          }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
              <h2 style={{ fontSize: '16px', fontWeight: '600', color: '#303133', margin: 0 }}>
                团队成员
              </h2>
              <button style={{
                background: 'none',
                border: 'none',
                color: '#409eff',
                cursor: 'pointer',
                fontSize: '14px'
              }}>
                邀请
              </button>
            </div>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              {mockUsers.map((user) => (
                <div 
                  key={user.id}
                  style={{ 
                    display: 'flex',
                    alignItems: 'center',
                    gap: '12px',
                    padding: '8px',
                    borderRadius: '8px',
                    cursor: 'pointer'
                  }}
                >
                  <div style={{ position: 'relative' }}>
                    <div style={{
                      width: '40px',
                      height: '40px',
                      borderRadius: '50%',
                      backgroundColor: '#409eff',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: '#fff',
                      fontSize: '14px',
                      fontWeight: '500'
                    }}>
                      {user.name.charAt(0)}
                    </div>
                    <div style={{
                      position: 'absolute',
                      bottom: '0',
                      right: '0',
                      width: '12px',
                      height: '12px',
                      borderRadius: '50%',
                      backgroundColor: '#67c23a',
                      border: '2px solid #fff'
                    }} />
                  </div>
                  <div>
                    <div style={{ fontSize: '14px', fontWeight: '500', color: '#303133' }}>
                      {user.name}
                    </div>
                    <div style={{ fontSize: '12px', color: '#909399' }}>
                      {user.role === 'admin' ? '系统管理员' : user.role === 'expert' ? '技术专家' : '开发者'}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
