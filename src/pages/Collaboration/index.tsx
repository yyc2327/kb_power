import React, { useState, useEffect } from 'react';
import { mockUsers } from '@/mock';
import { 
  ElCard, 
  ElRow, 
  ElCol, 
  ElButton,
  ElIcon,
  ElAvatar,
  ElTag,
  ElBadge,
  ElTimeline,
  ElTimelineItem,
  ElDropdown,
  ElDropdownMenu,
  ElDropdownItem,
  ElSkeleton,
  ElEmpty
} from 'element-plus';
import { 
  Plus, 
  Bell, 
  ChatDotRound, 
  Check, 
  Document, 
  User, 
  Clock,
  ArrowRight,
  MoreFilled
} from '@element-plus/icons-vue';

const notifications = [
  { id: 1, title: '新评论', message: '张三评论了你的文档', time: '2分钟前', unread: true },
  { id: 2, title: '审核通过', message: '系统架构文档已通过审核', time: '15分钟前', unread: true },
  { id: 3, title: '提及通知', message: '李四在讨论中@了你', time: '1小时前', unread: false },
];

const activities = [
  { user: '张三', action: '更新了', target: '用户服务文档', time: '2分钟前', type: 'primary' },
  { user: '李四', action: '评论了', target: '订单系统API', time: '15分钟前', type: 'success' },
  { user: '王五', action: '审核通过', target: '支付系统架构', time: '1小时前', type: 'warning' },
  { user: '张三', action: '创建了', target: '新模块需求文档', time: '2小时前', type: 'info' },
];

const reviewQueue = [
  { title: 'API文档更新', author: '李四', status: 'pending', priority: 'high', time: '提交于 10分钟前' },
  { title: '系统架构图', author: '王五', status: 'pending', priority: 'medium', time: '提交于 1小时前' },
  { title: '数据库设计', author: '张三', status: 'approved', priority: 'low', time: '审核通过于 昨天' },
];

