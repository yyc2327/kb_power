import React, { useEffect, useState } from 'react';
import { useKnowledgeStore } from '@/stores';
import { mockRegions, mockUsers } from '@/mock';

export const Dashboard: React.FC = () => {
  const { domains, setDomains } = useKnowledgeStore();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (domains.length === 0) {
        setDomains(mockRegions);
      }
      setIsLoading(false);
    }, 500);
    return () => clearTimeout(timer);
  }, [domains.length, setDomains]);

  const stats = [
    { 
      title: '知识总数', 
      value: '156', 
      change: 12,
      color: '#409eff',
      bgColor: '#ecf5ff'
    },
    { 
      title: '今日更新', 
      value: '8', 
      change: 3,
      color: '#67c23a',
      bgColor: '#f0f9eb'
    },
    { 
      title: '待审核', 
      value: '5', 
      change: -2,
      color: '#e6a23c',
      bgColor: '#fdf6ec'
    },
    { 
      title: '活跃用户', 
      value: mockUsers.length.toString(), 
      change: 2,
      color: '#9c27b0',
      bgColor: '#f4f4f5'
    },
  ];

  if (isLoading) {
    return (
      <div style={{ padding: '24px' }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
          <div style={{ height: '32px', backgroundColor: '#f5f7fa', borderRadius: '4px', width: '200px' }}></div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '16px' }}>
            {[1, 2, 3, 4].map((i) => (
              <div key={i} style={{ height: '128px', backgroundColor: '#f5f7fa', borderRadius: '8px' }}></div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div style={{ padding: '24px', maxWidth: '1400px' }}>
      <div style={{ marginBottom: '24px' }}>
        <h1 style={{ fontSize: '24px', fontWeight: '600', color: '#303133', margin: 0 }}>
          仪表盘
        </h1>
        <p style={{ fontSize: '14px', color: '#909399', marginTop: '8px' }}>
          欢迎回来，查看你的知识概览
        </p>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '16px', marginBottom: '24px' }}>
        {stats.map((stat, index) => (
          <div 
            key={index} 
            style={{
              backgroundColor: '#fff',
              borderRadius: '8px',
              padding: '24px',
              border: '1px solid #ebeef5',
              boxShadow: '0 2px 12px 0 rgba(0, 0, 0, 0.03)'
            }}
          >
            <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', marginBottom: '16px' }}>
              <div style={{
                width: '48px',
                height: '48px',
                borderRadius: '8px',
                backgroundColor: stat.bgColor,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '20px',
                fontWeight: 'bold',
                color: stat.color
              }}>
                {stat.value}
              </div>
              <div style={{ 
                padding: '4px 8px', 
                borderRadius: '4px', 
                fontSize: '12px',
                fontWeight: '500',
                backgroundColor: stat.change >= 0 ? '#67c23a15' : '#f56c6a15',
                color: stat.change >= 0 ? '#67c23a' : '#f56c6a'
              }}>
                {stat.change >= 0 ? '+' : ''}{stat.change}%
              </div>
            </div>
            <div style={{ fontSize: '28px', fontWeight: '600', color: '#303133', marginBottom: '4px' }}>
              {stat.value}
            </div>
            <div style={{ fontSize: '14px', color: '#909399' }}>
              {stat.title}
            </div>
          </div>
        ))}
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '16px' }}>
        <div style={{
          backgroundColor: '#fff',
          borderRadius: '8px',
          padding: '24px',
          border: '1px solid #ebeef5',
          boxShadow: '0 2px 12px 0 rgba(0, 0, 0, 0.03)',
          gridColumn: 'span 2'
        }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
            <h2 style={{ fontSize: '16px', fontWeight: '600', color: '#303133', margin: 0 }}>
              知识域概览
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
          
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            {domains.map((region) => (
              <div 
                key={region.id}
                style={{ 
                  padding: '16px', 
                  border: '1px solid #ebeef5', 
                  borderRadius: '8px',
                  cursor: 'pointer',
                  transition: 'all 0.3s'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                    <div style={{
                      width: '48px',
                      height: '48px',
                      borderRadius: '8px',
                      backgroundColor: '#ecf5ff',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: '24px',
                      fontWeight: '600',
                      color: '#409eff'
                    }}>
                      {region.name.charAt(0)}
                    </div>
                    <div>
                      <div style={{ fontSize: '14px', fontWeight: '500', color: '#303133', marginBottom: '4px' }}>
                        {region.name}
                      </div>
                      <div style={{ fontSize: '12px', color: '#909399' }}>
                        {region.systems.length} 个系统 · {region.systems.reduce((acc, s) => acc + s.modules.length, 0)} 个模块
                      </div>
                    </div>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <div style={{ display: 'flex' }}>
                      {mockUsers.slice(0, 3).map((user) => (
                        <div 
                          key={user.id}
                          style={{
                            width: '32px',
                            height: '32px',
                            borderRadius: '50%',
                            backgroundColor: '#409eff',
                            border: '2px solid #fff',
                            marginLeft: '-8px',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            fontSize: '12px',
                            fontWeight: '500',
                            color: '#fff'
                          }}
                        >
                          {user.name.charAt(0)}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          <div style={{
            backgroundColor: '#fff',
            borderRadius: '8px',
            padding: '24px',
            border: '1px solid #ebeef5',
            boxShadow: '0 2px 12px 0 rgba(0, 0, 0, 0.03)'
          }}>
            <div style={{ fontSize: '14px', fontWeight: '600', color: '#303133', marginBottom: '12px' }}>
              最近浏览
            </div>
            {['用户服务', '订单服务', '支付系统'].map((item, i) => (
              <div 
                key={i}
                style={{ 
                  padding: '8px 12px',
                  fontSize: '14px',
                  color: '#606266',
                  cursor: 'pointer',
                  borderRadius: '4px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px'
                }}
              >
                <div style={{ 
                  width: '6px', 
                  height: '6px', 
                  borderRadius: '50%', 
                  backgroundColor: '#c0c4cc' 
                }} />
                {item}
              </div>
            ))}
          </div>

          <div style={{
            backgroundColor: '#fff',
            borderRadius: '8px',
            padding: '24px',
            border: '1px solid #ebeef5',
            boxShadow: '0 2px 12px 0 rgba(0, 0, 0, 0.03)'
          }}>
            <div style={{ fontSize: '14px', fontWeight: '600', color: '#303133', marginBottom: '12px' }}>
              我的收藏
            </div>
            {['电商系统', '核心业务模块'].map((item, i) => (
              <div 
                key={i}
                style={{ 
                  padding: '8px 12px',
                  fontSize: '14px',
                  color: '#606266',
                  cursor: 'pointer',
                  borderRadius: '4px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px'
                }}
              >
                <div style={{ 
                  width: '6px', 
                  height: '6px', 
                  borderRadius: '50%', 
                  backgroundColor: '#c0c4cc' 
                }} />
                {item}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
