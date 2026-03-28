/**
 * Analytics utility for tracking events via Google Analytics (GA4).
 * Replace the GA4 Measurement ID in index.html with your real ID.
 */

export function trackEvent(category, action, label = '') {
  if (typeof window.gtag === 'function') {
    window.gtag('event', action, {
      event_category: category,
      event_label: label,
    });
  }
}

export function trackButtonClick(buttonName, url = '') {
  trackEvent('Button', 'click', buttonName);
}

export function trackSectionView(sectionName) {
  trackEvent('Section', 'view', sectionName);
}
