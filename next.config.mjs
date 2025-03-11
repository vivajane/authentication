/** @type {import('next').NextConfig} */

const nextConfig = {
  output: 'export', // Ensures static export (if needed)
  images: {
    domains: ["images.pexels.com"], // Allow external images
  },
};

export default nextConfig;
