/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      'images.unsplash.com', 
      'cdn.pixabay.com', 
      'www.creative-tim.com',
      'images.pexels.com', // Add Pexels domain here
    ],
  },
  eslint: {
    ignoreDuringBuilds: true,  // This will ignore ESLint errors during build
  },
};

export default nextConfig;
