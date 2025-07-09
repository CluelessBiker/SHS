export {};

declare global {
  interface Window {
    gtag: (...args: any[]) => void;
  }
}

export const GA_MEASUREMENT_ID = 'G-RXJNPC08MP';

export const pageview = (url: string) => {
  if (typeof window.gtag !== 'function') return;
  window.gtag('config', GA_MEASUREMENT_ID, {
    page_path: url,
  });
};

export const event = (
  action: string,
  {
    category,
    label,
    value,
  }: {
    category: string;
    label: string;
    value?: number;
  },
) => {
  window.gtag('event', action, {
    event_category: category,
    event_label: label,
    value,
  });
};
