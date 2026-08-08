// hooks/useCampaignTracking.ts
'use client';

import { useEffect, useRef } from 'react';
import { usePathname, useSearchParams } from 'next/navigation';

export function useCampaignTracking() {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const trackedRef = useRef<Set<string>>(new Set());

  useEffect(() => {
    // Don't track admin pages
    if (pathname?.startsWith('/admin')) return;

    // Get UTM params
    const utmSource = searchParams?.get('utm_source');
    const utmMedium = searchParams?.get('utm_medium');
    const utmCampaign = searchParams?.get('utm_campaign');
    const utmTerm = searchParams?.get('utm_term');
    const utmContent = searchParams?.get('utm_content');

    // Only track if we have essential UTMs
    if (!utmSource || !utmCampaign) return;

    // Generate or get session ID
    let sessionId = localStorage.getItem('cartforgood_session_id');
    if (!sessionId) {
      sessionId = crypto.randomUUID();
      localStorage.setItem('cartforgood_session_id', sessionId);
    }

    // Prevent duplicate tracking for same campaign in same session
    const key = `${utmCampaign}_${utmSource}`;
    if (trackedRef.current.has(key)) return;
    trackedRef.current.add(key);

    // Send tracking data to backend
    const trackData = async () => {
      try {
        const response = await fetch(
          `${process.env.NEXT_PUBLIC_API_URL}/campaign/track`,
          {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              utm_source: utmSource,
              utm_medium: utmMedium || '',
              utm_campaign: utmCampaign,

              utm_term: utmTerm || '',
              utm_content: utmContent || '',
              session_id: sessionId,
              landing_page: pathname || '/',
              referrer: document.referrer || undefined,

              device_type: getDeviceType(),
              browser: getBrowser(),
              os: getOS(),
              tracked_at: new Date().toISOString(),
            }),
          }
        );

        if (response.ok) {
          console.log('✅ Campaign tracked successfully');
        } else {
          console.error('❌ Tracking failed:', response.status);
        }
      } catch (error) {
        console.error('❌ Tracking error:', error);
        // Store failed request in localStorage for retry
        storeFailedRequest({
          utm_source: utmSource,
          utm_medium: utmMedium || '',
          utm_campaign: utmCampaign,
          utm_term: utmTerm || '',
          utm_content: utmContent || '',
          session_id: sessionId,
          landing_page: pathname || '/',
          referrer: document.referrer || undefined,
          device_type: getDeviceType(),
          browser: getBrowser(),
          os: getOS(),
          tracked_at: new Date().toISOString(),
        });
      }
    };

    trackData();
  }, [pathname, searchParams]);
}

// Helper functions
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

// Store failed requests for retry
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

// Retry failed requests (call this on app load)
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

    // Update queue with remaining items
    localStorage.setItem('tracking_queue', JSON.stringify(remaining));
  } catch (error) {
    console.error('Failed to retry tracking requests:', error);
  }
}