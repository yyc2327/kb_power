import React from 'react';
import { mockUsers } from '@/mock';

const activities = [
  { user: '张三', action: '更新了', target: '用户服务文档', time: '2分钟前' },
  { user: '李四', action: '评论了', target: '订单系统API', time: '15分钟前' },
  { user: '王五', action: '审核通过', target: '支付系统架构', time: '1小时前' },
];

export const Collaboration: React.FC = () => {
  return (
    <div className="p-6">
      <div className="mb-6 flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold text-gray-800">协作空间</h1>
          <p className="text-gray-500 mt-2">团队协作、知识审核和讨论</p>
        </div>
        <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
          发起讨论
        </button>
      </div>

      <div className="grid grid-cols-3 gap-4">
        <div className="col-span-2 space-y-4">
          <div className="bg-white rounded-lg shadow p-6">
            <h2 className="font-semibold mb-4">活动动态</h2>
            {activities.map((activity, index) => (
              <div key={index} className="flex items-center gap-3 py-3 border-b last:border-0">
                <div className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center text-white font-medium">
                  {activity.user.charAt(0)}
                </div>
                <div className="flex-1">
                  <div className="text-sm">
                    <span className="font-medium">{activity.user}</span>
                    <span className="text-gray-600 ml-2">{activity.action}</span>
                    <span className="text-blue-600 ml-2">{activity.target}</span>
                  </div>
                  <div className="text-xs text-gray-400 mt-1">{activity.time}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="space-y-4">
          <div className="bg-white rounded-lg shadow p-6">
            <h2 className="font-semibold mb-4">团队成员</h2>
            {mockUsers.map((user) => (
              <div key={user.id} className="flex items-center gap-3 py-2">
                <div className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center text-white font-medium">
                  {user.name.charAt(0)}
                </div>
                <div>
                  <div className="text-sm font-medium">{user.name}</div>
                  <div className="text-xs text-gray-500">
                    {user.role === 'admin' ? '管理员' : user.role === 'expert' ? '专家' : '开发者'}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
