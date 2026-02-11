import { logEvent } from 'firebase/analytics';
import { initializeAnalytics } from './firebase';

// Custom event tracking functions
export const trackPageView = (pageName: string, pageTitle?: string) => {
  const analytics = initializeAnalytics();
  if (analytics) {
    logEvent(analytics, 'page_view', {
      page_name: pageName,
      page_title: pageTitle || pageName,
    });
  }
};

export const trackAppView = (appName: string, appSlug: string) => {
  const analytics = initializeAnalytics();
  if (analytics) {
    logEvent(analytics, 'view_item', {
      item_id: appSlug,
      item_name: appName,
      item_category: 'streaming_app',
    });
  }
};

export const trackDeviceView = (deviceName: string, deviceSlug: string) => {
  const analytics = initializeAnalytics();
  if (analytics) {
    logEvent(analytics, 'view_item', {
      item_id: deviceSlug,
      item_name: deviceName,
      item_category: 'streaming_device',
    });
  }
};

export const trackSearch = (searchTerm: string) => {
  const analytics = initializeAnalytics();
  if (analytics) {
    logEvent(analytics, 'search', {
      search_term: searchTerm,
    });
  }
};

export const trackClick = (elementName: string, elementType?: string) => {
  const analytics = initializeAnalytics();
  if (analytics) {
    logEvent(analytics, 'select_content', {
      content_type: elementType || 'button',
      item_id: elementName,
    });
  }
};

export const trackCustomEvent = (eventName: string, eventParams?: Record<string, any>) => {
  const analytics = initializeAnalytics();
  if (analytics) {
    logEvent(analytics, eventName, eventParams);
  }
};
