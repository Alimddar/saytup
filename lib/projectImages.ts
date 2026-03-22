import type { StaticImageData } from 'next/image';
import image1 from '../image.png';
import palantir from '../palantir.webp';
import google from '../google.webp';
import lockheed from '../lockheed.avif';

export const PROJECT_IMAGES: Record<string, StaticImageData> = {
  'bakushop-ecommerce': image1,
  'azeritech-corporate': palantir,
  'foodrun-delivery-app': google,
  'prolaw-firm-website': lockheed,
  'fitclub-membership-portal': lockheed,
  'caspian-tours-booking': image1,
};
