import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  // next.config.js

  productionBrowserSourceMaps: false, // disable source maps in production


  images:{
    remotePatterns:[
      {
        protocol:'https',
        hostname:"images.unsplash.com" 
      },
      {
        protocol:'https',
        hostname:"res.cloudinary.com" 
      },
      {
        protocol:'https',
        hostname:"plus.unsplash.com" 
      }
    ]
  }
};

export default nextConfig;
