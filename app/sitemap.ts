import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://amitopsharma-co.example.com',
      lastModified: new Date()
    }
  ];
}
