/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images :{
    domains: ['lh3.googleusercontent.com','avatars.githubusercontent.com','placeimg.com']
  },
  env: {
    // NODE_ENV: "development",
    CLIENT_ID_GITHUB : '6fac1b9dc1a15aa4a863',
    BASE_API : "http://localhost:4000/api",
    API_LOGIN_GOOGLE : "http://localhost:4000/auth/google"
  },
}

module.exports = nextConfig
