export interface NavItem {
  label: string;
  href: string;
}

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  image: string;
  icon?: string;
  cta: string;
}

export interface HighlightItem {
  icon: string;
  label: string;
}

export interface SocialLink {
  platform: string;
  url: string;
  icon: string;
}