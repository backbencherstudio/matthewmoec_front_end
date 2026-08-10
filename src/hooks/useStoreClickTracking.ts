// hooks/useStoreClickTracking.ts
'use client';

import { useTrackCampaignVisitMutation } from '@/redux/features/campaign/campaignApi';
import { useSearchParams, usePathname } from 'next/navigation';


export function useStoreClickTracking() {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const [trackCampaignVisit] = useTrackCampaignVisitMutation();

  const trackStoreClick = async (storeId: string) => {
    // Get UTM params from URL
    const utmSource = searchParams?.get('utm_source');
    const utmMedium = searchParams?.get('utm_medium');
    const utmCampaign = searchParams?.get('utm_campaign');
    const utmTerm = searchParams?.get('utm_term');
    const utmContent = searchParams?.get('utm_content');

    // Only track if we have essential UTMs
    if (!utmSource || !utmCampaign) {
      console.log('⚠️ No UTM parameters found, skipping tracking');
      return;
    }

    // Generate or get session ID
    let sessionId = localStorage.getItem('cartforgood_session_id');
    if (!sessionId) {
      sessionId = crypto.randomUUID();
      localStorage.setItem('cartforgood_session_id', sessionId);
    }

    // Prepare tracking data
    const trackingData = {
      utm_source: utmSource,
      utm_medium: utmMedium || '',
      utm_campaign: utmCampaign,
      utm_term: utmTerm || '',
      utm_content: utmContent || '',  // ✅ Store/ad creative name
      store_id: storeId,               // ✅ Store identifier
      session_id: sessionId,
      landing_page: pathname || '/',
      referrer: document.referrer || undefined,
      device_type: getDeviceType(),
      browser: getBrowser(),
      os: getOS(),
    };

    try {
      await trackCampaignVisit(trackingData).unwrap();
      console.log('✅ Store click tracked successfully:', {
        store: storeId,
        campaign: utmCampaign,
        content: utmContent || 'N/A'
      });
    } catch (error) {
      console.error('❌ Failed to track store click:', error);
      // Store failed request for retry
      storeFailedRequest(trackingData);
    }
  };

  return { trackStoreClick };
}

// Helper functions (same as before)
function getDeviceType() {
  if (typeof window === 'undefined') return 'unknown';
  const ua = navigator.userAgent;
  if (/Mobi|Android|iPhone|iPad|iPod/i.test(ua)) return 'mobile';
  if (/Tablet|iPad/i.test(ua)) return 'tablet';
  return 'desktop';
}

function getBrowser() {
  if (typeof window === 'undefined') return 'unknown';
  const ua = navigator.userAgent;
  if (ua.includes('Chrome') && !ua.includes('Edg')) return 'Chrome';
  if (ua.includes('Firefox')) return 'Firefox';
  if (ua.includes('Safari') && !ua.includes('Chrome')) return 'Safari';
  if (ua.includes('Edg')) return 'Edge';
  return 'Other';
}

function getOS() {
  if (typeof window === 'undefined') return 'unknown';
  const ua = navigator.userAgent;
  if (ua.includes('Windows')) return 'Windows';
  if (ua.includes('Mac OS')) return 'macOS';
  if (ua.includes('Linux')) return 'Linux';
  if (ua.includes('Android')) return 'Android';
  if (ua.includes('iOS') || ua.includes('iPhone') || ua.includes('iPad')) return 'iOS';
  return 'Other';
}

function storeFailedRequest(data: any) {
  try {
    const queue = JSON.parse(localStorage.getItem('tracking_queue') || '[]');
    queue.push({
      ...data,
      timestamp: Date.now(),
    });
    localStorage.setItem('tracking_queue', JSON.stringify(queue));
  } catch (error) {
    console.error('Failed to queue tracking request:', error);
  }
}

export function retryFailedRequests() {
  try {
    const queue = JSON.parse(localStorage.getItem('tracking_queue') || '[]');
    if (queue.length === 0) return;

    const remaining: any[] = [];

    queue.forEach((data: any) => {
      fetch(`${process.env.NEXT_PUBLIC_API_URL}/campaign/track`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      })
        .then((response) => {
          if (response.ok) {
            console.log('✅ Retried tracking succeeded');
          } else {
            remaining.push(data);
          }
        })
        .catch(() => {
          remaining.push(data);
        });
    });

    localStorage.setItem('tracking_queue', JSON.stringify(remaining));
  } catch (error) {
    console.error('Failed to retry tracking requests:', error);
  }
}