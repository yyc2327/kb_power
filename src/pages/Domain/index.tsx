import React, { useEffect, useState } from 'react';
import { useKnowledgeStore } from '@/stores';
import { mockRegions } from '@/mock';
import { 
  ElCard, 
  ElRow, 
  ElCol, 
  ElInput,
  ElButton,
  ElTree,
  ElTag,
  ElIcon,
  ElEmpty,
  ElDescriptions,
  ElDescriptionsItem,
  ElLink,
  ElSkeleton,
  ElAvatar
} from 'element-plus';
import { Search, Plus, RefreshRight, FolderOpened, Box, Monitor, Document, Link as LinkIcon } from '@element-plus/icons-vue';

export const Domain: React.FC = () => {
  const { domains, setDomains } = useKnowledgeStore();
  const [expandedKeys, setExpandedKeys] = useState<string[]>([]);
  const [selectedApp, setSelectedApp] = useState<any>(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (domains.length === 0) {
        setDomains(mockRegions);
        setExpandedKeys(mockRegions.map(r => r.id));
      } else {
        setExpandedKeys(domains.map(r => r.id));
      }
      setIsLoading(false);
    }, 300);
    return () => clearTimeout(timer);
  }, [domains.length, setDomains]);

  const getTreeIcon = (data: any) => {
    if (data.systems) return <FolderOpened />;
    if (data.modules) return <Box />;
    if (data.applications) return <Monitor />;
    return <Document />;
  };

  const treeData = domains.map(region => ({
    ...region,
    label: region.name,
    children: region.systems?.map(system => ({
      ...system,
      label: system.name,
      children: system.modules?.map(module => ({
        ...module,
        label: module.name,
        children: module.applications?.map(app => ({
          ...app,
          label: app.name
        }))
      }))
    }))
  }));

  const handleNodeClick = (data: any) => {
    if (data.applications) return;
    setSelectedApp(data);
  };

  const filterNode = (value: string, data: any) => {
    if (!value) return true;
    return data.label && data.label.toLowerCase().includes(value.toLowerCase());
  };

  if (isLoading) {
    return (
      <div>
        <ElRow :gutter="20">
          <ElCol :span="8">
            <ElCard shadow="hover">
              <ElSkeleton :rows="8" animated />
            </ElCard>
          </ElCol>
          <ElCol :span="16">
            <ElCard shadow="hover">
              <ElSkeleton :rows="10" animated />
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
            知识域管理
          </h1>
          <p style={{ fontSize: '14px', color: '#909399', marginTop: '8px' }}>
            管理地域、系统、模块和应用的层级结构
          </p>
        </div>
        <div style={{ display: 'flex', gap: '12px' }}>
          <ElButton type="primary">
            <ElIcon style={{ marginRight: '4px' }}><Plus /></ElIcon>
            新建知识域
          </ElButton>
        </div>
      </div>

      {/* 内容区域 */}
      <ElRow :gutter="20">
        {/* 左侧树形结构 */}
        <ElCol :span="8">
          <ElCard shadow="hover">
            <template #header>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span style={{ fontSize: '14px', fontWeight: '600' }}>知识域树</span>
                <ElButton text size="small">
                  <ElIcon><RefreshRight /></ElIcon>
                </ElButton>
              </div>
            </template>
            
            <div style={{ marginBottom: '16px' }}>
              <ElInput
                modelValue={searchTerm}
                onInput={(e: any) => setSearchTerm(e.target.value)}
                placeholder="搜索知识域..."
                prefix-icon={<Search />}
                clearable
              />
            </div>

            <div style={{ height: 'calc(100vh - 400px)', overflow: 'auto' }}>
              <ElTree
                data={treeData}
                props={{ children: 'children', label: 'label' }}
                expandOnClickNode={false}
                defaultExpandedKeys={expandedKeys}
                filterNodeMethod={filterNode}
                @node-click={handleNodeClick}
                highlight-current
              >
                <template #default="{ node, data }">
                  <span style={{ display: 'flex', align-items: center; gap: 8px; }}>
                    <ElIcon size={16}>{getTreeIcon(data)}</ElIcon>
                    <span>{node.label}</span>
                    {data.applications && (
                      <ElTag size="small" type="success">已发布</ElTag>
                    )}
                  </span>
                </template>
              </ElTree>
            </div>
          </ElCard>
        </ElCol>

        {/* 右侧详情 */}
        <ElCol :span="16">
          <ElCard shadow="hover" style={{ height: '100%' }}>
            {selectedApp ? (
              <>
                <template #header>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                    <div style={{
                      width: '48px',
                      height: '48px',
                      borderRadius: '8px',
                      backgroundColor: '#67c23a15',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center'
                    }}>
                      <ElIcon size={24} color="#67c23a"><Document /></ElIcon>
                    </div>
                    <div>
                      <div style={{ fontSize: '18px', fontWeight: '600', color: '#303133' }}>
                        {selectedApp.name}
                      </div>
                      <div style={{ fontSize: '12px', color: '#909399', marginTop: '4px' }}>
                        {selectedApp.code}
                      </div>
                    </div>
                  </div>
                </template>

                <div style={{ marginBottom: '20px', fontSize: '14px', color: '#606266' }}>
                  {selectedApp.description}
                </div>

                {/* 技术栈 */}
                <div style={{ marginBottom: '24px' }}>
                  <div style={{ fontSize: '14px', fontWeight: '600', color: '#303133', marginBottom: '12px' }}>
                    技术栈
                  </div>
                  <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
                    {selectedApp.techStack?.map((tech: string, index: number) => (
                      <ElTag key={index} size="default">{tech}</ElTag>
                    ))}
                  </div>
                </div>

                {/* 负责人 */}
                <div style={{ marginBottom: '24px' }}>
                  <div style={{ fontSize: '14px', fontWeight: '600', color: '#303133', marginBottom: '12px' }}>
                    负责人
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                    <ElAvatar size="large" style={{ backgroundColor: '#409eff' }}>
                      张
                    </ElAvatar>
                    <div>
                      <div style={{ fontSize: '14px', fontWeight: '500', color: '#303133' }}>
                        张三
                      </div>
                      <div style={{ fontSize: '12px', color: '#909399' }}>
                        技术专家
                      </div>
                    </div>
                  </div>
                </div>

                {/* 代码仓库 */}
                <div style={{ marginBottom: '24px' }}>
                  <div style={{ fontSize: '14px', fontWeight: '600', color: '#303133', marginBottom: '12px' }}>
                    代码仓库
                  </div>
                  <ElLink type="primary" href={selectedApp.repository} target="_blank">
                    <ElIcon style={{ marginRight: '4px' }}><LinkIcon /></ElIcon>
                    {selectedApp.repository}
                  </ElLink>
                </div>

                {/* 关联知识 */}
                {selectedApp.knowledge && (
                  <div>
                    <div style={{ fontSize: '14px', fontWeight: '600', color: '#303133', marginBottom: '12px' }}>
                      关联知识
                    </div>
                    <div style={{ 
                      padding: '16px', 
                      border: '1px solid #ebeef5', 
                      borderRadius: '8px',
                      backgroundColor: '#fafafa'
                    }}>
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px' }}>
                        <div style={{ fontSize: '14px', fontWeight: '600', color: '#303133' }}>
                          {selectedApp.knowledge.title}
                        </div>
                        <div style={{ display: 'flex', gap: '8px' }}>
                          <ElTag size="small" type={selectedApp.knowledge.status === 'published' ? 'success' : 'warning'}>
                            {selectedApp.knowledge.status === 'published' ? '已发布' : '草稿'}
                          </ElTag>
                          <ElTag size="small">v{selectedApp.knowledge.version}</ElTag>
                        </div>
                      </div>
                      <div style={{ fontSize: '14px', color: '#606266' }}>
                        {selectedApp.knowledge.content}
                      </div>
                    </div>
                  </div>
                )}
              </>
            ) : (
              <ElEmpty description="请从左侧选择一个应用查看详情" />
            )}
          </ElCard>
        </ElCol>
      </ElRow>
    </div>
  );
};
