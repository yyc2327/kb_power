import React from 'react';
import { Link } from 'react-router-dom';
import { Network, Code, Share2, FileText, Activity } from 'lucide-react';

const graphTypes = [
  {
    id: 'code',
    title: '代码图谱',
    description: '展示函数调用关系、模块依赖和代码结构',
    icon: <Code className="w-8 h-8" />,
    color: 'text-blue-600',
    bg: 'bg-blue-50',
  },
  {
    id: 'interface',
    title: '接口图谱',
    description: '可视化上下游系统关系和数据流向',
    icon: <Share2 className="w-8 h-8" />,
    color: 'text-purple-600',
    bg: 'bg-purple-50',
  },
  {
    id: 'test',
    title: '测试图谱',
    description: '关联需求、代码、测试用例和缺陷',
    icon: <FileText className="w-8 h-8" />,
    color: 'text-emerald-600',
    bg: 'bg-emerald-50',
  },
  {
    id: 'ops',
    title: '运维图谱',
    description: '展示告警、日志、链路和故障根因关系',
    icon: <Activity className="w-8 h-8" />,
    color: 'text-amber-600',
    bg: 'bg-amber-50',
  },
];

export const Graph: React.FC = () => {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-slate-900">知识图谱中心</h1>
        <p className="text-slate-500 mt-1">探索和可视化各类知识图谱</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {graphTypes.map((type) => (
          <Link
            key={type.id}
            to={`/graph/${type.id}`}
            className="group bg-white rounded-xl p-6 border border-slate-200 shadow-sm hover:shadow-md transition-all duration-200"
          >
            <div className="flex items-start gap-4">
              <div className={`p-3 ${type.bg} rounded-xl ${type.color} group-hover:scale-110 transition-transform duration-200`}>
                {type.icon}
              </div>
              <div className="flex-1">
                <h3 className="text-lg font-semibold text-slate-900 group-hover:text-primary-600 transition-colors">
                  {type.title}
                </h3>
                <p className="text-slate-500 mt-1 text-sm">{type.description}</p>
              </div>
            </div>
            <div className="mt-4 flex items-center justify-between">
              <span className="text-sm text-slate-400">点击进入</span>
              <div className="w-8 h-8 bg-slate-50 rounded-lg flex items-center justify-center group-hover:bg-primary-50 transition-colors">
                <Network className="w-4 h-4 text-slate-400 group-hover:text-primary-600" />
              </div>
            </div>
          </Link>
        ))}
      </div>

      <div className="bg-white rounded-xl p-6 border border-slate-200 shadow-sm">
        <h2 className="text-lg font-semibold text-slate-900 mb-4">图谱统计</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="text-center">
            <p className="text-3xl font-bold text-slate-900">1,234</p>
            <p className="text-sm text-slate-500 mt-1">节点总数</p>
          </div>
          <div className="text-center">
            <p className="text-3xl font-bold text-slate-900">3,567</p>
            <p className="text-sm text-slate-500 mt-1">关系边数</p>
          </div>
          <div className="text-center">
            <p className="text-3xl font-bold text-slate-900">89</p>
            <p className="text-sm text-slate-500 mt-1">图谱数量</p>
          </div>
          <div className="text-center">
            <p className="text-3xl font-bold text-slate-900">24</p>
            <p className="text-sm text-slate-500 mt-1">今日更新</p>
          </div>
        </div>
      </div>
    </div>
  );
};
