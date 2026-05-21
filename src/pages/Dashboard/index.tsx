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
    { title: '知识总数', value: '156', change: 12 },
    { title: '今日更新', value: '8', change: 3 },
    { title: '待审核', value: '5', change: -2 },
    { title: '活跃用户', value: mockUsers.length.toString(), change: 2 },
  ];

  if (isLoading) {
    return (
      <div className="p-6">
        <div className="animate-pulse space-y-4">
          <div className="h-8 bg-gray-200 rounded w-48"></div>
          <div className="grid grid-cols-4 gap-4">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="h-32 bg-gray-200 rounded"></div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="p-6">
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-800">仪表盘</h1>
        <p className="text-gray-500 mt-2">欢迎回来，查看你的知识概览</p>
      </div>

      <div className="grid grid-cols-4 gap-4 mb-6">
        {stats.map((stat, index) => (
          <div key={index} className="bg-white rounded-lg shadow p-4">
            <div className="text-3xl font-bold text-blue-600 mb-2">{stat.value}</div>
            <div className="text-gray-600 text-sm mb-2">{stat.title}</div>
            <div className={`text-xs ${stat.change >= 0 ? 'text-green-600' : 'text-red-600'}`}>
              {stat.change >= 0 ? '+' : ''}{stat.change}%
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-3 gap-4">
        <div className="col-span-2 bg-white rounded-lg shadow p-6">
          <h2 className="text-lg font-semibold mb-4">知识域概览</h2>
          {domains.map((region) => (
            <div key={region.id} className="border rounded p-4 mb-3 hover:bg-gray-50 cursor-pointer">
              <div className="font-medium">{region.name}</div>
              <div className="text-sm text-gray-500 mt-1">
                {region.systems.length} 个系统 · {region.systems.reduce((acc, s) => acc + s.modules.length, 0)} 个模块
              </div>
            </div>
          ))}
        </div>
        <div className="space-y-4">
          <div className="bg-white rounded-lg shadow p-6">
            <h3 className="font-semibold mb-3">最近浏览</h3>
            <div className="space-y-2">
              <div className="text-sm text-gray-600">用户服务</div>
              <div className="text-sm text-gray-600">订单服务</div>
              <div className="text-sm text-gray-600">支付系统</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
