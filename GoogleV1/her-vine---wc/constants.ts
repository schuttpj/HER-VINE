import { NavItem, ServiceItem, HighlightItem } from './types';

export const NAV_ITEMS: NavItem[] = [
  { label: 'Experience', href: '#experience' },
  { label: 'Story', href: '#story' },
  { label: 'Wines', href: '#offerings' },
  { label: 'Contact', href: '#contact' },
];

export const HIGHLIGHTS: HighlightItem[] = [
  { icon: 'MapPin', label: 'Hemel-en-Aarde Valley' },
  { icon: 'Droplets', label: 'Dry Farmed Vineyards' },
  { icon: 'Sun', label: 'Sustainable Practices' },
  { icon: 'Wine', label: 'Low Intervention' },
];

export const SERVICES: ServiceItem[] = [
  {
    id: '01',
    title: 'Vineyard Walks',
    description: 'Immerse yourself in the terroir of Hermanus. Guided walks through the vines where the ocean breeze meets the soil.',
    image: 'https://images.unsplash.com/photo-1533052448348-18e38525b597?q=80&w=2000&auto=format&fit=crop', // Vineyard closeup
    cta: 'Explore'
  },
  {
    id: '02',
    title: 'Tasting Room',
    description: 'An intimate setting designed for sensory awakening. Sample our curated selection of Syrah and Pinot Noir.',
    image: 'https://images.unsplash.com/photo-1516594915697-87eb3b1c14ea?q=80&w=2000&auto=format&fit=crop', // Pouring wine
    cta: 'View Menu'
  },
  {
    id: '03',
    title: 'Culinary Pairing',
    description: 'Farm-to-table accompaniments sourced from the Hemel-en-Aarde valley, designed to elevate every sip.',
    image: 'https://images.unsplash.com/photo-1452251889946-8ff5ea7b27ab?q=80&w=2000&auto=format&fit=crop', // Earthy food/bread
    cta: 'Taste'
  },
  {
    id: '04',
    title: 'Private Events',
    description: 'Exclusive access to our cellar and grounds for weddings, private gatherings, and sunset soirées.',
    image: 'https://images.unsplash.com/photo-1522448763697-39857d4cc455?q=80&w=2000&auto=format&fit=crop', // Gathering outdoors
    cta: 'Inquire'
  }
];