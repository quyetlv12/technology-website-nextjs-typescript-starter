/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images :{
    domains: ['lh3.googleusercontent.com','avatars.githubusercontent.com']
  },
  env: {
    // NODE_ENV: "development",
    CLIENT_ID_GITHUB : '6fac1b9dc1a15aa4a863'
  },
}

module.exports = nextConfig
