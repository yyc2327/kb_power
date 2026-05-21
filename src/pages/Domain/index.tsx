import React, { useEffect, useState } from 'react';
import { useKnowledgeStore } from '@/stores';
import { mockRegions } from '@/mock';

export const Domain: React.FC = () => {
  const { domains, setDomains } = useKnowledgeStore();
  const [selectedApp, setSelectedApp] = useState<any>(null);

  useEffect(() => {
    if (domains.length === 0) {
      setDomains(mockRegions);
    }
  }, [domains.length, setDomains]);

  return (
    <div style={{ padding: '24px', maxWidth: '1400px' }}>
      <div style={{ marginBottom: '24px', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
        <div>
          <h1 style={{ fontSize: '24px', fontWeight: '600', color: '#303133', margin: 0 }}>
            知识域管理
          </h1>
          <p style={{ fontSize: '14px', color: '#909399', marginTop: '8px' }}>
            管理地域、系统、模块和应用的层级结构
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
          新建知识域
        </button>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '16px', minHeight: 'calc(100vh - 200px)' }}>
        <div style={{
          backgroundColor: '#fff',
          borderRadius: '8px',
          padding: '24px',
          border: '1px solid #ebeef5',
          boxShadow: '0 2px 12px 0 rgba(0, 0, 0, 0.03)'
        }}>
          <h2 style={{ fontSize: '16px', fontWeight: '600', color: '#303133', margin: '0 0 16px 0' }}>
            知识域树
          </h2>
          
          {domains.map((region) => (
            <div key={region.id} style={{ marginBottom: '16px' }}>
              <div style={{
                fontSize: '14px',
                fontWeight: '600',
                color: '#409eff',
                marginBottom: '8px',
                padding: '8px',
                backgroundColor: '#ecf5ff',
                borderRadius: '4px'
              }}>
                {region.name}
              </div>
              {region.systems.map((system) => (
                <div key={system.id} style={{ marginLeft: '16px', marginBottom: '8px' }}>
                  <div style={{
                    fontSize: '13px',
                    fontWeight: '500',
                    color: '#9c27b0',
                    marginBottom: '4px',
                    padding: '6px 8px'
                  }}>
                    {system.name}
                  </div>
                  {system.modules.map((module) => (
                    <div key={module.id} style={{ marginLeft: '16px', marginBottom: '4px' }}>
                      <div 
                        onClick={() => setSelectedApp(module)}
                        style={{
                          fontSize: '13px',
                          color: '#606266',
                          padding: '6px 8px',
                          cursor: 'pointer',
                          borderRadius: '4px',
                          backgroundColor: selectedApp?.id === module.id ? '#f5f7fa' : 'transparent'
                        }}
                      >
                        {module.name}
                      </div>
                    </div>
                  ))}
                </div>
              ))}
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
          {selectedApp ? (
            <div>
              <h2 style={{ fontSize: '20px', fontWeight: '600', color: '#303133', marginBottom: '16px' }}>
                {selectedApp.name}
              </h2>
              <p style={{ fontSize: '14px', color: '#606266', marginBottom: '24px' }}>
                {selectedApp.description || '暂无描述'}
              </p>
              
              <div style={{ marginBottom: '24px' }}>
                <h3 style={{ fontSize: '14px', fontWeight: '600', color: '#303133', marginBottom: '12px' }}>
                  应用列表
                </h3>
                {selectedApp.applications?.map((app: any) => (
                  <div 
                    key={app.id} 
                    style={{
                      border: '1px solid #ebeef5',
                      borderRadius: '8px',
                      padding: '12px',
                      marginBottom: '8px'
                    }}
                  >
                    <div style={{ fontSize: '14px', fontWeight: '500', color: '#303133', marginBottom: '4px' }}>
                      {app.name}
                    </div>
                    <div style={{ fontSize: '12px', color: '#909399' }}>
                      {app.code}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ) : (
            <div style={{
              textAlign: 'center',
              color: '#909399',
              padding: '80px 20px',
              fontSize: '14px'
            }}>
              请从左侧选择一个应用查看详情
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
