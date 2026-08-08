// components/campaign-dashboard/CampaignSummaryCards.tsx
'use client';

import { Users, Filter, TrendingUp, Calendar } from 'lucide-react';

interface CampaignSummaryCardsProps {
  summary: {
    total_clicks: number;
    total_click_count: number;
    unique_campaigns: number;
  };
  todayStats: {
    total_clicks: number;
    unique_campaigns: number;
  } | null;
}

export default function CampaignSummaryCards({ summary, todayStats }: CampaignSummaryCardsProps) {
  const avgClicksPerCampaign = summary.unique_campaigns > 0
    ? (summary.total_clicks / summary.unique_campaigns).toFixed(1)
    : 0;

  const cards = [
    {
      title: 'Total Clicks',
      value: summary.total_clicks.toLocaleString(),
      subtitle: `${summary.total_click_count} total click events`,
      icon: Users,
      iconBg: 'bg-blue-100',
      iconColor: 'text-blue-600',
    },
    {
      title: 'Unique Campaigns',
      value: summary.unique_campaigns,
      subtitle: 'Active campaigns tracked',
      icon: Filter,
      iconBg: 'bg-green-100',
      iconColor: 'text-green-600',
    },
    {
      title: 'Avg Clicks/Campaign',
      value: avgClicksPerCampaign,
      subtitle: 'Average per campaign',
      icon: TrendingUp,
      iconBg: 'bg-purple-100',
      iconColor: 'text-purple-600',
    },
    {
      title: "Today's Clicks",
      value: todayStats?.total_clicks || 0,
      subtitle: `${todayStats?.unique_campaigns || 0} active today`,
      icon: Calendar,
      iconBg: 'bg-orange-100',
      iconColor: 'text-orange-600',
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
      {cards.map((card, index) => {
        const Icon = card.icon;
        return (
          <div
            key={index}
            className="bg-white rounded-xl shadow-sm p-6 border border-gray-100 hover:shadow-md transition"
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">{card.title}</p>
                <p className="text-2xl font-bold text-gray-900 mt-1">{card.value}</p>
              </div>
              <div className={`${card.iconBg} p-3 rounded-lg`}>
                <Icon className={`w-6 h-6 ${card.iconColor}`} />
              </div>
            </div>
            <p className="text-sm text-gray-500 mt-2">{card.subtitle}</p>
          </div>
        );
      })}
    </div>
  );
}