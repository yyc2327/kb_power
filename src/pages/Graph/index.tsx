import React from 'react';
import { Link } from 'react-router-dom';

const graphTypes = [
  {
    id: 'code',
    title: '代码图谱',
    description: '展示函数调用关系、模块依赖和代码结构',
    color: '#409eff'
  },
  {
    id: 'interface',
    title: '接口图谱',
    description: '可视化上下游系统关系和数据流向',
    color: '#9c27b0'
  },
  {
    id: 'test',
    title: '测试图谱',
    description: '关联需求、代码、测试用例和缺陷',
    color: '#67c23a'
  },
  {
    id: 'ops',
    title: '运维图谱',
    description: '展示告警、日志、链路和故障根因关系',
    color: '#e6a23c'
  },
];

export const Graph: React.FC = () => {
  return (
    <div style={{ padding: '24px', maxWidth: '1400px' }}>
      <div style={{ marginBottom: '24px' }}>
        <h1 style={{ fontSize: '24px', fontWeight: '600', color: '#303133', margin: 0 }}>
          知识图谱中心
        </h1>
        <p style={{ fontSize: '14px', color: '#909399', marginTop: '8px' }}>
          探索和可视化各类知识图谱
        </p>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '16px', marginBottom: '24px' }}>
        {graphTypes.map((type) => (
          <Link
            key={type.id}
            to={`/graph/${type.id}`}
            style={{ textDecoration: 'none' }}
          >
            <div style={{
              backgroundColor: '#fff',
              borderRadius: '8px',
              padding: '24px',
              border: '1px solid #ebeef5',
              boxShadow: '0 2px 12px 0 rgba(0, 0, 0, 0.03)',
              cursor: 'pointer',
              transition: 'all 0.3s',
              height: '100%'
            }}>
              <div style={{
                width: '48px',
                height: '48px',
                borderRadius: '12px',
                backgroundColor: `${type.color}15`,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '16px',
                fontSize: '24px'
              }}>
                📊
              </div>
              <h3 style={{
                fontSize: '16px',
                fontWeight: '600',
                color: '#303133',
                marginBottom: '8px'
              }}>
                {type.title}
              </h3>
              <p style={{
                fontSize: '14px',
                color: '#909399',
                lineHeight: '1.5'
              }}>
                {type.description}
              </p>
            </div>
          </Link>
        ))}
      </div>

      <div style={{
        backgroundColor: '#fff',
        borderRadius: '8px',
        padding: '24px',
        border: '1px solid #ebeef5',
        boxShadow: '0 2px 12px 0 rgba(0, 0, 0, 0.03)'
      }}>
        <h2 style={{ fontSize: '16px', fontWeight: '600', color: '#303133', marginBottom: '16px' }}>
          图谱统计
        </h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '24px' }}>
          <div style={{ textAlign: 'center' }}>
            <p style={{ fontSize: '32px', fontWeight: '600', color: '#409eff' }}>1,234</p>
            <p style={{ fontSize: '14px', color: '#909399', marginTop: '8px' }}>节点总数</p>
          </div>
          <div style={{ textAlign: 'center' }}>
            <p style={{ fontSize: '32px', fontWeight: '600', color: '#67c23a' }}>3,567</p>
            <p style={{ fontSize: '14px', color: '#909399', marginTop: '8px' }}>关系边数</p>
          </div>
          <div style={{ textAlign: 'center' }}>
            <p style={{ fontSize: '32px', fontWeight: '600', color: '#9c27b0' }}>89</p>
            <p style={{ fontSize: '14px', color: '#909399', marginTop: '8px' }}>图谱数量</p>
          </div>
          <div style={{ textAlign: 'center' }}>
            <p style={{ fontSize: '32px', fontWeight: '600', color: '#e6a23c' }}>24</p>
            <p style={{ fontSize: '14px', color: '#909399', marginTop: '8px' }}>今日更新</p>
          </div>
        </div>
      </div>
    </div>
  );
};
