import React, { useEffect, useState } from 'react';
import { useKnowledgeStore } from '@/stores';
import { mockRegions, mockUsers } from '@/mock';
import { 
  ElCard, 
  ElRow, 
  ElCol, 
  ElIcon, 
  ElButton,
  ElAvatar,
  ElProgress,
  ElSkeleton,
  ElEmpty
} from 'element-plus';
import { 
  Document, 
  Files, 
  Warning, 
  User, 
  Clock, 
  Star, 
  Checklist,
  ArrowRight
} from '@element-plus/icons-vue';

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
      icon: Document,
      change: 12,
      color: '#409eff'
    },
    { 
      title: '今日更新', 
      value: '8', 
      icon: Files,
      change: 3,
      color: '#67c23a'
    },
    { 
      title: '待审核', 
      value: '5', 
      icon: Warning,
      change: -2,
      color: '#e6a23c'
    },
    { 
      title: '活跃用户', 
      value: mockUsers.length.toString(), 
      icon: User,
      change: 2,
      color: '#9c27b0'
    },
  ];

  const quickLinks = [
    { title: '最近浏览', icon: Clock, items: ['用户服务', '订单服务', '支付系统'] },
    { title: '我的收藏', icon: Star, items: ['电商系统', '核心业务模块'] },
    { title: '待办审核', icon: Checklist, items: ['API文档更新', '系统架构图'] },
  ];

  if (isLoading) {
    return (
      <div>
        <ElRow :gutter="20" className="mb-4">
          {[1, 2, 3, 4].map((i) => (
            <ElCol :span="6" :key="i">
              <ElCard shadow="hover">
                <ElSkeleton :rows="3" animated />
              </ElCard>
            </ElCol>
          ))}
        </ElRow>
      </div>
    );
  }

  return (
    <div>
      {/* 页面标题 */}
      <div style={{ marginBottom: '24px' }}>
        <h1 style={{ fontSize: '24px', fontWeight: '600', color: '#303133', margin: 0 }}>
          仪表盘
        </h1>
        <p style={{ fontSize: '14px', color: '#909399', marginTop: '8px' }}>
          欢迎回来，查看你的知识概览
        </p>
      </div>

      {/* 统计卡片 */}
      <ElRow :gutter="20" style={{ marginBottom: '24px' }}>
        {stats.map((stat, index) => (
          <ElCol :span="6" :key={index}>
            <ElCard shadow="hover" style={{ cursor: 'pointer' }}>
              <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between' }}>
                <div>
                  <div style={{ 
                    width: '48px', 
                    height: '48px', 
                    borderRadius: '8px', 
                    backgroundColor: `${stat.color}15`,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginBottom: '16px'
                  }}>
                    <ElIcon size={24} color={stat.color}>
                      <component :is="stat.icon" />
                    </ElIcon>
                  </div>
                  <div style={{ fontSize: '28px', fontWeight: '600', color: '#303133', marginBottom: '4px' }}>
                    {stat.value}
                  </div>
                  <div style={{ fontSize: '14px', color: '#909399' }}>
                    {stat.title}
                  </div>
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
            </ElCard>
          </ElCol>
        ))}
      </ElRow>

      {/* 知识域概览和快捷入口 */}
      <ElRow :gutter="20">
        {/* 知识域概览 */}
        <ElCol :span="16">
          <ElCard>
            <template #header>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span style={{ fontSize: '16px', fontWeight: '600' }}>知识域概览</span>
                <ElButton text type="primary">查看全部</ElButton>
              </div>
            </template>
            
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
                        backgroundColor: '#409eff15',
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
                      <ElAvatarGroup size="small">
                        {mockUsers.slice(0, 3).map((user) => (
                          <ElAvatar 
                            :key="user.id"
                            style={{ backgroundColor: '#409eff' }}
                          >
                            {user.name.charAt(0)}
                          </ElAvatar>
                        ))}
                      </ElAvatarGroup>
                      <ElIcon size={20} color="#c0c4cc"><ArrowRight /></ElIcon>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </ElCard>
        </ElCol>

        {/* 快捷入口 */}
        <ElCol :span="8">
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            {quickLinks.map((section, index) => (
              <ElCard :key={index}>
                <template #header>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <ElIcon size={20} color="#409eff">
                      <component :is="section.icon" />
                    </ElIcon>
                    <span style={{ fontSize: '14px', fontWeight: '600' }}>{section.title}</span>
                  </div>
                </template>
                
                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  {section.items.map((item, i) => (
                    <div 
                      key={i}
                      style={{ 
                        padding: '8px 12px',
                        fontSize: '14px',
                        color: '#606266',
                        cursor: 'pointer',
                        borderRadius: '4px',
                        transition: 'all 0.3s',
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
              </ElCard>
            ))}
          </div>
        </ElCol>
      </ElRow>
    </div>
  );
};
