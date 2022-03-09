/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images :{
    domains: ['lh3.googleusercontent.com','avatars.githubusercontent.com','placeimg.com']
  },
  env: {
    // NODE_ENV: "development",
    // CLIENT_ID_GITHUB : '6fac1b9dc1a15aa4a863',
    CLIENT_ID_GITHUB : '76eec1e1d8353fad1605',
    BASE_API : "https://bloggerapi1.herokuapp.com/api",
    API_LOGIN_GOOGLE : "https://bloggerapi1.herokuapp.com/auth/google"
  },
}

module.exports = nextConfig
