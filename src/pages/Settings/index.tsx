import React, { useState, useEffect } from 'react';
import { 
  ElCard,
  ElButton,
  ElInput,
  ElSwitch,
  ElRadioGroup,
  ElRadio,
  ElIcon,
  ElSkeleton,
  ElMessage,
  ElDivider
} from 'element-plus';
import { 
  User, 
  Bell, 
  Lock, 
  Connection, 
  Edit, 
  Check,
  ArrowRight
} from '@element-plus/icons-vue';

export const Settings: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [emailNotifications, setEmailNotifications] = useState(true);
  const [pushNotifications, setPushNotifications] = useState(true);
  const [reviewAlerts, setReviewAlerts] = useState(true);
  const [mentionAlerts, setMentionAlerts] = useState(true);
  const [theme, setTheme] = useState('light');
  const [accentColor, setAccentColor] = useState('blue');

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 300);
    return () => clearTimeout(timer);
  }, []);

  const handleSave = () => {
    ElMessage.success('保存成功');
  };

  if (isLoading) {
    return (
      <div>
        <ElCard shadow="hover">
          <ElSkeleton :rows="10" animated />
        </ElCard>
      </div>
    );
  }

  return (
    <div>
      {/* 页面标题 */}
      <div style={{ marginBottom: '24px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div>
          <h1 style={{ fontSize: '24px', fontWeight: '600', color: '#303133', margin: 0 }}>
            系统设置
          </h1>
          <p style={{ fontSize: '14px', color: '#909399', marginTop: '8px' }}>
            管理你的账户和系统偏好设置
          </p>
        </div>
        <ElButton type="primary" onClick={handleSave}>
          <ElIcon style={{ marginRight: '4px' }}><Check /></ElIcon>
          保存更改
        </ElButton>
      </div>

      {/* 个人信息 */}
      <ElCard shadow="hover" style={{ marginBottom: '20px' }}>
        <template #header>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <ElIcon size={20} color="#409eff"><User /></ElIcon>
            <span style={{ fontSize: '16px', fontWeight: '600' }}>个人信息</span>
          </div>
        </template>
        
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '16px' }}>
            <div>
              <label style={{ display: 'block', fontSize: '14px', color: '#606266', marginBottom: '8px' }}>
                用户名
              </label>
              <ElInput defaultValue="管理员" />
            </div>
            <div>
              <label style={{ display: 'block', fontSize: '14px', color: '#606266', marginBottom: '8px' }}>
                邮箱
              </label>
              <ElInput defaultValue="admin@example.com" type="email" />
            </div>
          </div>
          <div>
            <label style={{ display: 'block', fontSize: '14px', color: '#606266', marginBottom: '8px' }}>
              个人简介
            </label>
            <ElInput
              type="textarea"
              :rows="3"
              placeholder="介绍一下自己..."
            />
          </div>
        </div>
      </ElCard>

      {/* 通知设置 */}
      <ElCard shadow="hover" style={{ marginBottom: '20px' }}>
        <template #header>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <ElIcon size={20} color="#409eff"><Bell /></ElIcon>
            <span style={{ fontSize: '16px', fontWeight: '600' }}>通知设置</span>
          </div>
        </template>
        
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '12px 0', borderBottom: '1px solid #ebeef5' }}>
            <div>
              <div style={{ fontSize: '14px', fontWeight: '500', color: '#303133' }}>邮件通知</div>
              <div style={{ fontSize: '12px', color: '#909399', marginTop: '4px' }}>接收重要更新的邮件通知</div>
            </div>
            <ElSwitch v-model={emailNotifications} />
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '12px 0', borderBottom: '1px solid #ebeef5' }}>
            <div>
              <div style={{ fontSize: '14px', fontWeight: '500', color: '#303133' }}>推送通知</div>
              <div style={{ fontSize: '12px', color: '#909399', marginTop: '4px' }}>浏览器推送通知</div>
            </div>
            <ElSwitch v-model={pushNotifications} />
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '12px 0', borderBottom: '1px solid #ebeef5' }}>
            <div>
              <div style={{ fontSize: '14px', fontWeight: '500', color: '#303133' }}>审核提醒</div>
              <div style={{ fontSize: '12px', color: '#909399', marginTop: '4px' }}>有待审核内容时提醒</div>
            </div>
            <ElSwitch v-model={reviewAlerts} />
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '12px 0' }}>
            <div>
              <div style={{ fontSize: '14px', fontWeight: '500', color: '#303133' }}>@提及通知</div>
              <div style={{ fontSize: '12px', color: '#909399', marginTop: '4px' }}>被@时收到通知</div>
            </div>
            <ElSwitch v-model={mentionAlerts} />
          </div>
        </div>
      </ElCard>

      {/* 外观设置 */}
      <ElCard shadow="hover" style={{ marginBottom: '20px' }}>
        <template #header>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <ElIcon size={20} color="#409eff"><Connection /></ElIcon>
            <span style={{ fontSize: '16px', fontWeight: '600' }}>外观设置</span>
          </div>
        </template>
        
        <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
          <div>
            <label style={{ display: 'block', fontSize: '14px', color: '#606266', marginBottom: '12px' }}>
              主题模式
            </label>
            <ElRadioGroup v-model={theme}>
              <ElRadio value="light">浅色</ElRadio>
              <ElRadio value="dark">深色</ElRadio>
              <ElRadio value="system">跟随系统</ElRadio>
            </ElRadioGroup>
          </div>
          
          <div>
            <label style={{ display: 'block', fontSize: '14px', color: '#606266', marginBottom: '12px' }}>
              强调色
            </label>
            <div style={{ display: 'flex', gap: '12px' }}>
              {[
                { name: '蓝色', color: '#409eff', value: 'blue' },
                { name: '绿色', color: '#67c23a', value: 'green' },
                { name: '紫色', color: '#9c27b0', value: 'purple' },
                { name: '橙色', color: '#e6a23c', value: 'orange' },
                { name: '红色', color: '#f56c6a', value: 'red' },
              ].map((item) => (
                <div
                  key={item.value}
                  onClick={() => setAccentColor(item.value)}
                  style={{
                    width: '40px',
                    height: '40px',
                    borderRadius: '50%',
                    backgroundColor: item.color,
                    cursor: 'pointer',
                    border: accentColor === item.value ? '3px solid #303133' : '3px solid transparent',
                    transition: 'all 0.3s'
                  }}
                  title={item.name}
                />
              ))}
            </div>
          </div>
        </div>
      </ElCard>

      {/* 安全设置 */}
      <ElCard shadow="hover" style={{ marginBottom: '20px' }}>
        <template #header>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <ElIcon size={20} color="#409eff"><Lock /></ElIcon>
            <span style={{ fontSize: '16px', fontWeight: '600' }}>安全设置</span>
          </div>
        </template>
        
        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
          {[
            { title: '修改密码', desc: '更新你的登录密码' },
            { title: '两步验证', desc: '增强账户安全性' },
            { title: '登录历史', desc: '查看账户的登录记录' },
          ].map((item, index) => (
            <div
              key={index}
              style={{
                padding: '16px',
                border: '1px solid #ebeef5',
                borderRadius: '8px',
                cursor: 'pointer',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                transition: 'all 0.3s'
              }}
            >
              <div>
                <div style={{ fontSize: '14px', fontWeight: '500', color: '#303133', marginBottom: '4px' }}>
                  {item.title}
                </div>
                <div style={{ fontSize: '12px', color: '#909399' }}>
                  {item.desc}
                </div>
              </div>
              <ElIcon size={20} color="#c0c4cc"><ArrowRight /></ElIcon>
            </div>
          ))}
        </div>
      </ElCard>

      {/* 数据管理 */}
      <ElCard shadow="hover">
        <template #header>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <ElIcon size={20} color="#409eff"><Edit /></ElIcon>
            <span style={{ fontSize: '16px', fontWeight: '600' }}>数据管理</span>
          </div>
        </template>
        
        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
          <div
            style={{
              padding: '16px',
              border: '1px solid #ebeef5',
              borderRadius: '8px',
              cursor: 'pointer',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              transition: 'all 0.3s'
            }}
          >
            <div>
              <div style={{ fontSize: '14px', fontWeight: '500', color: '#303133', marginBottom: '4px' }}>
                导出数据
              </div>
              <div style={{ fontSize: '12px', color: '#909399' }}>
                导出所有你的数据
              </div>
            </div>
            <ElIcon size={20} color="#c0c4cc"><ArrowRight /></ElIcon>
          </div>
          <div
            style={{
              padding: '16px',
              border: '1px solid #f56c6a30',
              borderRadius: '8px',
              cursor: 'pointer',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              backgroundColor: '#fef0f0',
              transition: 'all 0.3s'
            }}
          >
            <div>
              <div style={{ fontSize: '14px', fontWeight: '500', color: '#f56c6a', marginBottom: '4px' }}>
                删除账户
              </div>
              <div style={{ fontSize: '12px', color: '#f56c6a80' }}>
                永久删除你的账户和所有数据
              </div>
            </div>
          </div>
        </div>
      </ElCard>
    </div>
  );
};
