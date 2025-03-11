/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["images.pexels.com"], // Allow images from Pexels
    unoptimized: true, // Disable Next.js image optimization for static export
  },
  output: "export", // Keep this if you need static export
};

export default nextConfig;
