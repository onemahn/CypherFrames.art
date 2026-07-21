export type Category =
  | //'Wedding'
  | 'Portrait'
  | 'Commercial'
  | 'Events'
  | //'Travel'
  | 'Lifestyle';

export interface PortfolioImage {
  id: string;
  src: string;
  alt: string;
  category: Category;
  title: string;
  span: 'tall' | 'wide' | 'normal';
}

const px = (id: string, w = 1200, h = 1600) =>
  `https://images.pexels.com/photos/${id}/pexels-photo-${id}.jpeg?auto=compress&cs=tinysrgb&w=${w}&h=${h}&fit=crop`;

const local = (filename: string) => `/images/${filename}`;

export const portfolioImages: PortfolioImage[] = [
  // Wedding
  // { id: 'w1', src: px('15266109', 1200, 1600), alt: 'Bride and groom on a photoshoot', category: 'Wedding', title: 'Vows in Motion', span: 'tall' },
  // { id: 'w2', src: px('35583449', 1600, 1100), alt: 'Elegant beach wedding couple portrait at sunset', category: 'Wedding', title: 'Golden Hour Vows', span: 'wide' },
  // { id: 'w3', src: px('29139342', 1200, 1500), alt: 'Romantic wedding couple embracing outdoors', category: 'Wedding', title: 'Tender Embrace', span: 'tall' },
  // { id: 'w4', src: px('31522379', 1600, 1100), alt: 'Romantic wedding couple running on forest road', category: 'Wedding', title: 'The First Run', span: 'normal' },

  // Portrait
  { id: 'p1', src: local('p1.jpg'), alt: 'Black and white fashion portrait of woman', category: 'Portrait', title: 'Monochrome Muse', span: 'tall' },
  { id: 'p2', src: local('p2.jpg'), alt: 'Stylish fashion portrait of a confident woman', category: 'Portrait', title: 'Studio Confidence', span: 'wide' },
  // { id: 'p3', src: px('36047440', 1200, 1500), alt: 'Elegant portrait of woman in artistic fashion', category: 'Portrait', title: 'Artistic Drift', span: 'normal' },
  // { id: 'p4', src: px('22742255', 1200, 1500), alt: 'Fashion portrait editorial', category: 'Portrait', title: 'Editorial Light', span: 'tall' },

  // Commercial
  // { id: 'c1', src: px('35658147', 1600, 1100), alt: 'Elegant perfume advert with hands and gold watch', category: 'Commercial', title: 'The Scent Campaign', span: 'wide' },
  // { id: 'c2', src: px('19830239', 1200, 1500), alt: 'Portrait of woman in white clothes', category: 'Commercial', title: 'Brand Study', span: 'normal' },
  // { id: 'c3', src: px('29388341', 1200, 1500), alt: 'Elegant fashion portrait with glamorous accessories', category: 'Commercial', title: 'Accessories Noir', span: 'tall' },

  // Events
  { id: 'e1', src: local('e1.jpg'), alt: 'Concert crowd vibrant lights', category: 'Events', title: 'Electric Nights', span: 'wide' },
  { id: 'e2', src: local('e2.jpg'), alt: 'Concert stage lights crowd', category: 'Events', title: 'Stage Symphony', span: 'tall' },
  { id: 'e3', src: local('e3.jpg'), alt: 'Festival crowd atmosphere', category: 'Events', title: 'Festival Pulse', span: 'normal' },

  // Travel
  // { id: 't1', src: px('13010825', 1200, 1500), alt: 'Mountain landscape travel', category: 'Travel', title: 'Elevation', span: 'tall' },
  // { id: 't2', src: px('14716179', 1600, 1100), alt: 'Majestic mountain view', category: 'Travel', title: 'Silent Peaks', span: 'wide' },
  // { id: 't3', src: px('11558741', 1200, 1500), alt: 'Mountains and river landscape', category: 'Travel', title: 'River & Stone', span: 'normal' },

  // Lifestyle
  { id: 'l1', src: px('37464194', 1200, 1500), alt: 'Lifestyle photography', category: 'Lifestyle', title: 'Quiet Days', span: 'tall' },
  { id: 'l2', src: px('16196781', 1600, 1100), alt: 'Lifestyle longboard', category: 'Lifestyle', title: 'In Motion', span: 'normal' },
  { id: 'l3', src: px('29785545', 1200, 1500), alt: 'Lifestyle fashion', category: 'Lifestyle', title: 'Golden Hour', span: 'wide' },
];

export const categories: Category[] = [
  //'Wedding',
  'Portrait',
  //'Commercial',
  'Events',
  //'Travel',
  'Lifestyle',
];

export const contactLinks = {
  instagram: 'https://www.instagram.com/cypher.frames/',
  whatsapp: 'https://wa.me/+917356721229',
  email: 'mailto:sei@cypherframes.art',
};
