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
    description: 'Immerse yourself in the terroir of the Hemel-en-Aarde Valley. Guided walks through the vines where the ocean breeze meets the mountain slopes.',
    image: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?q=80&w=2000&auto=format&fit=crop', // Wine barrels in cellar
    cta: 'Explore'
  },
  {
    id: '02',
    title: 'Curated Tastings',
    description: 'Unique vertical and cross-tastings, comparing Chenin from different terroirs or contrasting varietals. An intellectual journey through taste.',
    image: 'https://images.unsplash.com/photo-1551538827-9c037cb4f32a?q=80&w=2000&auto=format&fit=crop', // Multiple wine glasses for tasting comparison
    cta: 'Discover'
  },
  {
    id: '03',
    title: 'Wine & Terroir Pairings',
    description: 'From Bosman\'s wine and flower pairings to Spookfontein\'s architectural tours. Experience wine through unique lenses—botanical, architectural, or culinary.',
    image: 'https://images.unsplash.com/photo-1514933651103-005eec06c04b?q=80&w=2000&auto=format&fit=crop', // Wine and cheese pairing board
    cta: 'Taste'
  },
  {
    id: '04',
    title: 'Exclusive Estates',
    description: 'Private access to exclusive wine farms in the Hemel-en-Aarde Valley. By appointment only, these hidden gems offer intimate, world-class experiences.',
    image: 'https://images.unsplash.com/photo-1568213816046-0ee1c42bd559?q=80&w=2000&auto=format&fit=crop', // Elegant wine cellar with barrels and bottles
    cta: 'Inquire'
  }
];