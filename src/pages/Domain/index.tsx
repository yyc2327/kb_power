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
    <div className="p-6">
      <div className="mb-6 flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold text-gray-800">知识域管理</h1>
          <p className="text-gray-500 mt-2">管理地域、系统、模块和应用的层级结构</p>
        </div>
        <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
          新建知识域
        </button>
      </div>

      <div className="grid grid-cols-3 gap-4">
        <div className="col-span-1 bg-white rounded-lg shadow p-6">
          <h2 className="font-semibold mb-4">知识域树</h2>
          {domains.map((region) => (
            <div key={region.id} className="mb-4">
              <div className="font-medium text-blue-600 mb-2">{region.name}</div>
              {region.systems.map((system) => (
                <div key={system.id} className="ml-4 mb-2">
                  <div className="text-sm text-purple-600 mb-1">{system.name}</div>
                  {system.modules.map((module) => (
                    <div key={module.id} className="ml-4 mb-1">
                      <div 
                        className="text-sm text-gray-600 hover:text-blue-600 cursor-pointer"
                        onClick={() => setSelectedApp(module)}
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

        <div className="col-span-2 bg-white rounded-lg shadow p-6">
          {selectedApp ? (
            <div>
              <h2 className="text-xl font-semibold mb-4">{selectedApp.name}</h2>
              <p className="text-gray-600 mb-6">{selectedApp.description || '暂无描述'}</p>
              
              <div className="space-y-4">
                <div>
                  <h3 className="font-medium text-gray-700 mb-2">应用列表</h3>
                  {selectedApp.applications?.map((app: any) => (
                    <div key={app.id} className="border rounded p-3 mb-2 hover:bg-gray-50">
                      <div className="font-medium">{app.name}</div>
                      <div className="text-sm text-gray-500">{app.code}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ) : (
            <div className="text-center text-gray-500 py-20">
              请从左侧选择一个应用查看详情
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
