// components/Admin/Campaign/CampaignClicksTable.tsx
'use client';


import { CampaignClick } from '@/redux/features/campaign/campaignApi';
import { Package, Store } from 'lucide-react';

interface CampaignClicksTableProps {
  data: CampaignClick[];
  isLoading?: boolean;
}

export default function CampaignClicksTable({ data, isLoading }: CampaignClicksTableProps) {
  const formatDate = (date: string) => {
    return new Date(date).toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric',
    });
  };

  if (isLoading) {
    return (
      <div className="bg-white rounded-xl shadow-sm overflow-hidden">
        <div className="px-6 py-4 border-b border-gray-200">
          <div className="h-6 bg-gray-200 rounded w-24 animate-pulse"></div>
        </div>
        <div className="p-6 space-y-3">
          {[1, 2, 3, 4, 5].map((i) => (
            <div key={i} className="h-12 bg-gray-100 rounded animate-pulse"></div>
          ))}
        </div>
      </div>
    );
  }

  if (!data || data.length === 0) {
    return (
      <div className="bg-white rounded-xl shadow-sm overflow-hidden">
        <div className="px-6 py-4 border-b border-gray-200">
          <h2 className="text-lg font-semibold text-gray-900">Table</h2>
        </div>
        <div className="p-12 text-center">
          <Package className="w-12 h-12 text-gray-300 mx-auto mb-3" />
          <p className="text-gray-500">No store click data available</p>
          <p className="text-sm text-gray-400 mt-1">
            Try adjusting your filters or check back later
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-xl shadow-sm overflow-hidden">
      <div className="px-6 py-4 border-b border-gray-200 flex items-center justify-between">
        <h2 className="text-lg font-semibold text-gray-900">Table</h2>
        <span className="text-sm text-gray-500">{data.length} records</span>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Date
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Campaign
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Source
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Store Clicked
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Clicks
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Device
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {data.map((click, index) => {
              // Use store name from the store object or fallback
              const storeName = click.store?.name || click.utm_content || '-';
              const hasStore = !!click.store;
              const letterPrefix = String.fromCharCode(97 + index % 26);

              return (
                <tr key={click.id || index} className="hover:bg-gray-50 transition">
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {formatDate(click.created_at)}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="text-sm font-medium text-gray-900">
                      {click.utm_campaign}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="inline-flex px-2 py-1 text-xs font-semibold rounded-full bg-blue-50 text-blue-700">
                      {click.utm_source}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center gap-2">
                      {hasStore ? (
                        // <Store className="w-4 h-4 text-green-500" />
                        <img crossOrigin='' src={click.store?.logo} alt="Store" className="w-6 h-6 text-green-500" />
                      ) : (
                        <Store className="w-6 h-6 text-gray-300" />
                      )}
                      <span className={`text-sm font-medium ${hasStore ? 'text-gray-900' : 'text-gray-400'}`}>
                        {/* {letterPrefix}. {storeName} */}

                        {storeName}
                      </span>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="inline-flex items-center justify-center min-w-[32px] px-2 py-1 text-sm font-semibold text-blue-700 bg-blue-50 rounded-full">
                      {click.click_count}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="inline-flex px-2 py-1 text-xs font-medium rounded-full bg-gray-100 text-gray-700 capitalize">
                      {click.device_type || 'desktop'}
                    </span>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}