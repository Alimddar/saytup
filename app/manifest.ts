import { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Saytup.az — Veb İnkişaf Studiyası',
    short_name: 'Saytup',
    description: 'Bakıda peşəkar veb sayt hazırlayan studiya',
    start_url: '/',
    display: 'standalone',
    background_color: '#F5F5F5',
    theme_color: '#1A73E8',
    icons: [
      { src: '/icon-192.png', sizes: '192x192', type: 'image/png' },
      { src: '/icon-512.png', sizes: '512x512', type: 'image/png' },
    ],
  };
}
