/** @type {import('next').NextConfig} */
const nextConfig = {
    compiler: {
        styledComponents: true, // Must be set to true
      },
      images: {
        domains: ['insider.fitt.co' , 'global-uploads.webflow.com' , 'media.gq-magazine.co.uk'], // Add this line to allow the domain
      },
  };
  
  export default nextConfig;
  