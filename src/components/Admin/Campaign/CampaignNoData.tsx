// components/Admin/Campaign/CampaignNoData.tsx
'use client';

import { BarChart3 } from 'lucide-react';

export default function CampaignNoData() {
  return (
    <div className="bg-white rounded-xl shadow-sm p-12 text-center">
      <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
        <BarChart3 className="w-8 h-8 text-gray-400" />
      </div>
      <h3 className="text-lg font-medium text-gray-900 mb-1">No campaign data yet</h3>
      <p className="text-gray-500 text-sm">
        Start running campaigns with UTM parameters to see analytics here.
      </p>
      <div className="mt-4 bg-gray-50 rounded-lg p-3 inline-block text-left">
        <code className="text-xs text-gray-600">
          ?utm_source=facebook&utm_medium=paid_social&utm_campaign=your_campaign
        </code>
      </div>
    </div>
  );
}