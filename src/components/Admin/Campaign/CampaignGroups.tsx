// components/campaign-dashboard/CampaignGroups.tsx
'use client';

interface CampaignGroup {
  utm_campaign: string;
  utm_source: string;
  utm_medium: string;
  _count: number;
  _sum: { click_count: number };
}

interface CampaignGroupsProps {
  groups: CampaignGroup[];
}

export default function CampaignGroups({ groups }: CampaignGroupsProps) {
  if (groups.length === 0) {
    return (
      <div className="bg-white rounded-xl shadow-sm p-6 mb-8">
        <h2 className="text-lg font-semibold text-gray-900 mb-4">
          Campaign Performance
        </h2>
        <p className="text-gray-500 text-center py-8">No campaign data available</p>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-xl shadow-sm p-6 mb-8">
      <h2 className="text-lg font-semibold text-gray-900 mb-4">
        Campaign Performance
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {groups.slice(0, 6).map((group, index) => (
          <div
            key={index}
            className="p-4 border border-gray-200 rounded-lg hover:shadow-md transition"
          >
            <p className="font-medium text-gray-900 truncate">{group.utm_campaign}</p>
            <div className="mt-2 space-y-1 text-sm text-gray-600">
              <p>Source: <span className="font-medium">{group.utm_source}</span></p>
              <p>Medium: <span className="font-medium">{group.utm_medium}</span></p>
              <p className="font-semibold text-blue-600">
                {group._sum.click_count} clicks
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}