export const Collaboration: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [notificationVisible, setNotificationVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 400);
    return () => clearTimeout(timer);
  }, []);

  const unreadCount = notifications.filter(n => n.unread).length;

  if (isLoading) {
    return (
      <div>
        <ElRow :gutter="20">
          <ElCol :span="16">
            <ElCard shadow="hover">
              <ElSkeleton :rows="5" animated />
            </ElCard>
          </ElCol>
          <ElCol :span="8">
            <ElCard shadow="hover">
              <ElSkeleton :rows="5" animated />
            </ElCard>
          </ElCol>
        </ElRow>
      </div>
    );
  }

  return (
    <div>
      {/* 页面标题 */}
      <div style={{ marginBottom: '24px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div>
          <h1 style={{ fontSize: '24px', fontWeight: '600', color: '#303133', margin: 0 }}>
            协作空间
          </h1>
          <p style={{ fontSize: '14px', color: '#909399', marginTop: '8px' }}>
            团队协作、知识审核和讨论
          </p>
        </div>
        <div style={{ display: 'flex', gap: '12px' }}>
          <ElDropdown trigger="click" v-model:visible={notificationVisible}>
            <ElBadge value={unreadCount} :max="99">
              <ElButton>
                <ElIcon size={18}><Bell /></ElIcon>
              </ElButton>
            </ElBadge>
            <template #dropdown>
              <ElDropdownMenu style={{ width: '320px' }}>
                <div style={{ padding: '12px 16px', borderBottom: '1px solid #ebeef5' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <span style={{ fontSize: '14px', fontWeight: '600' }}>通知</span>
                    <ElButton text size="small" type="primary">全部标为已读</ElButton>
                  </div>
                </div>
                {notifications.map(notification => (
                  <div 
                    key={notification.id} 
                    style={{ 
                      padding: '12px 16px', 
                      borderBottom: '1px solid #f5f7fa',
                      cursor: 'pointer',
                      backgroundColor: notification.unread ? '#f0f9ff' : '#fff'
                    }}
                  >
                    <div style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                      {notification.unread && (
                        <div style={{ 
                          width: '8px', 
                          height: '8px', 
                          borderRadius: '50%', 
                          backgroundColor: '#409eff',
                          marginTop: '6px'
                        }} />
                      )}
                      <div style={{ flex: 1 }}>
                        <div style={{ fontSize: '14px', fontWeight: '500', color: '#303133', marginBottom: '4px' }}>
                          {notification.title}
                        </div>
                        <div style={{ fontSize: '13px', color: '#606266', marginBottom: '4px' }}>
                          {notification.message}
                        </div>
                        <div style={{ fontSize: '12px', color: '#909399' }}>
                          {notification.time}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </ElDropdownMenu>
            </template>
          </ElDropdown>
          
          <ElButton type="primary">
            <ElIcon style={{ marginRight: '4px' }}><Plus /></ElIcon>
            发起讨论
          </ElButton>
        </div>
      </div>

      <ElRow :gutter="20">
        {/* 左侧主要区域 */}
        <ElCol :span="16">
          {/* 活动动态 */}
          <ElCard shadow="hover" style={{ marginBottom: '20px' }}>
            <template #header>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span style={{ fontSize: '16px', fontWeight: '600' }}>活动动态</span>
                <ElButton text type="primary">查看全部</ElButton>
              </div>
            </template>
            
            <ElTimeline>
              {activities.map((activity, index) => (
                <ElTimelineItem
                  key={index}
                  color={`#${activity.type === 'primary' ? '409eff' : activity.type === 'success' ? '67c23a' : activity.type === 'warning' ? 'e6a23c' : '909399'}`}
                >
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                      <ElAvatar size="default" style={{ backgroundColor: '#409eff' }}>
                        {activity.user.charAt(0)}
                      </ElAvatar>
                      <div>
                        <div style={{ fontSize: '14px', color: '#303133' }}>
                          <span style={{ fontWeight: '600' }}>{activity.user}</span>
                          <span style={{ color: '#606266', marginLeft: '8px' }}>{activity.action}</span>
                          <span style={{ color: '#409eff', marginLeft: '8px' }}>{activity.target}</span>
                        </div>
                        <div style={{ fontSize: '12px', color: '#909399', marginTop: '4px' }}>
                          <ElIcon size={12} style={{ marginRight: '4px' }}><Clock /></ElIcon>
                          {activity.time}
                        </div>
                      </div>
                    </div>
                    <ElButton text size="small">
                      <ElIcon size={16} color="#c0c4cc"><ArrowRight /></ElIcon>
                    </ElButton>
                  </div>
                </ElTimelineItem>
              ))}
            </ElTimeline>
          </ElCard>

          {/* 审核队列 */}
          <ElCard shadow="hover">
            <template #header>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <span style={{ fontSize: '16px', fontWeight: '600' }}>审核队列</span>
                  <ElTag size="small" type="warning">
                    {reviewQueue.filter(r => r.status === 'pending').length} 待审核
                  </ElTag>
                </div>
              </div>
            </template>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              {reviewQueue.map((item, index) => (
                <div 
                  key={index}
                  style={{ 
                    padding: '16px', 
                    border: '1px solid #ebeef5', 
                    borderRadius: '8px',
                    cursor: 'pointer',
                    transition: 'all 0.3s',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between'
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                    <div style={{
                      width: '40px',
                      height: '40px',
                      borderRadius: '8px',
                      backgroundColor: item.status === 'approved' ? '#67c23a15' : '#e6a23c15',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center'
                    }}>
                      <ElIcon size={20} color={item.status === 'approved' ? '#67c23a' : '#e6a23c'}>
                        <Document />
                      </ElIcon>
                    </div>
                    <div>
                      <div style={{ fontSize: '14px', fontWeight: '500', color: '#303133', marginBottom: '4px' }}>
                        {item.title}
                      </div>
                      <div style={{ fontSize: '12px', color: '#909399' }}>
                        提交者：{item.author} · {item.time}
                      </div>
                    </div>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <ElTag size="small" type={item.priority === 'high' ? 'danger' : item.priority === 'medium' ? 'warning' : 'info'}>
                      {item.priority === 'high' ? '高优先' : item.priority === 'medium' ? '中优先' : '低优先'}
                    </ElTag>
                    <ElTag size="small" type={item.status === 'approved' ? 'success' : 'warning'}>
                      {item.status === 'approved' ? '已通过' : '待审核'}
                    </ElTag>
                  </div>
                </div>
              ))}
            </div>
          </ElCard>
        </ElCol>

        {/* 右侧统计 */}
        <ElCol :span="8">
          {/* 团队成员 */}
          <ElCard shadow="hover" style={{ marginBottom: '20px' }}>
            <template #header>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span style={{ fontSize: '16px', fontWeight: '600' }}>团队成员</span>
                <ElButton text type="primary" size="small">邀请</ElButton>
              </div>
            </template>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              {mockUsers.map((user) => (
                <div 
                  key={user.id}
                  style={{ 
                    padding: '12px', 
                    borderRadius: '8px',
                    cursor: 'pointer',
                    transition: 'all 0.3s',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between'
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                    <div style={{ position: 'relative' }}>
                      <ElAvatar size="default" style={{ backgroundColor: '#409eff' }}>
                        {user.name.charAt(0)}
                      </ElAvatar>
                      <div style={{
                        position: 'absolute',
                        bottom: '-2px',
                        right: '-2px',
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
                </div>
              ))}
            </div>
          </ElCard>

          {/* 今日统计 */}
          <ElCard shadow="hover">
            <template #header>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <span style={{ fontSize: '16px', fontWeight: '600' }}>今日统计</span>
              </div>
            </template>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <div style={{
                    width: '32px',
                    height: '32px',
                    borderRadius: '8px',
                    backgroundColor: '#409eff15',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}>
                    <ElIcon size={16} color="#409eff"><Document /></ElIcon>
                  </div>
                  <span style={{ fontSize: '14px', color: '#606266' }}>新增文档</span>
                </div>
                <span style={{ fontSize: '18px', fontWeight: '600', color: '#303133' }}>8</span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <div style={{
                    width: '32px',
                    height: '32px',
                    borderRadius: '8px',
                    backgroundColor: '#67c23a15',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}>
                    <ElIcon size={16} color="#67c23a"><Check /></ElIcon>
                  </div>
                  <span style={{ fontSize: '14px', color: '#606266' }}>审核完成</span>
                </div>
                <span style={{ fontSize: '18px', fontWeight: '600', color: '#303133' }}>5</span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <div style={{
                    width: '32px',
                    height: '32px',
                    borderRadius: '8px',
                    backgroundColor: '#9c27b015',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}>
                    <ElIcon size={16} color="#9c27b0"><ChatDotRound /></ElIcon>
                  </div>
                  <span style={{ fontSize: '14px', color: '#606266' }}>评论数</span>
                </div>
                <span style={{ fontSize: '18px', fontWeight: '600', color: '#303133' }}>23</span>
              </div>
            </div>
          </ElCard>
        </ElCol>
      </ElRow>
    </div>
  );
};
