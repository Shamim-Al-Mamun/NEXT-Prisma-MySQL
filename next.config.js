/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    MONGO_URI: 'mongodb://localhost:27017/accounts_datahostbd',
    //MONGO_URI: 'mongodb://localhost:27017/accounts_datahostbd'
  }
};

module.exports = nextConfig;
