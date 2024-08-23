/** @type {import('next').NextConfig} */
const nextConfig = {
  // PLEASE BEWARE as per the config here all types of allowed to be displayed in website if that is something we dont want then
  // can do something like this
  //  images: {
  //     domains: [
  //       'lh3.googleusercontent.com',
  //       'example.com', // Add other domains here
  //     ],
  //   },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "*",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
